'use strict';

// npm modules
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const jsonParser = require('body-parser').json();

// app modules
const Note = require('./model/note');

// modules constants
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/deploy';
const app = express();

if (!process.env.APP_SECRET){
  throw new Error('no app secret :(');
}

// setup mongo
mongoose.connect(mongoURI);

app.use(morgan('dev'));

// setup routes
app.post('/api/note', jsonParser, function(req, res, next){
  console.log('req.body', req.body);
  new Note(req.body).save()
  .then( note => res.send(note))
  .catch(next);
});

app.get('/api/note/:id', function(req, res, next){
  Note.findOne({_id: req.params.id})
  .then( note => res.send(note))
  .catch(next);
});

// error middle ware
app.use(function(err, req, res, next){
  console.error(err);
  res.send('you did something wrong');
  next();
});

app.listen(port, function(){
  console.log('server up', port);
});
