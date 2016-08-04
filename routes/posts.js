const express = require('express'),
      Post = require('../models/post');

const router = express.Router();
//create
router.post('/', function(req, res) {
  var post = new Post(req.body);

  post.save(function(){
    res.json(post);
  });
});
//read all posts
router.get('/', function(req, res) {
  Post.find({}, function(err, posts){
    res.json(posts);
  });

});
//read one post
router.get('/:id', function(req, res) {
  Post.findById(req.params.id, function(err, post){
      res.json(post);
  })
});
//update the post
router.patch('/:id', function(req, res) {
  Post.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, post) {
    // respond with updated post
    res.json(post);
  });
});

// this is the delete route
router.delete('/:id', function(req, res) {
  Post.findByIdAndRemove(req.params.id, function(err, post) {
    res.json(true);
  });
});


module.exports = router;
