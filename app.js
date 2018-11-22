var createError = require('http-errors');
var express = require('express');
var bodyparser=require('body-parser');
var path = require('path');
var mongo=require('mongodb');
var expressValidator=require('express-validator');
var mongoose=require('mongoose');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs=require('hbs');
var indexRouter = require('./routes/index');
var villagesRouter = require('./routes/villages');
var app = express();
// var mongoose=require('./mongooseconnect.js');
// var pymts=require('./payments.js');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/villages', villagesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
