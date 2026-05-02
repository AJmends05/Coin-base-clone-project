import React from "react";
import zeroImage from "../../assets/images/zero_en-gb_2.png";

function CoinbaseOneSection() {
    return (
        <section style={{ backgroundColor: "#f1f2f3", padding: "80px 0" }}>
            <div style={{
                maxWidth: 1440,
                margin: "0 auto",
                padding: "0 80px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 60
            }}>
                {/* Left — Image */}
                <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                    <img
                        src={zeroImage}
                        alt="Coinbase One - Zero trading fees"
                        style={{ width: "100%", maxWidth: 480, borderRadius: 24, objectFit: "contain" }}
                    />
                </div>

                {/* Right — Text */}
                <div style={{ flex: 1 }}>
                    {/* Badge */}
                    <div style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        border: "1.5px solid #ccc",
                        borderRadius: 100,
                        padding: "6px 14px",
                        fontSize: 13,
                        fontWeight: 600,
                        marginBottom: 24,
                        background: "white"
                    }}>
                        <i className="bi bi-hexagon-fill" style={{ fontSize: 12, color: "#0052FF" }} />
                        COINBASE ONE
                    </div>

                    <h2 style={{
                        fontSize: "clamp(32px, 4vw, 56px)",
                        fontWeight: 700,
                        letterSpacing: -2,
                        lineHeight: 1.08,
                        marginBottom: 20
                    }}>
                        Zero trading fees,<br />more rewards.
                    </h2>

                    <p style={{
                        fontSize: 16,
                        color: "var(--gray-500)",
                        lineHeight: 1.7,
                        marginBottom: 32,
                        maxWidth: 420
                    }}>
                        Get more out of crypto with one membership: zero trading fees,
                        boosted rewards, priority support, and more.
                    </p>

                    <a href="#" style={{
                        display: "inline-block",
                        background: "#0a0b0d",
                        color: "white",
                        padding: "14px 28px",
                        borderRadius: 100,
                        fontSize: 15,
                        fontWeight: 600,
                        textDecoration: "none"
                    }}>
                        Claim free trial
                    </a>
                </div>
            </div>
        </section>
    );
}

export default CoinbaseOneSection;