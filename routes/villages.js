var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/details', function(req, res, next) {
    res.render('villages/villages.hbs');
});


router.get('/categories', function(req, res, next) {
  res.render('villages/categories',{title:"tourism"});
});
router.get('/categories/lakes', function(req, res, next) {
  res.render('villages/lakes',{title:"lakes"});
});
router.get('/categories/foods', function(req, res, next) {
  res.render('villages/foods',{title:"foods"});
});
router.get('/categories/handicrafts', function(req, res, next) {
  res.render('villages/handicraft',{title:"handicrafts"});
});

module.exports = router;
