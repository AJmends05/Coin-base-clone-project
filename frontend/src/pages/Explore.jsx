import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../components/layout/Nav";
import { fmtPrice } from "../components/home/AssetTable";

// ── Image imports (already in your assets/images folder) ──────────────────
import btcIcon      from "../assets/images/bitcoin.png";
import ethIcon      from "../assets/images/Ethereum.png";
import tetherIcon   from "../assets/images/Tether.png";
import xrpIcon      from "../assets/images/XRP.png";
import bnbIcon      from "../assets/images/BNB.png";
import usdcIcon     from "../assets/images/USDC.png";
import solanaIcon   from "../assets/images/solana.png";
import tronIcon     from "../assets/images/tron.png";
import dogeIcon     from "../assets/images/dogecoin.png";
import hypeIcon     from "../assets/images/hype.png";
import timeIcon     from "../assets/images/time.png";
import gfiIcon      from "../assets/images/GFI.png";
import virtualIcon  from "../assets/images/VIRTUAL.png";
import edgexIcon    from "../assets/images/EDGEX.png";
import orcaIcon     from "../assets/images/ORCA.png";
import pondIcon     from "../assets/images/POND.png";
import trbIcon      from "../assets/images/TRB.png";
import rlsIcon      from "../assets/images/RLS.png";
import aiIcon       from "../assets/images/AI.png";
import chartsSvg    from "../assets/images/accessToAdvancedCharts-5.svg";

// ── Mock Data ──────────────────────────────────────────────────────────────
const MARKET_STATS = [
    { label: "Total market cap",  value: "$1.84T",   chg: "+1.75%", up: true,  color: "#16a34a" },
    { label: "Trade volume",      value: "$163.41B", chg: "-17.00%",up: false, color: "#dc2626" },
    { label: "Buy-sell ratio",    value: "$0.76",    chg: "-0.52%", up: false, color: "#dc2626" },
    { label: "BTC dominance",     value: "62.10%",   chg: "+0.14%", up: true,  color: "#16a34a" },
];

const ALL_ASSETS = [
    { name: "Bitcoin",      ticker: "BTC",  price: 56733.85, chg: -20.36, mktCap: "$1.1T",   vol: "$21.0B",  img: btcIcon,    color: "#f7931a" },
    { name: "Ethereum",     ticker: "ETH",  price: 1679.25,  chg: +24.01, mktCap: "$203.2B", vol: "$8.2B",   img: ethIcon,    color: "#627eea" },
    { name: "Tether",       ticker: "USDT", price: 0.7346,   chg: -0.08,  mktCap: "$139.2B", vol: "$80.9B",  img: tetherIcon, color: "#26a17b" },
    { name: "XRP",          ticker: "XRP",  price: 1.01,     chg: -37.71, mktCap: "$62.4B",  vol: "$1.2B",   img: xrpIcon,    color: "#346aa9" },
    { name: "BNB",          ticker: "BNB",  price: 455.32,   chg: +3.12,  mktCap: "$61.4B",  vol: "$913.4M", img: bnbIcon,    color: "#f3ba2f" },
    { name: "USDC",         ticker: "USDC", price: 0.7348,   chg:  0.00,  mktCap: "$56.7B",  vol: "$42.8B",  img: usdcIcon,   color: "#2775ca" },
    { name: "Solana",       ticker: "SOL",  price: 61.83,    chg: -43.20, mktCap: "$35.6B",  vol: "$2.4B",   img: solanaIcon, color: "#9945ff" },
    { name: "TRON",         ticker: "TRX",  price: 0.2396,   chg: +34.02, mktCap: "$22.7B",  vol: "$523.8M", img: tronIcon,   color: "#ef0027" },
    { name: "Dogecoin",     ticker: "DOGE", price: 0.0804,   chg: -39.80, mktCap: "$13.6B",  vol: "$1.6B",   img: dogeIcon,   color: "#c2a633" },
    { name: "Hyperliquid",  ticker: "HYPE", price: 29.67,    chg: +94.55, mktCap: "$7.6B",   vol: "$154.9M", img: hypeIcon,   color: "#00c896" },
];

