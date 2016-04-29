'use strict';

// require the hello module we wrote
const hello = require(__dirname + '/../lib/hello');

// require nodes built int assert library
const assert = require('assert');

describe('testing hello module', function(){
  describe('testing hello()', function(){
    it('should return "hello world"', function(){
      const result = hello();
      assert.equal(result, 'hello world');
    });
  });
});
