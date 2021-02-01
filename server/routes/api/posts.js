const express = require("express");
const postRouter = express.Router();
const Post = require("../../models/posts.js");


//Get all posts
postRouter.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    // console.log(posts);
    res.status(200).json({ success: true, data: posts });
  } 
  catch (e) {
    res.status(404).json({ success: false, error: err.message });
  }
});

// add single post
postRouter.post("/", async (req, res) => {
  try{
      const post = await Post.create(req.body);
      res.status(201).json({
      success: true,
      dbid: post._id
    });
  } 
  catch (err) {
    console.log(err);
    res.status(400).json({ success: false, error: err.message });
  }

});

// Get single post
postRouter.get('/:id', async (req, res) => {
    try {
    const postOne = await Post.findById(req.params.id);
    res.status(200).json({ success: true, data: postOne });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }

});



// Delete single post
postRouter.delete('/:id', async (req, res) => {
  try {
    const delOne = await Post.findByIdAndRemove(req.params.id);
      // if (err){ 
      //     console.log(err) 
      // } 
      // else{ 
      //     console.log("Removed User : ", docs); 
      // } 
      res.json({
        success: true,
        status: 200,
        del: delOne,
      })
      console.log("Removed Post : ", delOne);
 
} catch (err) {
  res.json({ 
    success: false,
    status: 400,
    error: err.message });
}

});

module.exports = postRouter;
