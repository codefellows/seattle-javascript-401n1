'use stirct';

const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
  name: { type: String, required: true},
  timestamp: {type: Date, required: true},
  content: {type: String, required: true}
});

module.exports = mongoose.model('note', noteSchema); 
