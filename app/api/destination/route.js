import Destination from "@/models/Destination";
import connectDB from "@/lib/DBConn";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  await connectDB();

  const query = await req.query;
  const destinations = await Destination.find({});
  return NextResponse.json(destinations, { status: 200 });
};

export const POST = async (req, res) => {
  await connectDB();
  const { destinationName, destinationTitle, description, images, travelcost } =
    await req.json();

  const duplicate = await Destination.findOne({ destinationName }).exec();
  if (duplicate) {
    return NextResponse.json({ message: "Location already present" });
  }

  if (
    !destinationName ||
    !destinationTitle ||
    !description ||
    !Array.isArray(images) ||
    !travelcost
  ) {
    return NextResponse.json({ message: "Missing required Data" });
  }

  const destination = await Destination.create({
    destinationName,
    destinationTitle,
    description,
    images,
    travelcost,
  });

  return NextResponse.json({
    message: `${destination.destinationName} with ${destination.id} created`,
  });
};
