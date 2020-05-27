var express = require('express');
var router = express.Router();
var Category = require("../models/category");

router.get('/', (req, res) => {
    Category.find(function (err, categories) {
        if (err) return next(err);
        res.json(categories);
    });
});

router.get('/:id', (req, res, next) => {
    Category.findById(req.params.id, function (err, category) {
    if (err) return next(err);
        res.json(category);
    });
});

router.post('/', (req, res, next) => {
    Category.create(req.body, function (err, category) {
        if (err) return next(err);
        res.json(category);
    });
});

router.put('/:id', (req, res, next) => {
    Category.findByIdAndUpdate(req.params.id, req.body, function (err, category) {
        if (err) return next(err);
        res.json(category);
    });
});

router.delete('/:id', (req, res, next) => {
    Category.findByIdAndRemove(req.params.id, req.body, function (err, category) {
        if (err) return next(err);
        res.json(category);
    });
});

module.exports = router;
