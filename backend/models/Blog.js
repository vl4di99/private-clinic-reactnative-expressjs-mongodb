const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: String,
  author: String,
  content: String,
  img: {
    type: String,
  },
});

const Blog = mongoose.model("Blog", postSchema);

module.exports = Blog;
