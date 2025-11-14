require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');
// const {connectDB}=require('./config/db')
const db =require('./config/db')
const aboutmeRoute = require ('./routes/aboutme');
const educationRoute = require ('./routes/education');
const workexperienceRoute = require ('./routes/workexperience');
const worksRoute = require ('./routes/works');
const authRoute = require ('./routes/auth');
const certificateRoute = require ('./routes/certificate');



var app = express();

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//靜態圖片使用
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use('/images/aboutme', express.static(path.join(__dirname, 'public/images')));


//Route 
app.use(cors());
app.use('/api/aboutme',aboutmeRoute)
app.use('/api/education',educationRoute)
app.use('/api/workexperience',workexperienceRoute)
app.use('/api/works',worksRoute)
app.use('/api/auth',authRoute)
app.use('/api/certificate',certificateRoute)

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
