const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Crypto = require("./models/Crypto");

dotenv.config();

const cryptoData = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: 56733.85,
    image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
    change24h: -20.36,
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: 1679.25,
    image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
    change24h: 24.01,
  },
  {
    name: "Tether",
    symbol: "USDT",
    price: 0.7346,
    image: "https://assets.coingecko.com/coins/images/325/large/Tether.png",
    change24h: -0.08,
  },
  {
    name: "XRP",
    symbol: "XRP",
    price: 1.01,
    image: "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png",
    change24h: -37.71,
  },
  {
    name: "BNB",
    symbol: "BNB",
    price: 455.32,
    image: "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png",
    change24h: 3.12,
  },
  {
    name: "Solana",
    symbol: "SOL",
    price: 61.83,
    image: "https://assets.coingecko.com/coins/images/4128/large/solana.png",
    change24h: -43.20,
  },
  {
    name: "USDC",
    symbol: "USDC",
    price: 0.7348,
    image: "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png",
    change24h: 0.00,
  },
  {
    name: "TRON",
    symbol: "TRX",
    price: 0.2396,
    image: "https://assets.coingecko.com/coins/images/1094/large/tron-logo.png",
    change24h: 34.02,
  },
  {
    name: "Dogecoin",
    symbol: "DOGE",
    price: 0.0804,
    image: "https://assets.coingecko.com/coins/images/5/large/dogecoin.png",
    change24h: -39.80,
  },
  {
    name: "Hyperliquid",
    symbol: "HYPE",
    price: 29.67,
    image: "https://assets.coingecko.com/coins/images/36668/large/hyperliquid.png",
    change24h: 94.55,
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected for seeding...");

    // Clear existing crypto data
    await Crypto.deleteMany();
    console.log("Existing crypto data cleared...");

    // Insert new data
    await Crypto.insertMany(cryptoData);
    console.log("Crypto data seeded successfully!");

    process.exit();
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
};

seedDB();