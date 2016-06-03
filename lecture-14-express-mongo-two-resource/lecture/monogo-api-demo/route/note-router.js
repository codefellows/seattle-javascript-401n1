'use strict';

const Router = require('express').Router;
const jsonParser = require('body-parser').json();
const noteCrud = require('../lib/note-crud');
const taskCrud = require('../lib/task-crud');

const noteRouter = module.exports = new Router();

noteRouter.post('/note', jsonParser, function(req, res){
  noteCrud.createNote(req.body)
  .then( note => res.send(note))
  .catch( err => res.sendError(err))
});

noteRouter.get('/note/:id', function(req, res){
  noteCrud.fetchNote(req.params.id)
  .then(note => res.send(note))
  .catch(err => res.sendError(err));
});

noteRouter.get('/note/:id/tasks', function(req, res){
  taskCrud.fetchTaskByNoteId(req.params.id)
  .then(tasks => res.send(tasks))
  .catch(err => res.sendError(err));
});
