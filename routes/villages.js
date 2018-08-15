var express = require('express');
var router = express.Router();
var consumerdetails=require('../models/consumer');


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
  res.render('villages/handicrafts',{title:"handicrafts"});
});
router.get('/categories/handicrafts/buy', function(req, res, next) {
  res.render('buy',{title:"buy"});
});

router.post('/categories/handicrafts/buy', function(req, res, next) {
	var fname=req.body.fname;
	var lname=req.body.lname;
	var email=req.body.email;
	var number=req.body.number;
	var add=req.body.add;
	var pin=req.body.pin;
	var quantity=req.body.quantity;
	var DeliveryType=req.body.radio;	
	var consumer=new consumerdetails({
							fname,
							lname,
							email,
							number,
							add,
							pin,
							quantity,
							DeliveryType					
	}).save((err,data)=>{
			if(err)
				{
					return err;
					console.log("error in buying");
					res.render('buy');
				}
			else
			{
				res.redirect('/villages/categories/handicrafts');
			}
	});
});
module.exports = router;
