const Crypto = require("../models/Crypto");

// @desc    Get all cryptocurrencies
// @route   GET /crypto
const getAllCrypto = async (req, res) => {
  try {
    const cryptos = await Crypto.find().sort({ createdAt: -1 });

    if (!cryptos || cryptos.length === 0) {
      return res.status(404).json({ message: "No cryptocurrencies found" });
    }

    res.status(200).json(cryptos);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Get top gainers (highest 24h change)
// @route   GET /crypto/gainers
const getTopGainers = async (req, res) => {
  try {
    const gainers = await Crypto.find({ change24h: { $gt: 0 } }).sort({
      change24h: -1,
    });

    if (!gainers || gainers.length === 0) {
      return res.status(404).json({ message: "No gainers found" });
    }

    res.status(200).json(gainers);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Get new listings (most recently added)
// @route   GET /crypto/new
const getNewListings = async (req, res) => {
  try {
    const newListings = await Crypto.find().sort({ createdAt: -1 }).limit(10);

    if (!newListings || newListings.length === 0) {
      return res.status(404).json({ message: "No new listings found" });
    }

    res.status(200).json(newListings);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Add a new cryptocurrency
// @route   POST /crypto
const addCrypto = async (req, res) => {
  try {
    const { name, symbol, price, image, change24h } = req.body;

    // Check all required fields are provided
    if (!name || !symbol || !price) {
      return res.status(400).json({ message: "Name, symbol and price are required" });
    }

    // Check if crypto with same symbol already exists
    const cryptoExists = await Crypto.findOne({ symbol: symbol.toUpperCase() });
    if (cryptoExists) {
      return res.status(400).json({ message: "A cryptocurrency with that symbol already exists" });
    }

    const crypto = await Crypto.create({
      name,
      symbol,
      price,
      image: image || "",
      change24h: change24h || 0,
    });

    res.status(201).json({
      message: "Cryptocurrency added successfully",
      crypto,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { getAllCrypto, getTopGainers, getNewListings, addCrypto };