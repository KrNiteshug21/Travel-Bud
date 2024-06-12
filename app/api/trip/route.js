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

  const { destination, uid } = await req.json();

  const trip = await Trip.create({
    destination,
    peoplejoined: [uid],
  });

  return NextResponse.json(trip);
};