const TOP_MOVERS = [
    { name: "TIME",   ticker: "TIME", chg: +167.73, price: "$4.96",    img: timeIcon  },
    { name: "GFI",    ticker: "GFI",  chg: +69.09,  price: "$0.1555",  img: gfiIcon   },
    { name: "ORCA",   ticker: "ORCA", chg: +48.22,  price: "$2.84",    img: orcaIcon  },
    { name: "POND",   ticker: "POND", chg: +41.11,  price: "$0.0732",  img: pondIcon  },
];

const NEW_ON_COINBASE = [
    { name: "Hyperliquid", ticker: "HYPE",    added: "Added Feb 5",  img: hypeIcon   },
    { name: "Virtuals...", ticker: "VIRTUAL", added: "Added Apr 29", img: virtualIcon},
    { name: "edgeX",       ticker: "EDGEX",   added: "Added Mar 31", img: edgexIcon  },
    { name: "TRB",         ticker: "TRB",     added: "Added Mar 10", img: trbIcon    },
    { name: "RLS",         ticker: "RLS",     added: "Added Feb 28", img: rlsIcon    },
    { name: "AI",          ticker: "AI",      added: "Added Feb 12", img: aiIcon     },
];

// ── Sparkline SVG ──────────────────────────────────────────────────────────
function Sparkline({ up }) {
    const color = up ? "#16a34a" : "#dc2626";
    const fill  = up ? "#dcfce7" : "#fee2e2";
    const paths = {
        true:  "M0,30 C10,28 20,15 30,18 C40,21 50,10 60,12 C70,14 80,8  90,5",
        false: "M0,5  C10,8  20,15 30,12 C40,9  50,20 60,22 C70,24 80,28 90,32",
    };
    return (
        <svg width="90" height="36" viewBox="0 0 90 36" fill="none">
            <path d={paths[up]} stroke={color} strokeWidth="2" fill="none" />
        </svg>
    );
}

