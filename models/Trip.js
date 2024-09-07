import mongoose from "mongoose";

const tripSchema = new mongoose.Schema(
  {
    destinationName: {
      type: String,
      required: true,
    },
    destinationTitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
      },
    ],
    travelCost: {
      type: Number,
      required: true,
    },
    peoplejoined: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose?.models?.Trip || mongoose.model("Trip", tripSchema);
