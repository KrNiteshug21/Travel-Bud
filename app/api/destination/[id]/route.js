import Destination from "@/models/Destination";
import connectDB from "@/lib/DBConn";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  await connectDB();

  const destinationId = params.id;

  const destination = await Destination.findOne({ _id: destinationId });
  if (!destination) {
    return NextResponse.json({ message: "Destination does not exist" });
  }

  return NextResponse.json(destination);
};

export const PUT = async (req, { params }) => {
  await connectDB();

  const destinationId = params.id;
  const { destinationName, destinationTitle, description, travelcost } =
    await req.json();

  const destination = await Destination.findOne({ _id: destinationId });
  if (!destination) {
    return NextResponse.json({ message: "Destination does not exist" });
  }

  if (destinationName) destination.destinationName = destinationName;
  if (destinationTitle) destination.destinationTitle = destinationTitle;
  if (description) destination.description = description;
  if (travelcost) destination.travelcost = travelcost;

  const result = await destination.save();
  return NextResponse.json({ message: `${result.destinationName} updated` });
};

export const DELETE = async (req, { params }) => {
  await connectDB();

  const destinationId = params.id;
  if (!destinationId) {
    return NextResponse.json({
      message: "Destination Id is required",
    });
  }

  const destination = await Destination.findOne({ _id: destinationId }).exec();
  if (!destination) {
    return NextResponse.json({ message: "Destination Not Found" });
  }
  const { destinationName } = destination;

  const result = await destination.deleteOne();
  return NextResponse.json({ message: `${destinationName} deleted` });
};
