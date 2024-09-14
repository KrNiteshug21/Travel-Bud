import connectDB from "@/lib/DBConn";
import Trip from "@/models/Trip";
import User from "@/models/User";
import { NextResponse } from "next/server";

export const PATCH = async (req, { params }) => {
  await connectDB();
  const { id: tripId } = params;
  const { userId } = await req.json();

  const trip = await Trip.findById(tripId).exec();
  if (!trip)
    return NextResponse.status(500).json({ message: "Trip not found!" });
  const user = await User.findById(userId).exec();
  if (!user)
    return NextResponse.status(500).json({ message: "User not found!" });
  console.log("trip", trip);

  trip.peoplejoined.push(userId);
  await trip.save();

  return NextResponse.json({
    message: `${user.username} joined trip to ${trip.destinationName}`,
  });
};
