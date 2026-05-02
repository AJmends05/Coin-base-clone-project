import React, { useState } from "react";
import promoCarousel from "../../assets/images/Promo_Carousel.png";
import whatIsStaking from "../../assets/images/What_is_Staking.png";

const SLIDES = [
    {
        img: promoCarousel,
        title: "Earn 3.50% AER on your cash savings",
        desc: "Savings Account with interest paid daily. Instant Access. FSCS protected. Powered by ClearBank.",
        btn: "Get started",
        disclaimer: "Account is powered by ClearBank; interest rates are variable; account terms and conditions and eligibility criteria apply. FSCS protection is subject to eligibility and the £120,000 coverage is the maximum aggregated across all eligible ClearBank accounts."
    },
    {
        img: whatIsStaking,
        title: "Earn up to 14% APY on your crypto",
        desc: "Put your crypto to work by staking with Coinbase and earn rewards of up to 14% APY on your holdings.",
        btn: "Explore staking options",
        disclaimer: "Available for certain assets. APYs are indicative and not guaranteed and may vary over time. Learn more."
    },
];

function PromoCarousel() {
    const [current, setCurrent] = useState(0);
    const [playing, setPlaying] = useState(false);

    const prev = () => setCurrent((c) => (c === 0 ? SLIDES.length - 1 : c - 1));
    const next = () => setCurrent((c) => (c === SLIDES.length - 1 ? 0 : c + 1));

    return (
        <section style={{ backgroundColor: "#0a0b0d", padding: "40px 0" }}>
         <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 40px" }}>

                {/* Card */}
                <div style={{
                    background: "#1a1a1a",
                        borderRadius: 24,
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "stretch",
                        minHeight: 320,
                        gap: 0,
                        margin: "0 40px"  /* ← adds gap between card and outer edges */
                        }}>
                    {/* Image left */}
                    <div style={{ flex: "0 0 45%", overflow: "hidden" }}>
                        <img
                            src={SLIDES[current].img}
                            alt={SLIDES[current].title}
                            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>

                    {/* Text right */}
                    <div style={{ flex: 1, padding: "48px 56px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <h2 style={{
                            fontSize: "clamp(28px, 3vw, 48px)",
                            fontWeight: 700,
                            color: "white",
                            letterSpacing: -1.5,
                            lineHeight: 1.1,
                            marginBottom: 20
                        }}>
                            {SLIDES[current].title}
                        </h2>
                        <p style={{ fontSize: 15, color: "#aaa", lineHeight: 1.6, marginBottom: 32, maxWidth: 420 }}>
                            {SLIDES[current].desc}
                        </p>
                        <a href="#" style={{
                            display: "inline-block",
                            background: "white",
                            color: "#0a0b0d",
                            padding: "14px 28px",
                            borderRadius: 100,
                            fontSize: 15,
                            fontWeight: 600,
                            textDecoration: "none",
                            alignSelf: "flex-start"
                        }}>
                            {SLIDES[current].btn}
                        </a>
                    </div>
                </div>

                {/* Disclaimer */}
                <p style={{ fontSize: 11, color: "#555", textAlign: "center", margin: "16px auto", maxWidth: 860, lineHeight: 1.6 }}>
                    {SLIDES[current].disclaimer}
                </p>

                {/* Controls */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
                    {/* Dots + play */}
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                            {SLIDES.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    style={{
                                        width: i === current ? 24 : 8,
                                        height: 8,
                                        borderRadius: 100,
                                        background: i === current ? "white" : "#444",
                                        border: "none",
                                        cursor: "pointer",
                                        padding: 0,
                                        transition: "all 0.3s"
                                    }}
                                />
                            ))}
                        </div>
                        <button
                            onClick={() => setPlaying(!playing)}
                            style={{
                                width: 32, height: 32, borderRadius: "50%",
                                background: "#222", border: "none", cursor: "pointer",
                                color: "white", display: "flex", alignItems: "center", justifyContent: "center"
                            }}
                        >
                            <i className={`bi ${playing ? "bi-pause-fill" : "bi-play-fill"}`} style={{ fontSize: 12 }} />
                        </button>
                    </div>

                    {/* Prev / Next arrows */}
                    <div style={{ display: "flex", gap: 8 }}>
                        <button onClick={prev} style={{
                            width: 40, height: 40, borderRadius: "50%",
                            background: "#222", border: "none", cursor: "pointer",
                            color: "white", display: "flex", alignItems: "center", justifyContent: "center"
                        }}>
                            <i className="bi bi-chevron-left" />
                        </button>
                        <button onClick={next} style={{
                            width: 40, height: 40, borderRadius: "50%",
                            background: "#222", border: "none", cursor: "pointer",
                            color: "white", display: "flex", alignItems: "center", justifyContent: "center"
                        }}>
                            <i className="bi bi-chevron-right" />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default PromoCarousel;