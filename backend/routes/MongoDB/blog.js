const express = require("express");

const allBlogElements = require("../../controllers/GET/MongoDB/allBlogElements");
const singleBlogElement = require("../../controllers/GET/MongoDB/singleBlogElement");
const createBlogPost = require("../../controllers/POST/MongoDB/createBlogPost");
const updatePost = require("../../controllers/PATCH/MongoDB/updatePost");
const deletePost = require("../../controllers/DELETE/MongoDB/deletePost");
const Blog = require("../../models/Blog");


const router = express.Router()
router.get('/', allBlogElements.getAllBlogElements);
router.get('/:id', singleBlogElement.getSingleBlogElement);
router.post('/', createBlogPost.createPost);
router.patch("/:id", updatePost.updatePost);
router.delete("/:id", deletePost.deletePost);

/*
var app = express();

app.get('/', getAllBlogElements);
app.get('/:id', getSingleBlogElement);
app.post('/', createPost);
*/
module.exports = router;
