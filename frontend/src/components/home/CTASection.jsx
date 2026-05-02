import React from "react";
import worldwideIcon from "../../assets/images/worldwide-3.svg";
import safeIcon from "../../assets/images/safe-3.svg";
import supportIcon from "../../assets/images/support-5.svg";

const TRUST_ITEMS = [
    {
        icon: worldwideIcon,
        title: "The largest public crypto company",
        desc: "In April 2021, Coinbase became the largest publicly traded crypto company in the world. That means we operate with more financial transparency, and make our financial statements available each quarter."
    },
    {
        icon: safeIcon,
        title: "Your crypto is your crypto",
        desc: "It's that simple. Coinbase doesn't use, or lend, your assets without your permission. We run a multifaceted risk management program designed to protect our customers' assets."
    },
    {
        icon: supportIcon,
        title: "The help you need, when you need it",
        desc: "You can always contact our support team by messaging to speak with our virtual assistant, or depending on the hours, with a real live support agent. You can also check out our Help Center for quick solutions to common problems."
    },
];

function CTASection() {
    return (
        <section style={{ backgroundColor: "#f1f2f3", padding: "80px 0" }}>
            <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 80px" }}>
                <h2 style={{
                    fontSize: "clamp(36px, 5vw, 72px)",
                    fontWeight: 700,
                    letterSpacing: -2,
                    textAlign: "center",
                    marginBottom: 16,
                    lineHeight: 1.08
                }}>
                    The most trusted<br />cryptocurrency exchange
                </h2>
                <p style={{
                    textAlign: "center",
                    fontSize: 16,
                    color: "var(--gray-500)",
                    marginBottom: 48
                }}>
                    Millions of users trust us, and so can you. The proof is in our platform
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
                    {TRUST_ITEMS.map((item) => (
                        <div key={item.title} style={{
                            background: "white",
                            borderRadius: 20,
                            padding: "32px 28px",
                            display: "flex",
                            flexDirection: "column",
                            gap: 0
                        }}>
                            <img
                                src={item.icon}
                                alt={item.title}
                                style={{ width: 56, height: 56, marginBottom: 48, objectFit: "contain" }}
                            />
                            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, lineHeight: 1.3 }}>
                                {item.title}
                            </h3>
                            <p style={{ fontSize: 15, color: "var(--gray-500)", lineHeight: 1.7, marginBottom: 32, flex: 1 }}>
                                {item.desc}
                            </p>
                            <a href="#" className="cb-btn-dark" style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 8,
                                alignSelf: "flex-start"
                            }}>
                                Learn more <span>→</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CTASection;