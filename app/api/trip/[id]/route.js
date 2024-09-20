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
    return NextResponse.json({ status: 500, message: "Trip not found!" });

  const user = await User.findById(userId).exec();
  if (!user)
    return NextResponse.json({ status: 500, message: "User not found!" });

  trip.peoplejoined.push(userId);
  await trip.save();

  return NextResponse.json({
    message: `${user.username} joined trip to ${trip.destinationName}`,
  });
};

export const DELETE = async (req, { params }) => {
  await connectDB();
  const { id: tripId } = params;
  const { createdBy, userId } = await req.json();

  if (createdBy !== userId)
    return NextResponse.json({
      status: 401,
      message: "User unauthorized to delete trip!",
    });

  const trip = await Trip.findById(tripId).exec();
  if (!trip)
    return NextResponse.json({ status: 500, message: "Trip not found!" });

  await trip.deleteOne();
  return NextResponse.json({
    revalidated: true,
    status: 200,
    message: "Trip deleted successfully",
  });
};
