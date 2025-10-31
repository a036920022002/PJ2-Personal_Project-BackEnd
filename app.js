require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');
const {connectDB}=require('./config/db')
const config= require('./config/config');
const aboutmeRoute = require ('./routes/aboutme');
const educationRoute = require ('./routes/education');
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();
connectDB();

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

<<<<<<< Updated upstream
=======
//靜態圖片使用
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use('/images/aboutme', express.static(path.join(__dirname, 'public/images')));

>>>>>>> Stashed changes
//Route 
app.use(cors());
// app.use('/api/error',errorRouter)
app.use('/api/aboutme',aboutmeRoute)
app.use('/api/education',educationRoute)
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log(`⚠️  404 Not Found: ${req.originalUrl}`);
  return res.status(404).json({ success: false, message: 'Request not found' });

});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.error(`🔥 500 Server Error: ${err.message}`);

  // render the error page
   return res.status(err.status || 500).json({
    success: false,
    message: 'Server Error',
  });
  
});

module.exports = app;
