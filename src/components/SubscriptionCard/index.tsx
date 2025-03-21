import React from "react";
import styles from "./styles";

type Plan = {
  name: string;
  price: string;
  features: string[];
};

type SubscriptionCardProps = {
  plans: Plan[];
};

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ plans }) => {
  return (
    <div style={styles.container}>
      {plans.map((plan, index) => (
        <div key={index} style={styles.card}>
          <h2 style={styles.title}>{plan.name}</h2>
          <p style={styles.price}>₹{plan.price}</p>
          <ul style={styles.features}>
            {plan.features.map((feature, i) => (
              <li key={i} style={styles.featureItem}>
                ✅ {feature}
              </li>
            ))}
          </ul>
          <button style={styles.subscribeButton}>Subscribe</button>
        </div>
      ))}
    </div>
  );
};

export default SubscriptionCard;
