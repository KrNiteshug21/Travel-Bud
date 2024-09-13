import User from "@/models/User";
import connectDB from "@/lib/DBConn";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const GET = async (req, res) => {
  await connectDB();
  const users = await User.find();
  return NextResponse.json(users, { status: 200 });
};

export const POST = async (req, res) => {
  await connectDB();

  const { username, email, password, profilePic } = await req.json();

  if (!username || !email || !password) {
    return NextResponse.json({ message: "Missing required data" });
  }

  const duplicateUsername = await User.find({ username });
  if (duplicateUsername?.length) {
    console.log(duplicateUsername);
    return NextResponse.json({ message: "Username already exists!" });
  }
  const duplicateMail = await User.find({ email });
  if (duplicateMail?.length) {
    console.log(duplicateMail);
    return NextResponse.json({ message: "Email already exists!" });
  }

  const hashPwd = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    email,
    password: hashPwd,
    profilePic,
  });

  return NextResponse.json({
    message: `${user.username} created`,
  });
};
