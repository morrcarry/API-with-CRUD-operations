const express = require("express");
const router = express.Router();
const {
  getEventByType,
  addEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");
const multer = require("multer");

const Storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: Storage,
}).single("testImage");

router.route("/events").get(getEventByType);

router.route("/events").post(upload, addEvent);

router.route("/events/:id").put(updateEvent);

router.route("/events/:id").delete(deleteEvent);

module.exports = router;
