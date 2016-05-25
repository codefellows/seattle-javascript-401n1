'use strict';

// set environment variables
// require node moduels
// require npm modules
const debug = require('debug')('note:server')
const express = require('express');
const bodyParser = require('body-parser');
// require app modules
const noteRouter = require('./route/note-router');
// setup globals && require moules that are dependent of globals
const port = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());

app.use('/api/note', noteRouter);

app.all('*', function(req, res){
  debug('* 404');
  res.status(404).send('not found');
});

const server = app.listen(port, function(){
  debug('listen');
  console.log('app up on port', port);
});

server.isRunning = true;
module.exports = server;
