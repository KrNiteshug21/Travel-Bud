import User from "@/models/User";
import Trip from "@/models/Trip";
import connectDB from "@/lib/DBConn";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  await connectDB();

  const trips = await Trip.find({}).populate([
    {
      model: User,
      path: "createdBy",
      select: "username email profilePic",
    },
    {
      model: User,
      path: "peoplejoined",
      select: "username email profilePic",
    },
  ]);

  return NextResponse.json(trips);
};

export const POST = async (req, res) => {
  await connectDB();

  const {
    destinationName,
    destinationTitle,
    description,
    images,
    travelCost,
    peoplejoined,
    createdBy,
  } = await req.json();

  if (
    !destinationName ||
    !destinationTitle ||
    !description ||
    !images ||
    !Array.isArray(images) ||
    !travelCost ||
    !createdBy
  ) {
    return NextResponse.json({ message: "Missing required data" });
  }

  const user = await User.findById(createdBy);
  if (!user) return NextResponse.json({ message: "User not found" });
  const foundTrip = await Trip.findOne({ destinationName });
  if (foundTrip) return NextResponse.json({ message: "Trip already exists" });

  const trip = await Trip.create({
    destinationName,
    destinationTitle,
    description,
    images,
    travelCost,
    peoplejoined,
    createdBy,
  });

  return NextResponse.json(trip);
};
