'use strict';

// npm moduels
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const httpErrors = require('http-errors');
const debug = require('debug')('authdemo:server');

// app modules
const handleError = require('./lib/handle-error');
const authRouter = require('./route/auth-router');

// constant variables
const app = express();
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost/authdemodev';

// setup mongo
mongoose.connect(mongoURI);

// setup middleware
app.use(morgan('dev'));

// setup routes
app.use('/api', authRouter);

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
