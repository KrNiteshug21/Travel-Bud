import Trip from "@/models/Trip";
import connectDB from "@/lib/DBConn";
import { NextResponse } from "next/server";

import User from "@/models/User";

export const GET = async (req, res) => {
  await connectDB();

  const trips = await Trip.find({}).populate([
    {
      model: User,
      path: createdBy,
      select: "username email profilePic",
    },
    {
      model: User,
      path: peoplejoined,
      select: "username email profilePic",
    },
  ]);

  if (!trips.length) {
    return NextResponse.json({ message: "No trips exist in database" });
  }

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
    !travelCost
    // || !createdBy
  ) {
    return NextResponse.json({ message: "Missing required data" });
  }

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
