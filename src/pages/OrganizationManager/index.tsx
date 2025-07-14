import { useEffect, useState } from "react"
import { RetrieveOrganizationUserData } from "../../requests/calls"
import { useMsal } from "@azure/msal-react";
import { JobDetail } from "../../interfaces/jobDetail";

export default function OrganizationManager() {
    const { instance, accounts, inProgress } = useMsal();
    const [jobData, setJobData] = useState<JobDetail[]>([])
    useEffect(() => {
        const retrieveJobDetails = async () => {
            var response = await RetrieveOrganizationUserData(accounts[0].tenantId)
            console.log(response)
            setJobData(response)
        }
        retrieveJobDetails()
    }, [])
    return(
        <>
        <h1>Organization Manager</h1>
        {jobData.map(job => {
            return <p>{job.name} - {job.averageHourlyValue}</p>
        })}
        </>
    )
}