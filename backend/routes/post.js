var express = require('express');
var router = express.Router();
var Post = require("../models/post");

router.get('/', (req, res) => {
        Post.find((err, posts) => {
        if (err) return next(err);
        res.json(posts);
      });
});

router.get('/:id', (req, res, next) => {
      Post.findById(req.params.id, (err, post) => {
        if (err) return next(err);
        res.json(post);
      });
  });

  router.post('/', (req, res, next) => {
      Post.create(req.body, (err, post) => {
        if (err) return next(err);
        res.json(post);
      });
  });

  router.put('/:id', (req, res, next) => {
      Post.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
        if (err) return next(err);
        res.json(post);
      });
  });

  router.delete('/:id', (req, res, next) => {
      Post.findByIdAndRemove(req.params.id, req.body, (err, post) => {
        if (err) return next(err);
        res.json(post);
      });
  });

  module.exports = router;