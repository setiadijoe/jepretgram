require('dotenv').config()
var express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'), 
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    db = process.env.MONGO_URL

mongoose.connection.openUri(db, (err) => {
  if (err) console.log('Database not connected');
  else console.log('Database connected')
})

const index = require('./routes/index');
const users = require('./routes/users');
const jepret = require('./routes/jepret');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', index);
app.use('/users', users);
app.use('/jepret', jepret)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
