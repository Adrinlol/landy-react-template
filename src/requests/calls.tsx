import { CallData } from "../interfaces/callData";
import apiClient from "../apiClient";
export const RetrieveCallData = async (tenantId: string): Promise<CallData> => {
    try {
        const response = await apiClient.get(`/callrecords/records/${tenantId}`);
        return response.data;
    } catch (err) {
        console.error("Error fetching call data:", err);
        throw err;
    }
};
