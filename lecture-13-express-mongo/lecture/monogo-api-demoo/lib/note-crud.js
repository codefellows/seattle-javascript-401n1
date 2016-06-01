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

exports.removeAllNotes = function(){
  return Note.remove({});
};
