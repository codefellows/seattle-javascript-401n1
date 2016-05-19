'use strict';


const expect = require('chai').expect;
const Storage = require('../lib/storage');
const testStoreage = new Storage(`${__dirname}/data`);

describe('testing storage module', function(){
  describe('testing setItem', function(){
    it('should return the item', function(done){
      testStoreage.setItem('note', {id: 123456, content: 'test test test'})
      .then(function(item){
        expect(item.id).to.equal(123456);
        expect(item.content).to.equal('test test test');
        done();
      }).catch(function(err){
        console.error(err);
        expect(err).to.equal(undefined); 
        done();
      });
    });
  });
});
