const Blog = require("../../../models/Blog");

exports.getSingleBlogElement = async (req, res) => {
    try {
      const { id: _id } = req.params;
      const post = await Blog.findById(_id);
      res.status(200).json(post);
    } catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  };