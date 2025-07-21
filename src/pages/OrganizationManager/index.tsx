import { useEffect, useState } from "react"
import { RetrieveOrganizationUserData } from "../../requests/calls"
import { useMsal } from "@azure/msal-react";
import { JobDetail } from "../../interfaces/jobDetail";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CircularProgress } from "@mui/material";
export default function OrganizationManager() {
    const { instance, accounts, inProgress } = useMsal();
    const [jobData, setJobData] = useState<JobDetail[]>([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        if (!accounts || accounts.length === 0) return;

        const retrieveJobDetails = async () => {
            try {
                setLoading(true)
                const response = await RetrieveOrganizationUserData(accounts[0].tenantId);
                setJobData(response);
            } catch (error) {
                console.error("Failed to retrieve job details:", error);
            }
            setLoading(false)
        }

        retrieveJobDetails();
    }, [accounts]);


    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "center", flexDirection: "column", textAlign: "center" }}>

            <h1>Organization Manager</h1>
            <small>*To modify employee hourly cost please upgrade</small>
            <div style={{ width: "60%", margin: "0 auto", marginTop: "30px", marginBottom: "30px" }}>
                {loading && <CircularProgress />}
                {jobData.length > 0 && <>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Job Title</TableCell>
                                    <TableCell align="center">Employee Count</TableCell>
                                    <TableCell align="center">Average Hourly Cost</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {jobData.map((job) => (
                                    <TableRow
                                        key={job.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {job.name}
                                        </TableCell>
                                        <TableCell align="center">{job.employeeCount}</TableCell>
                                        <TableCell align="center">{job.averageHourlyValue}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>}
            </div>
        </div>
    )
}