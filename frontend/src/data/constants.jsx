import React from "react";
import btcIcon from "../assets/images/bitcoin.png";
import ethIcon from "../assets/images/Ethereum.png";
import tetherIcon from "../assets/images/Tether.png";
import bnbIcon from "../assets/images/BNB.png";
import xrpIcon from "../assets/images/XRP.png";
import usdcIcon from "../assets/images/USDC.png";

// ── Search Data ──────────────────────────────────────────
export const CRYPTO_LIST = [
    { id: 1, name: "Bitcoin", ticker: "BTC", rank: 1, iconBg: "#F7931A", icon: "bi-currency-bitcoin", vol: "$38.2B vol", mcap: "$1.27T mcap", price: "$64,320.00", chg: 1.42, up: true },
    { id: 2, name: "Ethereum", ticker: "ETH", rank: 2, iconBg: "#627EEA", icon: "bi-lightning-charge-fill", vol: "$18.4B vol", mcap: "$298.6B mcap", price: "$3,180.45", chg: -0.87, up: false },
    { id: 3, name: "Tether", ticker: "USDT", rank: 3, iconBg: "#26A17B", icon: "bi-cash-coin", vol: "$71.2B vol", mcap: "$110.3B mcap", price: "$1.00", chg: 0.01, up: true },
    { id: 4, name: "XRP", ticker: "XRP", rank: 4, iconBg: "#346AA9", icon: "bi-x", vol: "$3.1B vol", mcap: "$38.7B mcap", price: "$0.69", chg: -1.23, up: false },
    { id: 5, name: "Solana", ticker: "SOL", rank: 5, iconBg: "#9945FF", icon: "bi-sun", vol: "$4.8B vol", mcap: "$72.1B mcap", price: "$168.90", chg: 3.05, up: true },
    { id: 6, name: "BNB", ticker: "BNB", rank: 6, iconBg: "#F3BA2F", icon: "bi-diamond-fill", vol: "$1.9B vol", mcap: "$88.4B mcap", price: "$578.22", chg: -0.54, up: false },
    { id: 7, name: "USDC", ticker: "USDC", rank: 7, iconBg: "#2775CA", icon: "bi-currency-dollar", vol: "$9.3B vol", mcap: "$43.1B mcap", price: "$1.00", chg: 0.00, up: true },
    { id: 8, name: "Dogecoin", ticker: "DOGE", rank: 8, iconBg: "#C2A633", icon: "bi-coin", vol: "$0.8B vol", mcap: "$21.6B mcap", price: "$0.148", chg: -3.11, up: false },
    { id: 9, name: "Cardano", ticker: "ADA", rank: 9, iconBg: "#0033AD", icon: "bi-circle", vol: "$0.5B vol", mcap: "$14.2B mcap", price: "$0.41", chg: -1.78, up: false },
];

export const STOCKS_LIST = [
    { id: 101, name: "NVIDIA", ticker: "NVDA", iconBg: "#76b900", icon: "bi-cpu-fill", vol: "$42.1B vol", mcap: "$2.8T mcap", price: "$112.40", chg: -2.34, up: false },
    { id: 102, name: "Apple", ticker: "AAPL", iconBg: "#555", icon: "bi-apple", vol: "$14.2B vol", mcap: "$3.1T mcap", price: "$198.15", chg: 0.62, up: true },
    { id: 103, name: "Alphabet", ticker: "GOOG", iconBg: "#4285F4", icon: "bi-google", vol: "$8.7B vol", mcap: "$2.1T mcap", price: "$174.32", chg: -1.05, up: false },
    { id: 104, name: "Microsoft", ticker: "MSFT", iconBg: "#00A4EF", icon: "bi-windows", vol: "$9.4B vol", mcap: "$3.0T mcap", price: "$402.65", chg: 1.18, up: true },
    { id: 105, name: "Amazon", ticker: "AMZN", iconBg: "#FF9900", icon: "bi-box", vol: "$11.3B vol", mcap: "$1.9T mcap", price: "$183.20", chg: -0.77, up: false },
    { id: 106, name: "Tesla", ticker: "TSLA", iconBg: "#CC0000", icon: "bi-car-front", vol: "$22.6B vol", mcap: "$780B mcap", price: "$248.50", chg: 4.21, up: true },
];

