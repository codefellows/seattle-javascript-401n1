'use strict';

describe('testing ListController', function(){
  beforeEach(() => {
    angular.mock.module('demoApp');
    angular.mock.inject(($controller, $httpBackend) => {
      this.$httpBackend = $httpBackend;
      this.listCtrl = new $controller('ListController');
    });
  });

  it('sould get listCtrl', () => {
    expect(typeof this.listCtrl).toBe('object');
    expect(typeof this.listCtrl.createNote).toBe('function');
  });


  describe('testing listCtrl.createNote', () => {
    let baseUrl = 'http://localhost:3000/api';

    let headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    beforeEach(() => {
      this.listCtrl.list = {name: 'example', notes: []};
      this.$httpBackend.expectPOST(`${baseUrl}/note`, {name: 'wat', content: 'double pow'}, headers)
      .respond(200, {name: 'wat', content: 'double pow', _id: '2131223', _v: 0});
    });

    it('should return a note', () => {
      this.listCtrl.createNote({name: 'wat', content: 'double pow'})
      .then (note => {
        console.log(note);
        expect(note.name).toBe('wat');
      }).catch(err => {
      });;
      this.$httpBackend.flush();
    });

  });
});
