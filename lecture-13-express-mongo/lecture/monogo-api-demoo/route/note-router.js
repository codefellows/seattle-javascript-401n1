'use strict';

const Router = require('express').Router;
const jsonParser = require('body-parser').json();
const noteCrud = require('../lib/note-crud');

const noteRouter = module.exports = new Router();

noteRouter.post('/note', jsonParser, function(req, res){
  noteCrud.createNote(req.body)
  .then( note => res.send(note))
  .catch( err => res.sendError(err))
});

