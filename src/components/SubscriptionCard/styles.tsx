import { CSSProperties } from "react";

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "row", // ensure horizontal layout
    flexWrap: "wrap",
    justifyContent: "center",
    // The "gap" property may not be in the CSSProperties type for some TS versions:
    gap: "24px" as unknown as CSSProperties["gap"],
    padding: "16px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "24px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "320px",
    textAlign: "center",
  },
  title: {
    fontSize: "20px",
    fontWeight: 600,
    color: "#333",
  },
  price: {
    fontSize: "24px",
    fontWeight: 700,
    color: "#111",
    marginTop: "8px",
  },
  features: {
    marginTop: "16px",
    padding: 0,
    listStyle: "none",
    color: "#666",
  },
  featureItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px" as unknown as CSSProperties["gap"],
  },
  subscribeButton: {
    marginTop: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
};

export default styles;
