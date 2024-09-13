import Trip from "@/models/Trip";
import connectDB from "@/lib/DBConn";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  await connectDB();

  const trips = await Trip.find();
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
    !travelCost ||
    !peoplejoined ||
    !createdBy
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
