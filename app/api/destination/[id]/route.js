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
  const reqBody = await req.json();

  const destination = await Destination.findOne({ _id: destinationId });
  if (!destination) {
    return NextResponse.json({ message: "Destination does not exist" });
  }

  if (reqBody?.destinationName)
    destination.destinationName = reqBody.destinationName;
  if (reqBody?.destinationTitle)
    destination.destinationTitle = reqBody.destinationTitle;
  if (reqBody?.description) destination.description = reqBody.description;
  if (reqBody?.travelcost) destination.travelcost = reqBody.travelcost;

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

  const result = await destination.deleteOne();
  return NextResponse.json({ message: `${result.destinationName} deleted` });
};
