import React, { useEffect, useState } from "react";
import {
    Elements,
    CardElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CreateFreeSubscription, CreateSubscription } from "../../requests/stripe";
import { Button } from "antd";
import { GetUserCount } from "../../requests/customer";
import { Tier } from "../../data/pricingTiers";

const stripePromise = loadStripe("pk_test_51RS99I2Us93KiirWj8LlqtPgglR9cQBCUF2O89XBoVkCPM1TWn2YGMdmgbjN0rdQLXwwzVFWAxCPslQTvSsxwoVM00QNvpXyf4");

interface Props {
    selectedTier: Tier | undefined;
    displaySelectedTier: () => JSX.Element;
    displayTierSelector: () => JSX.Element;
}

function SubscriptionForm({ selectedTier, displaySelectedTier, displayTierSelector, }: Props) {
    const stripe = useStripe();
    const elements = useElements();
    const [status, setStatus] = useState("");
    const [userCount, setUserCount] = useState<number>(0);
    useEffect(() => {
        const retrieveUserCount = async () => {
            const count = await GetUserCount();
            setUserCount(count);
        };
        retrieveUserCount()
    }, [])


    const handleSubmit = async (e: React.FormEvent) => {
        if (selectedTier && selectedTier.value == 0) {
            await createFreeSubscriptionRequest(e)
        } else {
            await createPaidSubscription(e)
        }
    };
    const createFreeSubscriptionRequest = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Processing...");
        try {
            await CreateFreeSubscription();
            setStatus(`✅ Subscription created!`);
            setTimeout(() => window.location.href = "/dashboard", 3000)
        } catch {
            setStatus("❌ Server error");
        }
    }
    const createPaidSubscription = async (e: React.FormEvent) => {

        if (!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);
        if (!cardElement) return;

        const { paymentMethod, error } = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement
        });

        if (error) {
            setStatus(error.message || "Failed to create payment method.");
            return;
        }
        try {
            const response = await CreateSubscription(
                selectedTier!.value,
                paymentMethod.id,
                userCount
            );
            console.log(response.status)
            if (response.status == "active") {
                setStatus(`✅ Subscription created!`);
                setTimeout(() => window.location.href = "/dashboard", 3000)
            } else {
                setStatus(response.message || "❌ Subscription failed");
            }
        } catch {
            setStatus("❌ Server error");
        }
    }
    const displayCost = () => {
        if (selectedTier && selectedTier.userInclusion < userCount) {
            return userCount * selectedTier.additionalCostPerUser
        } else {
            return selectedTier?.costValue
        }
    }
    return (
        <form
            onSubmit={handleSubmit}
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                padding: "2rem",
                border: "1px solid #e0e0e0",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                maxWidth: "400px",
                margin: "0 auto",
                backgroundColor: "#fff"
            }}
        >
            <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>Subscribe</h3>
            {displayTierSelector()}
            {<>{displaySelectedTier()}</>}

            {userCount > 0 && <p>There are {userCount} users in your <b>Microsoft 365 organization</b></p>}
            {selectedTier && selectedTier.value != 0 && <div
                style={{
                    padding: "0.75rem",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    backgroundColor: "#f9f9f9"
                }}
            >
                <CardElement />
            </div>}
            {selectedTier && userCount != 0 && <p>Monthly cost: ${displayCost()}</p>}

            <button
                type="submit"
                disabled={!stripe || userCount <= 0}
                style={{
                    backgroundColor: "#4CAF50",
                    color: "white",
                    padding: "0.75rem",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "1rem"
                }}
            >
                Subscribe
            </button>

            <p style={{ textAlign: "center", color: "#666" }}>{status}</p>
        </form>
    );
}

export default function StripeWrapper({ selectedTier, displaySelectedTier, displayTierSelector }: Props) {
    return (
        <Elements stripe={stripePromise}>
            <SubscriptionForm selectedTier={selectedTier} displaySelectedTier={displaySelectedTier} displayTierSelector={displayTierSelector} />
        </Elements>
    );
}
