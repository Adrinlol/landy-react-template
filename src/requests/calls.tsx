import { CallData } from "../interfaces/callData";
import apiClient from "../apiClient";
export const RetrieveCallData = async (tenantId: string, firstAttempt: boolean = true): Promise<CallData> => {
    try {
        const response = await apiClient.get(`/callrecords/records/${tenantId}`);
        return response.data;
    } catch (err) {
        if (firstAttempt) {
            await setTimeout(async () => {}, 500);
            return await RetrieveCallData(tenantId, false)
        } else {
            console.error("Error fetching call data:", err);
    
            throw err;
        }
    }
};
