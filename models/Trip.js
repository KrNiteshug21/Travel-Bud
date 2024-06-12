import mongoose from "mongoose";

const tripSchema = new mongoose.Schema({
  destination: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Destination",
  },
  peoplejoined: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

module.exports = mongoose.models.Trip || mongoose.model("Trip", tripSchema);
