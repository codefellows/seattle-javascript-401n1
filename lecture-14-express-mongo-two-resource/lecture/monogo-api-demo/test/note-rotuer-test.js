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
const taskCrud = require('../lib/task-crud');
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
      .then(() => done())
      .catch(done)
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

  describe('GET /api/note/:id with valid id', function(){
    before((done) => {
      noteCrud.createNote({name: 'booya', content: 'test test 123'})
      .then(note => {
        this.tempNote = note;
        done();
      })
      .catch(done);
    });

    after((done) => {
      noteCrud.removeAllNotes()
      .then(() => done())
      .catch(done)
    });

    it('should return a note', (done) => {
      request.get(`${baseUrl}/api/note/${this.tempNote._id}`)
      .then((res) => {
        expect(res.status).to.equal(200);
        expect(res.body.name).to.equal(this.tempNote.name);
        done();
      })
      .catch(done);
    });
  });

  describe('GET /api/note/:id/tasks with valid id', function(){
    before((done) => {
      noteCrud.createNote({name: 'booya', content: 'test test 123'})
      .then(note => {
        this.tempNote = note;
        return Promise.all([
          taskCrud.createTask({noteId: note._id, desc: 'test one'}),
          taskCrud.createTask({noteId: note._id, desc: 'test two'}),
          taskCrud.createTask({noteId: note._id, desc: 'test three'})
        ]);
      })
      .then( tasks => {
        this.tempTasks = tasks;
        done();
      })
      .catch(done);
    });

    after((done) => {
      Promise.all([
        noteCrud.removeAllNotes(),
        taskCrud.removeAllTasks()
      ])
      .then(() => done())
      .catch(done)
    });

    it('should return an array of three tasks', (done) => {
      request.get(`${baseUrl}/api/note/${this.tempNote._id}/tasks`)
      .then((res) => {
        console.log('tasks:\n', res.body);
        expect(res.status).to.equal(200);
        expect(res.body.length).to.equal(3);
        expect(res.body[0].slug).to.equal('hello');

        done();
      })
      .catch(done);
    });
  });
});
