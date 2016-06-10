'use strict';

const mongoose = require('mongoose');
const debug = require('debug')('authdemo:snack');

const snackSchema = mongoose.Schema({
  name: {type: String, required: true, unique: true}
  , ingredients: {type: Array, required: true}
  , userId: {type: mongoose.Schema.ObjectId, required: true}
});

const Snack = module.exports =  mongoose.model('snack', snackSchema);

Snack.schema.path('ingredients').validate(function(value){
  if (value.length < 1 ) return false;
  if (value.length > 5 ) return false;
  return true;
});
