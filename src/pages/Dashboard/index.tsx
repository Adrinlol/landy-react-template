import { Button } from "antd";
import { useSearchParams } from "react-router-dom";
import Alert from '@mui/material/Alert';
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { CallData } from "../../interfaces/callData";
import CallDataTable from "../../components/Table";
import { useMsal } from "@azure/msal-react";
import { AccountInfo, InteractionStatus } from "@azure/msal-browser";
import { RetrieveCallData } from "../../requests/calls";
import apiClient from "../../apiClient";
import { CheckUserSubscription } from "../../requests/customer";
import { SubscriptionTier } from "../../common/types";
import { config } from "../../services/config";

export default function Dashboard() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [callData, setCallData] = useState<CallData>()
  const [open, setOpen] = useState(false)
  const { instance, accounts, inProgress } = useMsal();
  const [user, setUser] = useState<AccountInfo | null>(null);
  const [subscriptionStatus, setSubscriptionStatus] = useState<SubscriptionTier>()
  const [failureState, setFailureState] = useState<boolean>(false)
  const [countDownValue, setCountDownValue] = useState<number>()
  useEffect(() => {
    const getUserSubscriptionStatus = async () => {
      var response = await CheckUserSubscription()
      setSubscriptionStatus(response as SubscriptionTier)
      if (response as SubscriptionTier == SubscriptionTier.None) {
        window.location.href = config.routes.subscriptionSignUp
      } else {
        if (failureState == true) {
          countDown(5)
        } else {
          requestCallData()
        }
      }
    }
    if (searchParams.get("success") == "true") {
      setOpen(true)
    }
    var activeUser = instance.getActiveAccount()
    if (activeUser) {
      getUserSubscriptionStatus()
    }
    if (inProgress === InteractionStatus.None && accounts.length > 0) {
      setUser(accounts[0]);
    }
  }, [accounts, inProgress])

  const requestCallData = async () => {

    var response: CallData = await RetrieveCallData(accounts[0].tenantId, accounts[0].username, searchParams.get("requiresAuth") == "true")
    setCallData(response)
  }

  const requestOAuthLink = async () => {
    await apiClient.get(`/auth/oauth`)
      .then(resp => {
        console.log(resp)
        window.location.href = resp.data;
      }).catch(err => console.log(err));
  };
  const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

  const countDown = async (startTime: number) => {
    for (var i = startTime; i > 0; i--) {
      setCountDownValue(i)
      await delay(1000);
    }

    setFailureState(false);
    await requestCallData();
  };
  return (
    <>
      {open && <Alert
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        style={{ width: "300px", margin: "0 auto" }}>App integration successful!</Alert>}
      {user && <p>Welcome, {user.name}</p>}
      <p>You are on the <b>{SubscriptionTier[subscriptionStatus!]}</b> subscription tier</p>
      {failureState == true && <>
        <p>Apologies for the delay - we are setting up your account.</p>
        <p>Trying again in {countDownValue}</p>
      </>}
      {failureState == false && <div style={{ width: "60%", margin: "0 auto" }}>
        {callData && <CallDataTable data={callData} />}
        {!callData && <p>fetching call logs...</p>}
      </div>}
    </>
  )
}