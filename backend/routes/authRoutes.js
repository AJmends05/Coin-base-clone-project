const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controllers/authController");

// POST /register
router.post("/register", registerUser);

// POST /login
router.post("/login", loginUser);

// POST /logout
router.post("/logout", logoutUser);

module.exports = router;