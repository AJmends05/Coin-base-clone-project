const express = require("express");
const router = express.Router();
const {
  getAllCrypto,
  getTopGainers,
  getNewListings,
  addCrypto,
} = require("../controllers/cryptoController");

// GET /crypto
router.get("/", getAllCrypto);

// GET /crypto/gainers
router.get("/gainers", getTopGainers);

// GET /crypto/new
router.get("/new", getNewListings);

// POST /crypto
router.post("/", addCrypto);

module.exports = router;