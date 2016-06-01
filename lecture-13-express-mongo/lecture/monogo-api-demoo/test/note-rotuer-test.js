'use strict';
// overwrite the process.env.MONGO_URI
process.env.MONGO_URI = 'mongodb://localhost/test';

const expect = require('chai').expect;
const request = require('superagent-use');
const superPromise = require('superagent-promise-plugin');
const port = process.env.PORT || 3000;
const baseUrl = `http://localhost:${port}`;
const server = require('../server');
const noteCrud = require('../lib/note-crud');
request.use(superPromise);

describe('testing module note-router', function(){
  before((done) => {
    if (!server.isRunning){
      server.listen(port , () => {
        server.isRunning = true;
        console.log('server up ::', port);
        done();
      });
      return;
    }
    done()
  });

  after((done) => {
    if (server.isRunning){
      server.close(() => {
        server.isRunning = false;
        console.log('server down');
        done();
      });
      return;
    }
    done()
  });

  describe('POST /api/note with valid data', function(){
    after((done) => {
      noteCrud.removeAllNotes()
      .then( ()  => done()).catch(done)
    });

    it('should return a note', function(done){
      request.post(`${baseUrl}/api/note`)
      .send({name: 'test note', content: 'test data'})
      .then((res) => {
        expect(res.status).to.equal(200);
        expect(res.body.name).to.equal('test note');
        done();
      }).catch(done);
    });
  });
});
