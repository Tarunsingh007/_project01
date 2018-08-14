var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/details', function(req, res, next) {
    res.render('villages/villages.hbs');
});


router.get('/categories', function(req, res, next) {
  res.render('villages/categories',{title:"Categories"});
});

module.exports = router;
