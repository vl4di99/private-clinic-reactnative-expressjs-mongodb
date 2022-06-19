const MedicalHistory = require("../../../models/MedicalHistory");

exports.createPost = async (req, res) => {
  const newPost = new MedicalHistory(req.body);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

exports.getPost = async (req, res) => {
  try {
    const patient_fullname = req.body.fullname;
    const post = await MedicalHistory.find({ patient: patient_fullname });
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
