'use strict';

const events = require('events');
const fs = require('fs');

const Cat = module.exports = function(){
  events.EventEmitter.call(this);

  this.on('readSeq', (filePaths) => {
    if (filePaths.length){
      fs.readFile(filePaths.pop(), (err, data) => {
        if(err) throw err;
        console.log(data.toString());
        this.emit('readSeq', filePaths);
      });
    }
  });
};

Cat.prototype = Object.create(events.EventEmitter.prototype);
