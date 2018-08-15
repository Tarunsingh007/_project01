var express = require('express');
var router = express.Router();
var contactform=require('../models/contactform');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{title:"DeVVil-Tourism & handicrafts"});
});

router.get('/about', function(req, res, next) {
  res.render('about/about.hbs',{title:"AboutUs"});
});

router.get('/contact', function(req, res, next) {
  res.render('contact/contact.hbs',{title:"ContactUs"});
});

router.post('/contact', function(req, res, next) {
	var email=req.body.email;
	var number=req.body.number;
	var query=req.body.query;
	var suggestions=req.body.suggestion;
	var contact=new contactform({
							email,
							number,
							query,
							suggestions
	}).save((err,data)=>{
			if(err)
				{
					return err;
					res.redirect('/contact');
				}
			else
			{
				res.redirect('/');
			}
	});

});



module.exports = router;
