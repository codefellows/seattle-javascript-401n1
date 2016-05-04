'use strict';

const expect = require('chai').expect;
const fs = require('fs');

describe('testing fs module', function(){
  describe('testing fs.readFile', function(){
    // call fs insde the it black and run expact statements inside its callback
    // affter running the test call the it blocks "done" call back so mocha will
    // run the next test
    it('should pass back an error', function(done){
      fs.readFile('', function(err, data){
        expect(!!err).to.be.equal(true);
        expect(data).to.be.equal(undefined);
        done();
      });
    });

    it('should pass back a buffer with "porkchop.local"', function(done){
      fs.readFile(__dirname + '/../data/host.txt', function(err, data){
        expect(err).to.equal(null);
        expect(data.toString()).to.equal('porkchop.local');
        done();
      });
    });
  });
});
