'use strict';

const Note = require('../model/note');
const AppErr = require('../lib/app-error');
const debug = require('debug')('rito:note-crud');

exports.createNote = function(reqBody){
  return new Promise((resolve, reject) => {
    if (! reqBody.content)
      return reject(AppErr.error400('note require\'s content'));
    if(! reqBody.name)
      return reject(AppErr.error400('note require\'s name'));

    reqBody.timestamp = new Date();
    const note = new Note(reqBody);
    note.save()
    .then(resolve)
    .catch(reject);
  });
};

exports.fetchNote = function(id){
  return new Promise((resolve, reject) => {
    debugger;
    Note.findOne({_id: id})
    .then(resolve)
    .catch(err => reject(AppErr.error404(err.message)));
  });
};

exports.removeAllNotes = function(){
  return Note.remove({});
};
