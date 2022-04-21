const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  mood: String,
  sleep: Boolean,
  water: Boolean,
  meditation: Boolean,
  medication: Boolean,
  exercise: Boolean,
  systolic: Number,
  diastolic: Number,
  hr: Number,
  username: String,
  fullname: String,
  date: Date,
  isDoctor: Boolean,
});

const Tracker = mongoose.model("Tracker", postSchema);

module.exports = Tracker;
