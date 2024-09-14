import Trip from "@/models/Trip";
import User from "@/models/User";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

export const PATCH = async (req, { params, user_id }) => {
  await connectDB();
  const tripId = params.id;
  const reqBody = await req.json();

  const trip = await Trip.findOne({ _id: tripId }).exec();
  const user = await User.findOne({ _id: user_id }).exec();

  trip.peoplejoined.push(user_id);
  const result = await trip.save();

  return NextResponse.json({
    message: `${user.username} joined trip to ${trip.destinationName}`,
    result,
  });
};
