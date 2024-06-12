import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema({
  destinationName: String,
  destinationTitle: String,
  description: String,
  images: [
    {
      type: String,
    },
  ],
  travelcost: Number,
});

module.exports =
  mongoose.models.Destination ||
  mongoose.model("Destination", destinationSchema);
