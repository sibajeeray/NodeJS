
var express = require('express');
var path = require('path');
var bookRouter = require('./routes/book');
var mongoose = require("mongoose");

var app = express();

mongoose.connect('mongodb://sibajee:testpass@127.0.0.1:27017/test');
mongoose.connection.on('connected',()=>{console.log("DataBase connection Established")})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/book',bookRouter);

app.get('/',(req,res)=>{res.send("Welcome to the App");});

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

app.listen(3005, ()=>{console.log("Listen to 3005")});

module.exports = app;
