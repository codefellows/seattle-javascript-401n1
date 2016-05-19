'use strict';

const uuid = require('node-uuid');

module.exports = function Note(content){
  this.id = uuid.v1();
  this.content = content;
  this.timestamp = new Date();
};
