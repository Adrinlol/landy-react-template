import apiClient from "../apiClient";
import { Tier } from "../data/pricingTiers";

export async function RequestOAuthLink() {
  await apiClient.get(`/auth/oauth`)
    .then(resp => {
      window.location.href = resp.data;
    });
};
export async function RequestOAuthLinkTest(tenantId: string, email: string) {
  await apiClient.get(`/auth/oauth?tenantId=${tenantId}&adminEmail=${email}`,)
    .then(resp => {
      window.location.href = resp.data;
    });
};

export async function RetrieveTierSettings(): Promise<Tier[]> {
  return await apiClient.get(`/auth/subscription-tiers`)
    .then(resp => Object.values(resp.data));
};
