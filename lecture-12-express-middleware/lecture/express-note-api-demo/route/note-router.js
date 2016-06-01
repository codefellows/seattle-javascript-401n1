'use strict';

const Router = require('express').Router;
const noteRouter = module.exports =  new Router();
const debug = require('debug')('note:note-router')
const AppError = require('../lib/app-error');
const storage = require('../lib/storage');
const Note = require('../model/note');
const jsonParser = require('body-parser').json();

function createNote(reqBody){
  debug('createNote');
  return new Promise(function(resolve, reject){
    debugger;
    var note;
    try {
      note = new Note(reqBody.content);
    } catch (err) {
      reject(err);
    }
    storage.setItem('note', note).then(function(note){
      resolve(note);
    }).catch(function(err){
      reject(err)
    });
  });
}

noteRouter.post('/', jsonParser, function(req, res){
  debug('hit endpoint /api/note POST');
  createNote(req.body).then(function(note){
    res.status(200).json(note);
  }).catch(function(err){
    res.sendError(err);
  });
});

noteRouter.get('/:id', function(req, res){
  debug('GET /api/note/:id');
  storage.fetchItem('note', req.params.id).then(function(note){
    res.status(200).json(note);
  }).catch(function(err){
    res.sendError(err);
  });
});
