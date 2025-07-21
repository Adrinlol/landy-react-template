import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import 'antd/dist/antd.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./router";
import { MsalProvider } from "@azure/msal-react";
import { useEffect, useState } from "react";
import { msalInstance } from "./services/msal";
import { CircularProgress } from "@mui/material";

const App = () => {
    const [msalReady, setMsalReady] = useState(false);

    useEffect(() => {
      const initializeMsal = async () => {
        try {
          await msalInstance.initialize();
          const accounts = msalInstance.getAllAccounts();
          if (accounts.length > 0) {
            msalInstance.setActiveAccount(accounts[0]);
          }
          setMsalReady(true);
        } catch (error) {
          console.error("MSAL initialization failed:", error);
        }
      };

      initializeMsal();
    }, []);

  
  if (!msalReady) {
    return <CircularProgress />;
  }
  return (
    <MsalProvider instance={msalInstance}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
    </MsalProvider>
  )
};

ReactDOM.render(<App />, document.getElementById("root"));
