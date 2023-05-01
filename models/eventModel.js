const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
  {
    uid: { type: Number, required: true },
    yourname: { type: String, required: true },
    tagline: { type: String, required: true },
    schedule: { type: String, required: true },
    description: { type: String, required: true },

    image: { data: Buffer, contenttype: String },

    moderator: { type: String, required: true },
    category: { type: String, required: true },
    sub_category: { type: String, required: true },
    rigor_rank: { type: Number, required: true },
    attendees: [],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Event", eventSchema);
