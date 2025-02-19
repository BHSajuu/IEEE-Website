// server/models/User.js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String }, // Set when user signs up
  isApproved: { type: Boolean, default: false },
  image: { type: String } ,
});

module.exports = mongoose.model("User", UserSchema);
