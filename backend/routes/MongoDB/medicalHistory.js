const express = require("express");

const postHistory = require("../../controllers/POST/MongoDB/medicalHistory");

const router = express.Router();
router.post("/", postHistory.createPost);
router.post("/get", postHistory.getPost);

module.exports = router;