// ── Horizontal scroll carousel ─────────────────────────────────────────────
function Carousel({ title, items, renderItem }) {
    const ref = useRef(null);
    const scroll = (dir) => ref.current?.scrollBy({ left: dir * 220, behavior: "smooth" });
    return (
        <div style={{ marginBottom: 32 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <h2 style={{ fontSize: 20, fontWeight: 700 }}>{title}</h2>
                <div style={{ display: "flex", gap: 8 }}>
                    {["←","→"].map((arrow, i) => (
                        <button key={arrow} onClick={() => scroll(i === 0 ? -1 : 1)} style={{
                            width: 36, height: 36, borderRadius: "50%",
                            border: "1px solid #e5e7eb", background: "white",
                            cursor: "pointer", fontSize: 16, display: "flex",
                            alignItems: "center", justifyContent: "center"
                        }}>{arrow}</button>
                    ))}
                </div>
            </div>
            <div ref={ref} style={{
                display: "flex", gap: 12, overflowX: "auto",
                scrollbarWidth: "none", paddingBottom: 4
            }}>
                {items.map((item, i) => renderItem(item, i))}
            </div>
        </div>
    );
}

// ── Main Explore page ──────────────────────────────────────────────────────
function Explore() {
    const [search, setSearch]     = useState("");
    const [activeFilter, setFilter] = useState("All assets");
    const navigate = useNavigate();

    const filtered = ALL_ASSETS.filter(a =>
        a.name.toLowerCase().includes(search.toLowerCase()) ||
        a.ticker.toLowerCase().includes(search.toLowerCase())
    );

    const displayed = (() => {
        if (activeFilter === "Top gainers") return [...filtered].sort((a, b) => b.chg - a.chg);
        if (activeFilter === "New on Coinbase") return filtered.filter(a =>
            ["HYPE","TRX","DOGE"].includes(a.ticker)
        );
        return filtered;
    })();

    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#fff", fontFamily: "Arial, sans-serif" }}>
            <Nav />

            {/* Risk banner */}
            <div style={{
                background: "#f8f9fa", borderBottom: "1px solid #e5e7eb",
                padding: "10px 24px", textAlign: "center", fontSize: 13, color: "#374151"
            }}>
                Don't invest unless you're prepared to lose all the money you invest. This is a high-risk
                investment and you should not expect to be protected if something goes wrong.{" "}
                <a href="#" style={{ color: "#1652f0", textDecoration: "underline" }}>
                    Take 2 mins to learn more
                </a>
            </div>

            {/* Two-column layout */}
            <div style={{ display: "flex", maxWidth: 1440, margin: "0 auto", padding: "32px 40px", gap: 32 }}>

                {/* LEFT main content */}
                <div style={{ flex: 1, minWidth: 0 }}>

                    {/* Header */}
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 24, flexWrap: "wrap", gap: 16 }}>
                        <div>
                            <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 6 }}>Explore crypto</h1>
                            <p style={{ fontSize: 14, color: "#6b7280" }}>
                                Coinbase 50 Index is up{" "}
                                <span style={{ color: "#16a34a", fontWeight: 600 }}>↗ 1.55% (24hrs)</span>
                                {" "}<i className="bi bi-info-circle" style={{ fontSize: 12, color: "#9ca3af" }} />
                            </p>
                        </div>
                        {/* Search */}
                        <div style={{ position: "relative", width: 340 }}>
                            <i className="bi bi-search" style={{
                                position: "absolute", left: 14, top: "50%",
                                transform: "translateY(-50%)", color: "#9ca3af", fontSize: 15
                            }} />
                            <input
                                type="text"
                                placeholder="Search for an asset"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                style={{
                                    width: "100%", padding: "12px 16px 12px 40px",
                                    borderRadius: 100, border: "1px solid #e5e7eb",
                                    backgroundColor: "#f3f4f6", fontSize: 15,
                                    outline: "none", boxSizing: "border-box"
                                }}
                            />
                        </div>
                    </div>

                    <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", marginBottom: 32 }} />

                    {/* Market Stats */}
                    <div style={{ marginBottom: 40 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                            <h2 style={{ fontSize: 20, fontWeight: 700 }}>Market stats</h2>
                            <div style={{ display: "flex", gap: 8 }}>
                                {["←","→"].map((a) => (
                                    <button key={a} style={{
                                        width: 36, height: 36, borderRadius: "50%",
                                        border: "1px solid #e5e7eb", background: "white",
                                        cursor: "pointer", fontSize: 16
                                    }}>{a}</button>
                                ))}
                            </div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
                            {MARKET_STATS.map(stat => (
                                <div key={stat.label} style={{
                                    background: "#f8f9fa", borderRadius: 12,
                                    padding: "16px 18px", minHeight: 100
                                }}>
                                    <div style={{ fontSize: 13, color: "#6b7280", marginBottom: 6 }}>{stat.label}</div>
                                    <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{stat.value}</div>
                                    <div style={{ fontSize: 13, fontWeight: 600, color: stat.color }}>{stat.chg}</div>
                                    <div style={{ marginTop: 8 }}>
                                        <Sparkline up={stat.up} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Crypto market prices table */}
                    <div>
                        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>Crypto market prices</h2>

                        {/* Filter row */}
                        <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
                            {["All assets", "Top gainers", "New on Coinbase"].map(f => (
                                <button key={f} onClick={() => setFilter(f)} style={{
                                    padding: "8px 16px", borderRadius: 100, fontSize: 14, fontWeight: 500,
                                    border: "1px solid #e5e7eb", cursor: "pointer",
                                    background: activeFilter === f ? "#111" : "white",
                                    color: activeFilter === f ? "white" : "#374151",
                                    display: "flex", alignItems: "center", gap: 6
                                }}>
                                    {f === "All assets" && <i className="bi bi-globe2" style={{ fontSize: 12 }} />}
                                    {f}
                                    <i className="bi bi-chevron-down" style={{ fontSize: 11 }} />
                                </button>
                            ))}
                        </div>

                        {/* Table header */}
                        <div style={{
                            display: "grid", gridTemplateColumns: "2fr 1.2fr 1fr 1fr 1fr 1fr 0.8fr",
                            padding: "10px 12px", borderBottom: "1px solid #e5e7eb",
                            fontSize: 13, color: "#6b7280", fontWeight: 500
                        }}>
                            <span>Asset <i className="bi bi-arrow-down-up" style={{ fontSize: 11 }} /></span>
                            <span>Market price <i className="bi bi-arrow-down-up" style={{ fontSize: 11 }} /></span>
                            <span>Chart</span>
                            <span>Change <i className="bi bi-arrow-down-up" style={{ fontSize: 11 }} /></span>
                            <span style={{ color: "#1652f0", fontWeight: 700 }}>Mkt cap <i className="bi bi-arrow-down-up" style={{ fontSize: 11 }} /></span>
                            <span>Volume <i className="bi bi-arrow-down-up" style={{ fontSize: 11 }} /></span>
                            <span>Actions</span>
                        </div>

                        {/* Table rows */}
                        {displayed.map((asset, i) => (
                            <div key={asset.ticker} style={{
                                display: "grid",
                                gridTemplateColumns: "2fr 1.2fr 1fr 1fr 1fr 1fr 0.8fr",
                                padding: "16px 12px", borderBottom: "1px solid #f3f4f6",
                                alignItems: "center", fontSize: 14,
                                transition: "background 0.15s",
                                cursor: "pointer"
                            }}
                            onMouseEnter={e => e.currentTarget.style.background = "#f9fafb"}
                            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                            >
                                {/* Asset */}
                                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                    <i className="bi bi-star" style={{ color: "#d1d5db", fontSize: 15 }} />
                                    <img src={asset.img} alt={asset.name}
                                        style={{ width: 32, height: 32, borderRadius: "50%", objectFit: "cover" }} />
                                    <div>
                                        <div style={{ fontWeight: 600 }}>{asset.name}</div>
                                        <div style={{ fontSize: 12, color: "#9ca3af" }}>{asset.ticker}</div>
                                    </div>
                                </div>

                                {/* Price */}
                                <span style={{ fontWeight: 500 }}>{fmtPrice(asset.price)}</span>

                                {/* Sparkline */}
                                <Sparkline up={asset.chg >= 0} />

                                {/* Change */}
                                <span style={{ color: asset.chg === 0 ? "#9ca3af" : asset.chg > 0 ? "#16a34a" : "#dc2626", fontWeight: 500 }}>
                                    {asset.chg === 0 ? "0.00%" : (
                                        <>{asset.chg > 0 ? "↗" : "↙"} {Math.abs(asset.chg).toFixed(2)}%</>
                                    )}
                                </span>

                                {/* Mkt Cap */}
                                <span>{asset.mktCap}</span>

                                {/* Volume */}
                                <span>{asset.vol}</span>

                                {/* Trade button */}
                                <button
                                    onClick={() => navigate("/signin")}
                                    style={{
                                        padding: "8px 18px", borderRadius: 100,
                                        background: "#1652f0", color: "white",
                                        border: "none", fontWeight: 600,
                                        fontSize: 14, cursor: "pointer"
                                    }}
                                >
                                    Trade
                                </button>
                            </div>
                        ))}

                        {displayed.length === 0 && (
                            <div style={{ textAlign: "center", padding: "40px 0", color: "#9ca3af" }}>
                                No assets found for "{search}"
                            </div>
                        )}
                    </div>

                    {/* Create account CTA banner */}
                    <div style={{
                        background: "#0052ff", borderRadius: 16, padding: "40px 48px",
                        marginTop: 48, display: "flex", alignItems: "center",
                        justifyContent: "space-between", gap: 24
                    }}>
                        <div>
                            <h2 style={{ fontSize: 28, fontWeight: 700, color: "white", marginBottom: 24, lineHeight: 1.3 }}>
                                Create a Coinbase account to<br />trade crypto.
                            </h2>
                            <button
                                onClick={() => navigate("/signup")}
                                style={{
                                    display: "inline-flex", alignItems: "center", gap: 10,
                                    padding: "14px 28px", borderRadius: 100,
                                    background: "white", color: "#111",
                                    border: "none", fontWeight: 700, fontSize: 16, cursor: "pointer"
                                }}
                            >
                                Start Trading →
                            </button>
                        </div>
                        <img src={chartsSvg} alt="Charts" style={{ width: 200, flexShrink: 0 }} />
                    </div>
                </div>

                {/* RIGHT sidebar */}
                <div style={{ width: 320, flexShrink: 0 }}>

                    {/* Get started card */}
                    <div style={{
                        background: "#0052ff", borderRadius: 16, padding: "24px",
                        marginBottom: 32, position: "relative", overflow: "hidden"
                    }}>
                        <div style={{ position: "relative", zIndex: 1 }}>
                            <div style={{ fontSize: 18, fontWeight: 700, color: "white", marginBottom: 4 }}>Get started</div>
                            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.85)", marginBottom: 20 }}>
                                Create your account today
                            </div>
                            <button
                                onClick={() => navigate("/signup")}
                                style={{
                                    padding: "10px 24px", borderRadius: 100,
                                    background: "white", color: "#111",
                                    border: "none", fontWeight: 700, fontSize: 15, cursor: "pointer"
                                }}
                            >
                                Sign up
                            </button>
                        </div>
                        {/* Decorative coin graphic */}
                        <div style={{
                            position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)",
                            width: 90, height: 90, borderRadius: "50%",
                            background: "#f7c948", display: "flex", alignItems: "center",
                            justifyContent: "center", fontSize: 40, boxShadow: "0 4px 20px rgba(0,0,0,0.3)"
                        }}>
                            ✦
                        </div>
                    </div>

                    {/* Top Movers */}
                    <Carousel
                        title="Top movers"
                        items={TOP_MOVERS}
                        renderItem={(item) => (
                            <div key={item.ticker} style={{
                                minWidth: 140, background: "#f8f9fa", borderRadius: 12,
                                padding: "16px", flexShrink: 0
                            }}>
                                <img src={item.img} alt={item.name}
                                    style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover", marginBottom: 12 }} />
                                <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 2 }}>{item.ticker}</div>
                                <div style={{ fontSize: 18, fontWeight: 700, color: "#16a34a", marginBottom: 2 }}>
                                    ↗ {item.chg.toFixed(2)}%
                                </div>
                                <div style={{ fontSize: 13, color: "#374151" }}>{item.price}</div>
                            </div>
                        )}
                    />

                    {/* New on Coinbase */}
                    <Carousel
                        title="New on Coinbase"
                        items={NEW_ON_COINBASE}
                        renderItem={(item) => (
                            <div key={item.ticker} style={{
                                minWidth: 140, background: "#f8f9fa", borderRadius: 12,
                                padding: "16px", flexShrink: 0
                            }}>
                                <div style={{
                                    width: 44, height: 44, borderRadius: 12,
                                    background: "#e5e7eb", display: "flex",
                                    alignItems: "center", justifyContent: "center", marginBottom: 12
                                }}>
                                    <img src={item.img} alt={item.name}
                                        style={{ width: 32, height: 32, borderRadius: "50%", objectFit: "cover" }} />
                                </div>
                                <div style={{ fontSize: 11, color: "#9ca3af", textTransform: "uppercase", marginBottom: 4 }}>
                                    {item.ticker}
                                </div>
                                <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{item.name}</div>
                                <div style={{ fontSize: 12, color: "#6b7280" }}>{item.added}</div>
                            </div>
                        )}
                    />
                </div>
            </div>

            {/* Footer */}
            <footer style={{ background: "#f3f4f6", padding: "48px 40px 24px", marginTop: 40 }}>
                <div style={{ maxWidth: 1440, margin: "0 auto" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, marginBottom: 48 }}>
                        {[
                            { title: "Company",     links: ["About","Careers","Blog","Press","Security","Legal & privacy","Cookie policy"] },
                            { title: "Individuals", links: ["Buy & sell","Base App","Coinbase One","Debit Card","Credit Card","Earn"] },
                            { title: "Developers",  links: ["Developer Platform","Base","Server Wallets","Embedded Wallets","Trade API","Data API"] },
                            { title: "Support",     links: ["Help center","Contact us","Create account","ID verification","Payment methods","Status"] },
                        ].map(col => (
                            <div key={col.title}>
                                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 16 }}>{col.title}</div>
                                {col.links.map(link => (
                                    <div key={link} style={{ marginBottom: 10 }}>
                                        <a href="#" style={{ fontSize: 14, color: "#6b7280", textDecoration: "none" }}
                                           onMouseEnter={e => e.target.style.color = "#111"}
                                           onMouseLeave={e => e.target.style.color = "#6b7280"}>
                                            {link}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", marginBottom: 20 }} />
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 13, color: "#9ca3af" }}>
                        <span>© 2026 Coinbase • <a href="#" style={{ color: "#9ca3af" }}>Privacy</a> • <a href="#" style={{ color: "#9ca3af" }}>Terms & Conditions</a></span>
                        <span>🌐 Ghana • English</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Explore;
