import React from "react";
import { FOOTER_LINKS } from "../../data/constants";
import { Logo } from "../common";

function Footer() {
    return (
        <footer style={{ backgroundColor: "white", borderTop: "1px solid var(--gray-100)", padding: "60px 0 40px" }}>
            <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 80px" }}>

                {/* Top row — logo + 4 columns */}
                <div style={{ display: "grid", gridTemplateColumns: "240px 1fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }}>
                    <div>
                        <Logo size={32} />
                    </div>
                    {["Company", "Learn", "Individuals", "Businesses"].map((col) => (
                        <div key={col}>
                            <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 20 }}>{col}</h4>
                            <ul style={{ listStyle: "none", padding: 0 }}>
                                {FOOTER_LINKS[col].map((item) => (
                                    <li key={item} style={{ marginBottom: 12 }}>
                                        <a href="#" style={{ color: "var(--gray-500)", fontSize: 13, textDecoration: "none" }}>{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom row — empty + 4 columns */}
                <div style={{ display: "grid", gridTemplateColumns: "240px 1fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }}>
                    <div />
                    {["Institutions", "Developers", "Support", "Prices"].map((col) => (
                        <div key={col}>
                            <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 20 }}>{col}</h4>
                            <ul style={{ listStyle: "none", padding: 0 }}>
                                {FOOTER_LINKS[col].map((item) => (
                                    <li key={item} style={{ marginBottom: 12 }}>
                                        <a href="#" style={{ color: "var(--gray-500)", fontSize: 13, textDecoration: "none" }}>{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Social icons row */}
                <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
                    <a href="#" style={{ color: "var(--text)", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>blog</a>
                    <a href="#" style={{ color: "var(--text)", fontSize: 18 }}><i className="bi bi-twitter-x" /></a>
                </div>

                {/* Bottom bar */}
                <div style={{ borderTop: "1px solid var(--gray-100)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", gap: 24, alignItems: "center", fontSize: 13, color: "var(--gray-500)" }}>
                        <span>© 2026 Coinbase</span>
                        <a href="#" style={{ color: "var(--gray-500)", textDecoration: "none" }}>Privacy</a>
                        <a href="#" style={{ color: "var(--gray-500)", textDecoration: "none" }}>Terms & Conditions</a>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--gray-500)" }}>
                        <i className="bi bi-globe2" />
                        <span>United Kingdom</span>
                        <span>•</span>
                        <span>English</span>
                    </div>
                </div>
                    <p className="text-xs text-gray-400 mt-4 text-center">
  Educational demo only. Do not use real personal information.
</p>
            </div>
            
        </footer>
    );
}

export default Footer;