const asyncHandler = require("express-async-handler");
const Event = require("../models/eventModel");

const getEventByType = asyncHandler(async (req, res) => {
  if (req.query.id) {
    let eventId = req.query.id;
    const eves = await Event.findById(eventId);
    if (!eves) {
      res.status(404);
      throw new Error("Event not found");
    }
    res.status(200).json(eves);
  } else {
    let page = req.query.page || 1;

    let limit = req.query.limit || 3;

    let skip = (page - 1) * limit;
    const eves = await Event.find()
      .sort({ schedule: 1 })
      .skip(skip)
      .limit(limit);

    res.status(200).json(eves);
  }
});

const addEvent = asyncHandler(async (req, res) => {
  const {
    uid,
    yourname,
    tagline,
    schedule,
    description,
    moderator,
    category,
    sub_category,
    rigor_rank,
  } = req.body;
  /*if (
    !uid ||
    !yourname ||
    !tagline ||
    !schedule ||
    !description ||
    !moderator ||
    !category ||
    !sub_category ||
    !rigor_rank
  ) {
    res.status(400);
    throw new Error("All fileds are mandatory");
  }*/

  const eves = await Event.create({
    uid,
    yourname,
    tagline,
    schedule,
    description,
    image: { data: req.file.filename, contentType: "image/png" },
    moderator,
    category,
    sub_category,
    rigor_rank,
  });
  res.status(201).json(eves);
});

const updateEvent = asyncHandler(async (req, res) => {
  const eves = await Event.findById(req.params.id);

  if (!eves) {
    res.status(404);
    throw new Error("Event not found");
  }

  const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updateEvent);
});

const deleteEvent = asyncHandler(async (req, res) => {
  const eves = await Event.findById(req.params.id);
  if (!eves) {
    res.status(404);
    throw new Error("Contact not found");
  }

  await Event.deleteOne({ _id: req.params.id });
  res.status(200).json(eves);
});

module.exports = {
  getEventByType,
  addEvent,
  updateEvent,
  deleteEvent,
};
