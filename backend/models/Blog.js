const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: String,
  author: String,
  content: String,
 /* img:
      {
        data: Buffer,
        contentType: String
      }

  */
  //image: String,
  /*createdAt: {
    type: Date,
    default: new Date(),
  },*/
});

const Blog = mongoose.model("Blog", postSchema);

module.exports = Blog;