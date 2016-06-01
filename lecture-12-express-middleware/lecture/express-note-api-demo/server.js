'use strict';

// set environment variables
// require node moduels
// require npm modules
const debug = require('debug')('note:server')
const express = require('express');
const morgan = require('morgan');
// require app modules
const noteRouter = require('./route/note-router');
const errorResponse = require('./lib/error-response');
const AppError = require('./lib/app-error');
// setup globals && require moules that are dependent of globals
const port = process.env.PORT || 3000;
const app = express();

// enable middle ware
app.use(morgan('dev'));
app.use(errorResponse);

// define routes
app.use('/api/note', noteRouter);

app.all('*', function(req, res){
  try {
    wat = 1 / 0;
  } catch (err){ 
    res.sendError(err);
  }
});

const server = app.listen(port, function(){
  debug('listen');
  console.log('app up on port', port);
});

server.isRunning = true;
module.exports = server;
