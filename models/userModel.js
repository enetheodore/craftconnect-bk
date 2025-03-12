const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: { type: String, enum: ["admin", "artisan", "customer"], required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  artisanDetails: {
    shopName: {
      type: String,
      required: false,
    },
    bio: {
      type: String,
      required: false,
    },
    profilePicture: {
      type: String,
      required: false,
    },
  },

  customerDetails: {
    address: {
      type: String,
      required: false,
    },
    phoneNumber: {
      type: String,
      required: false,
    },
  },
});

module.exports = mongoose.model("user", userSchema);
