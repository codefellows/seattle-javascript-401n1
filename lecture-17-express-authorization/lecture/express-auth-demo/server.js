'use strict';

// npm moduels
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const httpErrors = require('http-errors');
const debug = require('debug')('authdemo:server');

// app modules
const handleError = require('./lib/handle-error');
const parserBearerAuth = require('./lib/parse-bearer-auth');
const authRouter = require('./route/auth-router');
const snackRouter = require('./route/snack-router');

// constant module variables
const app = express();
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/authdemodev';

// setup mongo
mongoose.connect(mongoURI);

// setup middleware
app.use(morgan('dev'));

// setup routes
app.all('/', parserBearerAuth, function(req, res){
  console.log('req.userId', req.userId);
  res.send('booya');
});

app.use('/api', authRouter);
app.use('/api', snackRouter);

app.all('*', function(req, res, next){
  debug('404 * route');
  next(httpErrors(404, 'no such route'));
});

app.use(handleError);

// start server
const server = app.listen(port, function(){
  debug('server up #%booya%###', port); 
});

server.isRunning = true;
module.exports = server;
