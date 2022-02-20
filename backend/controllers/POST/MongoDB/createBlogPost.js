const Blog = require("../../../models/Blog");

exports.createPost = async (req, res) => {
    const newPost = new Blog(req.body);
    
    try {
      await newPost.save();
      res.status(201).json(newPost);
    } catch (error) {
      res.status(409).json({
        message: error.message,
      });
    }
  };