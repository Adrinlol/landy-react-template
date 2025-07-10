export interface Tier {
    name: string;
    price: string;
    subtitle: string;
    features: string[];
    action: string;
    priceLabel: string;
    value: number;
    option: string;
    comingSoon?: boolean;
    userInclusion: number;
    additionalCostPerUser: number;
    costValue: number;
}