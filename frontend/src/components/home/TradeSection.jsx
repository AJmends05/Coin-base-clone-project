import React from "react";
import advancedImage from "../../assets/images/Advanced.avif";

const FEATURES = [
    { title: "More order types", desc: "Market, Limit, Stop Limit, and Auction Mode orders." },
    { title: "Powerful trading tools", desc: "Charts powered by TradingView with EMA, MA, MACD, RSI, and Bollinger Bands." },
    { title: "One unified balance", desc: "Seamlessly switch between Simple and Advanced Trade." },
];

function TradeSection() {
    return (
        <section>
            <div className="cb-trade-section">

                <div className="cb-trade-content">
                    <h2>Get lower, volume-based pricing with Advanced Trade</h2>
                    <ul style={{ listStyle: "none", padding: 0, marginBottom: 32 }}>
                        {FEATURES.map((item) => (
                            <li key={item.title} style={{ display: "flex", gap: 14, marginBottom: 24, alignItems: "flex-start" }}>
                                <div style={{
                                    width: 24, height: 24, borderRadius: "50%",
                                    background: "#1a1a1a", border: "1px solid #333",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    flexShrink: 0, marginTop: 2
                                }}>
                                    <i className="bi bi-check" style={{ color: "white", fontSize: 14 }} />
                                </div>
                                <div>
                                    <div style={{ fontWeight: 600, color: "var(--text)", marginBottom: 4 }}>{item.title}</div>
                                    <div style={{ fontSize: 14, color: "var(--gray-500)", lineHeight: 1.6 }}>{item.desc}
                                </div>  
                                 </div>
                            </li>
                        ))}
                    </ul>
                    <a href="#" className="cb-btn-dark">Learn more</a>
                </div>
                <div className="cb-trade-visual">
                    <img
                        src={advancedImage}
                        alt="Advanced Trade"
                        style={{ width: "100%", maxWidth: 560, borderRadius: 24, objectFit: "cover" }}
                    />
                </div>
            </div>
        </section>
    );
}

export default TradeSection;