export const PREDICTIONS_LIST = [
    { id: 201, name: "Will BTC reach $80k in 2025?", ticker: "BTC80K", iconBg: "#0052FF", icon: "bi-question-circle", vol: "$8.2M vol", mcap: "$31.4M mcap", price: "$0.58", chg: 3.40, up: true },
    { id: 202, name: "ETH above $5k by year end?", ticker: "ETH5K", iconBg: "#627EEA", icon: "bi-graph-up-arrow", vol: "$4.6M vol", mcap: "$18.9M mcap", price: "$0.44", chg: -1.82, up: false },
];

export const PERPETUALS_LIST = [
    { id: 301, name: "Bitcoin Perpetual", ticker: "BTC-PERP", iconBg: "#F7931A", icon: "bi-currency-bitcoin", vol: "$3.1B vol", mcap: "—", price: "$64,210.00", chg: 1.38, up: true },
    { id: 302, name: "Ethereum Perpetual", ticker: "ETH-PERP", iconBg: "#627EEA", icon: "bi-lightning-charge-fill", vol: "$1.2B vol", mcap: "—", price: "$3,175.80", chg: -0.91, up: false },
    { id: 303, name: "Solana Perpetual", ticker: "SOL-PERP", iconBg: "#9945FF", icon: "bi-sun", vol: "$480M vol", mcap: "—", price: "$168.40", chg: 2.97, up: true },
];

export const FUTURES_LIST = [
    { id: 401, name: "Bitcoin Futures Jun 25", ticker: "BTCM25", iconBg: "#F7931A", icon: "bi-currency-bitcoin", vol: "$720M vol", mcap: "—", price: "$65,100.00", chg: 1.51, up: true },
    { id: 402, name: "Ethereum Futures Jun 25", ticker: "ETHM25", iconBg: "#627EEA", icon: "bi-lightning-charge-fill", vol: "$310M vol", mcap: "—", price: "$3,205.00", chg: -0.74, up: false },
];

export const SEARCH_TABS = ["Top", "Crypto", "Stocks", "Predictions", "Perpetuals", "Futures"];

// ── Asset Table ──────────────────────────────────────────
export const TOP_ASSETS = [
    { name: "Bitcoin",  ticker: "BTC", price: 50264.15, chg: -1.02, img: btcIcon },
    { name: "Ethereum", ticker: "ETH", price:  1468.11, chg: -0.57, img: ethIcon },
    { name: "Tether",   ticker: "USDT",price:     0.75, chg:  0.00, img: tetherIcon },
    { name: "BNB",      ticker: "BNB", price:   463.17, chg: -1.32, img: bnbIcon },
    { name: "XRP",      ticker: "XRP", price:     1.01, chg: -0.20, img: xrpIcon },
    { name: "USDC",     ticker: "USDC",price:     0.75, chg:  0.00, img: usdcIcon },
];

export const ASSET_FILTER_TABS = ["Tradable", "Top gainers", "New on Coinbase"];

// ── Phone Mockup ─────────────────────────────────────────
export const PORTFOLIO_ROWS = [
    { icon: "bi-currency-bitcoin", iconBg: "#EBF0FF", iconColor: "#0052FF", name: "Crypto",      val: "$12,540.80", up: true  },
    { icon: "bi-graph-up",         iconBg: "#f5f5f5", iconColor: "#333",    name: "Stocks",      val: "$6,820.44",  up: true  },
    { icon: "bi-arrow-left-right", iconBg: "#f5f5f5", iconColor: "#333",    name: "Derivatives", val: "↗ $204.12",  up: true  },
    { icon: "bi-magic",            iconBg: "#f5f5f5", iconColor: "#333",    name: "Predictions", val: "↗ $38.50",   up: true  },
    { icon: "bi-cash",             iconBg: "#f5f5f5", iconColor: "#555",    name: "Cash",        val: "$8,900.00",  up: false },
];

