import { Navigate } from "react-router-dom";
import { useMsal } from "@azure/msal-react";
import { InteractionRequiredAuthError, InteractionStatus } from "@azure/msal-browser";
import { msalInstance } from "../services/msal";
import { config } from "../services/config";
import apiClient from "../apiClient";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { accounts, inProgress } = useMsal();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    if (inProgress !== InteractionStatus.None) return;
  
    const timer = setTimeout(() => {
      const checkAndRedirect = async () => {
        try {
          await msalInstance.acquireTokenSilent({ scopes: [config.scopes.USER] });
          setIsAuthorized(true);
        } catch (err) {
          if (err instanceof InteractionRequiredAuthError) {
            try {
              const resp = await apiClient.get(`/auth/oauth`);
              window.location.href = resp.data;
            } catch (err) {
              console.error("Failed to get OAuth link", err);
              setIsAuthorized(false);
            }
          } else {
            console.error("Unknown token error", err);
            setIsAuthorized(false);
          }
        }
      };
  
      checkAndRedirect();
    }, 500);
  
    return () => clearTimeout(timer);
  }, [inProgress]);
  
  

  if (inProgress !== InteractionStatus.None || isAuthorized === null) {
    return <div>Loading...</div>;
  }

  if (accounts.length === 0 || isAuthorized === false) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
