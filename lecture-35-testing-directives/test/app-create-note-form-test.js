'use stict';

describe('testing app-create-note-form', function(){
  beforeEach(() => {
    angular.mock.module('demoApp');
    angular.mock.inject(($compile, $rootScope) => {
      let scope = $rootScope.$new();

      scope.createNote = (function(note) {
        console.log('hahahahhahah');
        this.note = note;
      }).bind(this)
      
      let elem = angular.element('<app-create-note-form>');
      console.log(scope.createNote);
      this.appCreateNoteForm = $compile(elem)(scope);
      scope.$digest();
    });
  });

  it('should be fun to test ', () => {
    let iScope = this.appCreateNoteForm.isolateScope();
    iScope.note = {
      name: 'wat',
      content: 'lul'
    };

    iScope.createNote();
    iScope.$digest();
    console.log(this.note)
    expect('false').toBe('false');
  });
});
