const Blog = require('../../../models/Blog');

exports.updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
    try {
      const updatedPost = await Blog.findByIdAndUpdate(_id, post, { new: true });
      res.status(200).json(updatedPost);
    } catch (error) {
      res.status(409).json({
        message: error.message,
      });
    }
  };