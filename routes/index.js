var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{title:"DeVVil-Tourism & handicrafts"});
});

router.get('/about', function(req, res, next) {
  res.render('about/about.hbs',{title:"AboutUs"});
});



module.exports = router;
