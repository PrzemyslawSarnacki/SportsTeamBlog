var Category = require("../models/category");
var Post = require("../models/post");

router.get('/category', (req, res, next) => {
    Category.find(function (err, categories) {
      if (err) return next(err);
      res.json(categories);
    });
  });
  
  router.get('/bycategory/:id', (req, res, next) => {
    Post.find({category: req.params.id}, function (err, posts) {
      if (err) return next(err);
      res.json(posts);
    });
  });
  
  router.get('/post', (req, res, next) => {
    Post.find(function (err, posts) {
      if (err) return next(err);
      res.json(posts);
    });
  });
  
  router.get('/post/:id', (req, res, next) => {
    Post.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  module.exports = router;
