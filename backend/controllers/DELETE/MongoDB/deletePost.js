const Blog = require('../../../models/Blog');

exports.deletePost = async (req, res) => {
    const { id: _id } = req.params;
    try {
      const deletedPost = await Post.findByIdAndRemove(_id);
      res.status(200).json(deletedPost);
    } catch (error) {
      res.status(409).json({
        message: error.message,
      });
    }
  };