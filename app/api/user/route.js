import User from "@/models/User";
import connectDB from "@/lib/DBConn";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  await connectDB();
  const users = await User.find();
  return NextResponse.json(users, { status: 200 });
};

export const POST = async (req, res) => {
  await connectDB();

  const { name, profilepic, desc, destination, month, travelCount } =
    await req.json();

  if (!name || !profilepic || !desc || !destination || !month || !travelCount) {
    return NextResponse.json({ message: "Missing required data" });
  }

  // const duplicate = await User.find({ name });
  // if (duplicate) {
  //   return NextResponse.json({ message: "User already present" });
  // }

  const users = await User.create({
    name,
    profilepic,
    desc,
    destination,
    month,
    travelCount,
  });

  return NextResponse.json({
    message: `${users.name} with ${users.id} created`,
  });
};