// ── Trade Section ────────────────────────────────────────
export const CANDLE_STICKS = [
    { o: 60, c: 72, h: 76, l: 54 }, { o: 72, c: 66, h: 74, l: 62 },
    { o: 66, c: 82, h: 86, l: 64 }, { o: 82, c: 76, h: 84, l: 72 },
    { o: 76, c: 90, h: 93, l: 74 }, { o: 90, c: 84, h: 92, l: 80 },
    { o: 84, c: 96, h: 100, l: 82 }, { o: 96, c: 91, h: 98, l: 88 },
    { o: 91, c: 106, h: 110, l: 90 }, { o: 106, c: 100, h: 112, l: 97 },
    { o: 100, c: 114, h: 117, l: 98 }, { o: 114, c: 109, h: 118, l: 106 },
    { o: 109, c: 122, h: 126, l: 108 }, { o: 122, c: 117, h: 124, l: 113 },
    { o: 117, c: 130, h: 134, l: 115 },
];

export const ASKS = [
    { price: "64,520", qty: "0.08" },
    { price: "64,480", qty: "0.21" },
    { price: "64,450", qty: "0.64" },
];

export const BIDS = [
    { price: "64,310", qty: "0.43" },
    { price: "64,280", qty: "1.07" },
    { price: "64,250", qty: "0.78" },
    { price: "64,220", qty: "1.95" },
];

// ── Learn Section ────────────────────────────────────────
export const LEARN_ARTICLES = [
    {
        bg: "radial-gradient(circle at 50% 60%, #0052FF 0%, #001266 55%, #000 100%)",
        thumb: (
            <div style={{ width: 68, height: 68, borderRadius: "50%", background: "#0052FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="bi bi-coin" style={{ fontSize: 40, color: "white" }} />
            </div>
        ),
        title: "What is Bitcoin and how does it work?",
        excerpt: "Bitcoin is the world's first decentralised digital currency. Unlike traditional money, no government or bank controls it — transactions are verified by a global network...",
    },
    {
        bg: "linear-gradient(135deg, #1a1a2e, #16213e)",
        thumb: <i className="bi bi-shield-lock" style={{ fontSize: 60, color: "#0052FF" }} />,
        title: "How to keep your crypto safe in 2025",
        excerpt: "Security is the foundation of crypto ownership. From hardware wallets to two-factor authentication, here are the steps every investor should take to protect their assets...",
    },
    {
        bg: "linear-gradient(135deg, #2d6a4f, #40916c)",
        thumb: <i className="bi bi-bar-chart-line" style={{ fontSize: 60, color: "white" }} />,
        title: "Dollar-cost averaging: a beginner's strategy",
        excerpt: "Rather than trying to time the market, many experienced investors use dollar-cost averaging to build their crypto portfolio steadily over time regardless of price swings...",
    },
];

// ── Footer ───────────────────────────────────────────────
export const FOOTER_LINKS = {
    Company: ["About", "Careers", "Affiliates", "Blog", "Press", "Security", "Investors", "Legal & privacy", "Cookie policy"],
    Learn: ["Explore assets", "Market statistics", "Crypto basics", "Tips & tutorials", "Glossary", "What is Bitcoin?", "What is crypto?", "How to buy Bitcoin", "Taxes"],
    Individuals: ["Buy & sell", "Earn crypto", "Base App", "Coinbase One", "Debit Card", "Advanced trading"],
    Businesses: ["Asset Listings", "Coinbase Business", "Payments", "Commerce"],
    Institutions: ["Prime", "Staking", "Exchange", "International Exchange", "Derivatives Exchange"],
    Developers: ["Developer Platform", "Base", "Embedded Wallets", "Onramp & Offramp", "Trade API", "OnchainKit", "AgentKit", "Node", "Staking API"],
    Support: ["Help center", "Contact us", "Create account", "Payment methods", "Account access", "Supported assets", "Status"],
    Prices: ["Bitcoin price", "Ethereum price", "Solana price", "XRP price", "Dogecoin price"],
};
export const LANGUAGES = [
    { id: "en-global", language: "English",    region: "Global"         },
    { id: "en-us",     language: "English",    region: "United States"  },
    { id: "es-us",     language: "Español",    region: "United States"  },
    { id: "de-de",     language: "Deutsch",    region: "Deutschland"    },
    { id: "fr-fr",     language: "Français",   region: "France"         },
    { id: "it-it",     language: "Italiano",   region: "Italia"         },
    { id: "pt-br",     language: "Português",  region: "Brasil"         },
    { id: "ja-jp",     language: "日本語",      region: "日本"            },
    { id: "ko-kr",     language: "한국어",      region: "대한민국"         },
    { id: "zh-cn",     language: "中文",        region: "中国"            },
];