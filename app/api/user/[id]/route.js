import User from "@/models/User";
import connectDB from "@/lib/DBConn";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  await connectDB();
  const userId = params.id;

  const user = await User.findOne({ _id: userId }).exec();
  if (!user) return NextResponse.json({ message: "User not found" });
  return NextResponse.json(user, { status: 200 });
};

export const PATCH = async (req, { params }) => {
  await connectDB();

  const userId = params.id;
  const reqBody = await req.json();

  const user = await User.findOne({ _id: userId }).exec();
  if (!user) {
    return NextResponse.json({ message: "User Not Found" });
  }

  if (reqBody?.username) user.username = reqBody.username;
  if (reqBody?.password) user.password = reqBody.password;
  if (reqBody?.email) user.email = reqBody.email;
  if (reqBody?.profilePic) user.profilePic = reqBody.profilePic;

  const result = await user.save();
  return NextResponse.json({ mssage: `${result.name} updated`, result });
};

export const DELETE = async (req, { params }) => {
  await connectDB();
  const userId = params.id;
  if (!userId) {
    return NextResponse.json({ message: "User Id is required" });
  }

  const user = await User.findOne({ _id: userId }).exec();
  if (!user) {
    return NextResponse.json({ message: "User Not Found" });
  }

  const result = await user.deleteOne();
  return NextResponse.json({ message: `${result.name} deleted` });
};
