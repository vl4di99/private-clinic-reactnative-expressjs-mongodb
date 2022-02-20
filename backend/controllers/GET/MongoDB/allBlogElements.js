const Blog = require("../../../models/Blog");

exports.getAllBlogElements = async(req, res) => {
    const posts = await Blog.find();
    
    try {
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
};

