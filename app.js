var express = require('express');
var path = require('path');
var ECT = require('ect');
var ectRenderer = ECT({ watch: true, root: __dirname + '/views', ext : '.ect' });
var routes = require('./routes/index');
var stress = require('./routes/stress');

var app = express();

app.set('view engine', 'ect');
app.engine('ect', ectRenderer.render);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);
app.use('/stress', stress);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});

module.exports = app;
