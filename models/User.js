import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
    profilePic: String,
  },
  { timestamps: true }
);

module.exports = mongoose?.models?.User || mongoose.model("User", userSchema);
