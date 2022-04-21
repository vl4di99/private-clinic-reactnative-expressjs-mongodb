const Tracker = require("../../../models/Tracker");

exports.getTrackingsbyName = async (req, res) => {
  try {
    const user = req.body.username;
    const doctor = req.body.doctor;
    const post = await Tracker.find({ username: user, isDoctor: doctor });
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
