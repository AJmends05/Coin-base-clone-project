const mongoose = require("mongoose");

const cryptoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Crypto name is required"],
    },
    symbol: {
      type: String,
      required: [true, "Symbol is required"],
      uppercase: true,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    image: {
      type: String,
      default: "",
    },
    change24h: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Crypto", cryptoSchema);