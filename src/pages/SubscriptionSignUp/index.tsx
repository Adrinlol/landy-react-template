import { useEffect, useState } from "react";
import { Tier } from "../../data/pricingTiers";
import StripeWrapper from "../../components/Payment/Stripe";
import { RetrieveTierSettings } from "../../requests/auth";

export default function SubscriptionSignUp() {
    const [option, setOption] = useState<string>("freeOption");
    const [selectedTier, setSelectedTier] = useState<Tier | undefined>();
    const [tiers, setTiers] = useState<Tier[]>([]);

    useEffect(() => {
        const retrieveTierSettings = async () => {
            const fetchedTiers = await RetrieveTierSettings();
            setTiers(fetchedTiers);
        };

        retrieveTierSettings();
    }, []);

    useEffect(() => {
        if (option && tiers.length > 0) {
            const tier = tiers.find(x => x.option === option);
            setSelectedTier(tier);
        }
    }, [option, tiers]);

    const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setOption(e.target.value);
    };

    const displayTierSelector = () => {
        return <select id="tier-select" value={option} onChange={handleDropdownChange}>
            {tiers.map((tier) => (
                <option key={tier.option} value={tier.option} disabled={tier.comingSoon}>
                    {tier.name} {tier.comingSoon ? " - coming soon" : ""}
                </option>
            ))}
        </select>
    }
    const displaySelectedTier = () => {
        if (selectedTier) {
            return <div className="card h-100 rounded-4 shadow-sm" style={{ maxWidth: '400px', opacity: selectedTier!.comingSoon ? 0.6 : 1 }}>
                <div className={`card-body d-flex flex-column p-4 ${selectedTier!.comingSoon ? "bg-light" : ""}`}>
                    <h5 className="card-title text-center fw-bold" style={{ fontSize: "1.8rem", whiteSpace: "nowrap" }}>
                        {selectedTier!.name}
                    </h5>
                    <h6 className="text-center fs-4">{selectedTier!.priceLabel}</h6>
                    <p className="text-muted text-center">
                        {selectedTier!.comingSoon ? "Coming Soon" : selectedTier!.subtitle}
                    </p>
                    <hr />
                    <ul className="list-unstyled flex-grow-1 mb-4 text-start">
                        {selectedTier!.features.map((feature, i) => (
                            <li key={i} className="mb-2">✓ {feature}</li>
                        ))}
                    </ul>
                </div>
            </div>
        } 
        return <></>

    }
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2rem',
            }}
        >
            <div style={{ textAlign: 'center', width: '100%' }}>
                <div style={{ width: "100vw", display: "flex", justifyContent: "space-between", gap: "2%" }}>
                    <StripeWrapper selectedTier={selectedTier} displaySelectedTier={displaySelectedTier} displayTierSelector={displayTierSelector} />
                </div>
            </div>
        </div>
    );
}
