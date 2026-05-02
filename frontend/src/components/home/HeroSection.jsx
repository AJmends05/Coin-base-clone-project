import React, { useState } from "react";
import PhoneMockup from "./PhoneMockup";

function HeroSection() {
    const [activeTab, setActiveTab] = useState("1D");
    const [email, setEmail] = useState("");

    return (
        <section>
            <div className="cb-hero">
                <div className="cb-hero-visual">
                    <div className="cb-phone-bg">
                        <PhoneMockup activeTab={activeTab} onTabClick={setActiveTab} />
                        <p className="cb-hero-disclaimer">Stocks and prediction markets not available in your jurisdiction.</p>
                    </div>
                </div>
                <div>
                    <h1 className="cb-hero-title">
                        Hello, UK! Meet  Coinbase <span style={{ fontVariant: "small-caps" }}>gb</span>
                    </h1>
                    <p className="cb-hero-subtitle">
                        Coinbase is the most trusted platform in the UK for buying, selling and trading crypto.<br />
                        Deposit GBP into your account for free to get started today.
                    </p>
                    <a href="#" className="cb-hero-form-btn" style={{ display: "inline-block", textDecoration: "none" }}>
                        Sign up
                    </a>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;