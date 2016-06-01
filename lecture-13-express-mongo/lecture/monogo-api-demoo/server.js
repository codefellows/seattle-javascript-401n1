'use strict';

// npm modules
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('rito:server');
const mongoose = require('mongoose');

// app modules
const errorResponse = require('./lib/error-response');
const noteRouter = require('./route/note-router');

// globals
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost/rito';
const app = express();

// connect to database
mongoose.connect(mongoURI);

// middle ware
app.use(morgan('dev'));
app.use(errorResponse);

// routes
app.use('/api', noteRouter);
app.all('*', function(req, res){
  debug('404 *');
  res.status(404).send('not found');
});

// start server
const server = app.listen(port, function(){
  console.log('server up :)<-< ' + port);
});

// exprort server
server.isRunning = true;
module.exports = server;

