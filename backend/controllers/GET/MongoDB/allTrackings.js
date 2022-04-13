const Tracker = require("../../../models/Tracker");

exports.getTrackingsbyName = async (req, res) => {
  try {
    const user = req.body.username;
    const post = await Tracker.find({ username: user });
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
