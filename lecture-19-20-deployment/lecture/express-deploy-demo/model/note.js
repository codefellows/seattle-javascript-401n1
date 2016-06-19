'use stirct';

const Promise = require('bluebird');
const mongoose = require('mongoose');
mongoose.Promise = Promise;

const noteSchema = mongoose.Schema({
  content: {type:String}
});

module.exports = mongoose.model('note', noteSchema);
