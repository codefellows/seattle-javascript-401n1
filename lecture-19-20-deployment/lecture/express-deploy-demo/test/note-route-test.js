'use strict';

// SET ENV VARS AT TOP
process.env.PORT = 5000;
process.env.MONGODB_URI = 'mongodb://localhost/test';
process.env.APP_SECRET = 'neva gunna guess this :o';

// npm modules
const request = require('superagent-use');
const superPromise = require('superagent-promise-plugin');
const expect = require('chai').expect;
require('../server');

// app modules
const Note = require('../model/note');

// module constatns and setup
const baseURL = `localhost:${process.env.PORT}/api`;
request.use(superPromise);

describe('testings notes', function(){
  after((done) => {
    Note.remove({})
    .then(() => done())
    .catch(done);
  });

  it('should return a note', function(done){
    request.post(`${baseURL}/note`)
    .send({content: 'test data'})
    .then( res  => {
      expect(res.body.content).to.equal('test data');
      done();
    })
    .catch(done);
  });


});
