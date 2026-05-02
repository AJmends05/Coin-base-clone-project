const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

// @desc    Get logged in user profile
// @route   GET /profile
const getProfile = async (req, res) => {
  try {
    const user = req.user;

    res.status(200).json({
      id: user._id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// GET /profile — protected, must be logged in
router.get("/", protect, getProfile);

module.exports = router;