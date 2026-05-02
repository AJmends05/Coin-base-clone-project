import React from "react";
import learnBasics from "../../assets/images/learn_the_basics.png";
import exploreCrypto from "../../assets/images/explore_more_crypto.jpg";

function LearnSection() {
    return (
        <section style={{ backgroundColor: "white", padding: "80px 0" }}>
            <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 80px" }}>
                <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, letterSpacing: -1.5, marginBottom: 40 }}>
                    Crypto basics and news
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>

                    {/* Explore more crypto */}
                    <div style={{ border: "1px solid var(--gray-100)", borderRadius: 24, overflow: "hidden", cursor: "pointer" }}>
                        <div style={{ overflow: "hidden", height: 280 }}>
                            <img
                                src={exploreCrypto}
                                alt="Explore more crypto"
                                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                            />
                        </div>
                        <div style={{ padding: "24px 28px 32px" }}>
                            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>Explore more crypto</h3>
                            <p style={{ fontSize: 15, color: "var(--gray-500)", lineHeight: 1.6 }}>
                                Browse real-time prices, charts, and daily movers for thousands of cryptocurrencies, all in one place.
                            </p>
                        </div>
                    </div>

                    {/* Learn the basics */}
                    <div style={{ border: "1px solid var(--gray-100)", borderRadius: 24, overflow: "hidden", cursor: "pointer" }}>
                        <div style={{ overflow: "hidden", height: 280 }}>
                            <img
                                src={learnBasics}
                                alt="Learn the basics"
                                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                            />
                        </div>
                        <div style={{ padding: "24px 28px 32px" }}>
                            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>Learn the basics</h3>
                            <p style={{ fontSize: 15, color: "var(--gray-500)", lineHeight: 1.6 }}>
                                Explore beginner guides, practical tutorials, and market updates on Bitcoin, Ethereum and more.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default LearnSection;