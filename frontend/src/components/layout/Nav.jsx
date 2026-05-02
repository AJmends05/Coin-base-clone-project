import navigationUpsell from "../../assets/images/navigation-upsell.png";
import onchainPayment from "../../assets/images/onchain_payment_protocol (1).png";
import institutionsUpsell from "../../assets/images/institutions_upsell.png";
import developersUpsell from "../../assets/images/developers_upsell_cdxv2_2.jpg";
import companyUpsell from "../../assets/images/company_upsell.png";
import { useState, useEffect, useRef, useCallback } from "react";
import { Logo } from "../common";
import { SearchIcon, GlobeIcon } from "../home/Icons";
import SearchOverlay from "../home/SearchOverlay";
import { Link, useNavigate } from "react-router-dom";

const NAV_MENUS = {
    Cryptocurrencies: {
        promo: { title: "Explore crypto", desc: "Markets, prices, and insights all in one place.", link: "Go to markets", cardBg: "#0052FF", cardContent: "bi-graph-up" },
        cols: [
            { items: [{ icon: "bi-currency-bitcoin", title: "Prices", desc: "Real-time crypto prices" }, { icon: "bi-graph-up", title: "Market stats", desc: "Market cap, volume and more" }, { icon: "bi-fire", title: "Top movers", desc: "Biggest 24hr gainers & losers" }] },
            { items: [{ icon: "bi-star", title: "Watchlist", desc: "Track assets you care about" }, { icon: "bi-plus-circle", title: "New on Coinbase", desc: "Recently listed assets" }, { icon: "bi-search", title: "Asset search", desc: "Search all tradable assets" }] },
        ],
    },
    Individuals: {
        promo: { title: "System Update 2025", desc: "The next chapter of Coinbase.", link: "Learn more", cardBg: "#0052FF", cardContent: "image-individuals" },
        cols: [
            { items: [{ icon: "bi-arrow-left-right", title: "Buy and sell", desc: "Buy, sell, and use crypto" }, { icon: "bi-app", title: "Base App", desc: "Post, earn, trade, and chat" }, { icon: "bi-shield-check", title: "Coinbase One", desc: "Get zero trading fees and more" }, { icon: "bi-gem", title: "Private Client", desc: "For trusts, family offices, UHNWIs" }, { icon: "bi-link-45deg", title: "Onchain", desc: "Dive into the world of onchain apps" }, { icon: "bi-journal", title: "Learn", desc: "Crypto tips and guides" }] },
            { items: [{ icon: "bi-graph-up", title: "Advanced", desc: "Professional-grade trading tools" }, { icon: "bi-percent", title: "Earn", desc: "Stake your crypto and earn rewards" }, { icon: "bi-briefcase", title: "Coinbase Wealth", desc: "Institutional-grade services" }, { icon: "bi-credit-card", title: "Credit Card", desc: "Earn up to 4% bitcoin back" }, { icon: "bi-credit-card-2-back", title: "Debit Card", desc: "Spend crypto, get crypto back" }] },
        ],
    },
    Businesses: {
        promo: { title: "Commerce Payments Protocol", desc: "A new standard for onchain payments.", link: "Go to Payments", cardBg: "#0052FF", cardContent: "image-businesses" },
        cols: [
            { items: [{ icon: "bi-buildings", title: "Business", desc: "Crypto trading and payments" }, { icon: "bi-cart", title: "Commerce", desc: "Start accepting crypto payments" }] },
            { items: [{ icon: "bi-credit-card", title: "Payments", desc: "The stablecoin payments stack" }, { icon: "bi-card-list", title: "Asset Listings", desc: "List your asset on Coinbase" }] },
        ],
    },
    Institutions: {
        promo: { title: "Our clients", desc: "Trusted by institutions and government.", link: "Learn more", cardBg: "#0052FF", cardContent: "image-institutions" },
        cols: [
            { sectionTitle: "Prime →", items: [{ icon: "bi-clock", title: "Trading and Financing", desc: "Professional prime brokerage" }, { icon: "bi-shield-lock", title: "Custody", desc: "Securely store digital assets" }, { icon: "bi-percent", title: "Staking", desc: "Explore staking across products" }, { icon: "bi-wallet2", title: "Onchain Wallet", desc: "Institutional-grade wallet" }] },
            { sectionTitle: "Markets", items: [{ icon: "bi-arrow-left-right", title: "Exchange", desc: "Spot markets for high-frequency trading" }, { icon: "bi-globe2", title: "International Exchange", desc: "Access perpetual futures markets" }, { icon: "bi-box-seam", title: "Derivatives Exchange", desc: "Trade an accessible futures market" }, { icon: "bi-gear", title: "Verified Pools", desc: "Transparent, verified liquidity pools" }] },
        ],
    },
    Developers: {
        promo: { title: "World class crypto infrastructure.", desc: "Discover Coinbase's complete platform.", link: "Learn more", cardBg: "#f0f0f0", cardContent: "image-developers" },
        cols: [
            { sectionTitle: "Coinbase Developer Platform →", items: [{ icon: "bi-cash-coin", title: "Payments", desc: "Fast and global stablecoin payments" }, { icon: "bi-arrow-left-right", title: "Trading", desc: "Launch crypto trading and custody" }, { icon: "bi-wallet2", title: "Wallets", desc: "Deploy customizable wallets" }, { icon: "bi-coin", title: "Stablecoins", desc: "Access USDC and Custom Stablecoins" }] },
            { sectionTitle: "Solutions for any company", items: [{ icon: "bi-bank", title: "Banks & Brokerages", desc: "Secure, regulated offerings" }, { icon: "bi-credit-card", title: "Payment Firms", desc: "Near-instant, low-cost payment rails" }, { icon: "bi-rocket-takeoff", title: "Startups", desc: "Launch with the world's leader in crypto" }] },
        ],
    },
    Company: {
        promo: { title: "Learn all about Coinbase:", desc: "We're building the open financial system.", link: "Create your account", cardBg: "#0052FF", cardContent: "image-company" },
        cols: [
            { items: [{ icon: "bi-info-circle", title: "About", desc: "Powering the crypto economy" }, { icon: "bi-people", title: "Affiliates", desc: "Help introduce the world to crypto" }, { icon: "bi-journal-text", title: "Blog", desc: "Read the latest from Coinbase" }] },
            { items: [{ icon: "bi-briefcase", title: "Careers", desc: "Work with us" }, { icon: "bi-chat-dots", title: "Support", desc: "Find answers to your questions" }, { icon: "bi-shield-lock", title: "Security", desc: "The most trusted & secure" }] },
        ],
    },
};

