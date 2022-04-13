const express = require("express");

const postTracker = require("../../controllers/POST/MongoDB/postTracker");
const getTracker = require("../../controllers/GET/MongoDB/allTrackings");
const Tracker = require("../../models/Tracker");

const router = express.Router();
router.post("/", postTracker.createPost);
router.get("/", getTracker.getTrackingsbyName);

module.exports = router;
