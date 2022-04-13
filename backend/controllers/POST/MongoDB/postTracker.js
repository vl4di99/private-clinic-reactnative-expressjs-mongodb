const Tracker = require("../../../models/Tracker");

exports.createPost = async (req, res) => {
  const newPost = new Tracker(req.body);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};