function PromoCardContent({ cardContent, cardBg }) {
    if (cardContent === "image-individuals") {
        return <img src={navigationUpsell} alt="Individuals promo" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 12 }} />;
    }
    if (cardContent === "image-businesses") {
        return <img src={onchainPayment} alt="Businesses promo" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 12 }} />;
    }
    if (cardContent === "image-institutions") {
        return <img src={institutionsUpsell} alt="Institutions promo" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 12 }} />;
    }
    if (cardContent === "image-developers") {
        return <img src={developersUpsell} alt="Developers promo" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 12 }} />;
    }
    if (cardContent === "image-company") {
        return <img src={companyUpsell} alt="Company promo" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 12 }} />;
    }
    return (
        <i className={`bi ${cardContent}`} style={{ fontSize: 48, lineHeight: 1, color: cardBg === "#f0f0f0" ? "#111" : "white" }} />
    );
}

function CB2MegaMenu({ data, onClose, menuName }) {
    const navigate = useNavigate();

    const handlePromoLinkClick = () => {
        onClose();
        // "Cryptocurrencies" promo link goes to explore
        if (menuName === "Cryptocurrencies") {
            navigate("/explore");
        }
    };

    return (
        
        <div className="cb2-mega" onMouseLeave={onClose}>
            <div className="bg-yellow-300 text-black text-center text-sm py-2 font-medium">
                 Student Demo Project — Not affiliated with Coinbase.
            </div>
            <div className="cb2-mega-col">
                {data.cols[0]?.sectionTitle && (
                    <a href="#" className="cb2-mega-section-link">
                        {data.cols[0].sectionTitle} <i className="bi bi-chevron-right" />
                    </a>
                )}
                {data.cols[0]?.items.map((item) => (
                    <a key={item.title} href="#" className="cb2-mega-item">
                        <div className="cb2-mega-icon"><i className={`bi ${item.icon}`} /></div>
                        <div className="cb2-mega-text">
                            <div className="cb2-mega-title">{item.title}</div>
                            <div className="cb2-mega-desc">{item.desc}</div>
                        </div>
                    </a>
                ))}
            </div>

            <div className="cb2-mega-col">
                {data.cols[1]?.sectionTitle && (
                    <div className="cb2-mega-section-title">{data.cols[1].sectionTitle}</div>
                )}
                {data.cols[1]?.items.map((item) => (
                    <a key={item.title} href="#" className="cb2-mega-item">
                        <div className="cb2-mega-icon"><i className={`bi ${item.icon}`} /></div>
                        <div className="cb2-mega-text">
                            <div className="cb2-mega-title">{item.title}</div>
                            <div className="cb2-mega-desc">{item.desc}</div>
                        </div>
                    </a>
                ))}
            </div>

            <div className="cb2-mega-col cb2-mega-promo">
                <div className="cb2-mega-promo-inner">
                    <div className="cb2-mega-promo-card" style={{ background: data.promo.cardBg }}>
                        <PromoCardContent cardContent={data.promo.cardContent} cardBg={data.promo.cardBg} />
                    </div>
                    <div className="cb2-mega-promo-content">
                        <div className="cb2-mega-promo-title">{data.promo.title}</div>
                        <div className="cb2-mega-promo-desc">{data.promo.desc}</div>
                        <a
                            href="#"
                            className="cb2-mega-promo-link"
                            onClick={(e) => { e.preventDefault(); handlePromoLinkClick(); }}
                        >
                            {data.promo.link}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Nav() {
    const [openMenu, setOpenMenu] = useState(null);
    const [searchOpen, setSearchOpen] = useState(false);
    const navRef = useRef(null);
    const navigate = useNavigate();

    const handleNavClick = useCallback((name) => {
        setOpenMenu((prev) => (prev === name ? null : name));
    }, []);

    useEffect(() => {
        const handler = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) setOpenMenu(null);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <>
            <nav className="cb2-nav" ref={navRef}>
                <div className="cb2-nav-inner">
                    <Link to="/" className="cb2-logo">
                        <Logo size={22} />
                    </Link>
                    <ul className="cb2-nav-links">
                        {/* ── Explore direct link (no dropdown) ── */}
                        <li className="cb2-nav-item">
                            <Link
                                to="/explore"
                                className="cb2-nav-btn"
                                style={{ textDecoration: "none" }}
                                onClick={() => setOpenMenu(null)}
                            >
                                Explore
                            </Link>
                        </li>

                        {/* ── Dropdown menus ── */}
                        {Object.keys(NAV_MENUS).map((name) => (
                            <li key={name} className="cb2-nav-item">
                                <button
                                    className={`cb2-nav-btn${openMenu === name ? " open" : ""}`}
                                    onClick={() => handleNavClick(name)}
                                    onMouseEnter={() => setOpenMenu(name)}
                                >
                                    {name}
                                </button>
                                {openMenu === name && (
                                    <CB2MegaMenu
                                        data={NAV_MENUS[name]}
                                        menuName={name}
                                        onClose={() => setOpenMenu(null)}
                                    />
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className="cb2-nav-actions">
                        <button className="cb2-icon-btn" onClick={() => setSearchOpen(true)}>
                            <SearchIcon />
                        </button>
                        <button className="cb2-icon-btn">
                            <GlobeIcon />
                        </button>
                        <Link to="/signin">
                            <button className="cb2-btn-signin">Sign in</button>
                        </Link>
                        <Link to="/signup">
                            <button className="cb2-btn-signup">Sign up</button>
                        </Link>
                    </div>
                </div>
            </nav>
            <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
        </>
    );
}

export default Nav;
