import { CallData } from "../interfaces/callData";
import apiClient from "../apiClient";
import axios, { AxiosError } from "axios";
import { RequestOAuthLinkTest } from "./auth";
import { JobDetail } from "../interfaces/jobDetail";
export const RetrieveCallData = async (tenantId: string, email: string, requiresAuth: boolean = true, firstAttempt: boolean = true): Promise<CallData> => {
    try {
        const response = await apiClient.get(`/callrecords/records/${tenantId}`);
        return response.data;
    } catch (err) {
        const axiosError = err as AxiosError;
        console.log(axiosError.response)
        if (firstAttempt) {
            setTimeout(async () => {}, 500);
            return await RetrieveCallData(tenantId, email, true, false)
        } else {
            console.error("Error fetching call data:", axiosError);
            if (axiosError.response?.status == 403 && requiresAuth) {
                await RequestOAuthLinkTest(tenantId, email)
            }
            throw err;
        }
    }
};
export const RetrieveOrganizationUserData = async (tenantId: string): Promise<JobDetail[]> => {
    const response = await apiClient.get(`/callrecords/organization-user-data/${tenantId}`)
    return response.data
}
