import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  profilepic: String,
  desc: String,
  destination: String,
  month: String,
  travelCount: Number,
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
