'use strict';

describe('testing app-list', function(){
  beforeEach(() => {
    angular.mock.module('demoApp');
    angular.mock.inject(($compile, $rootScope) => {
      let scope = $rootScope.$new();
      scope.list = {
        _id: '230849',
        name: 'example booger', 
        notes: [],
      }
      let elem =  angular.element('<app-list list="list"><app-list>');
      this.appList = $compile(elem)(scope); 
      scope.$digest();
    });
  });

  it('should log hello', () => {
    //console.log(this.appList);
    let iScope  = this.appList.isolateScope();
    expect(iScope.listCtrl.list.name).toBe('example booger');
    let headding = this.appList.find('h2');
    expect(headding.text().trim()).toBe(iScope.listCtrl.list.name);
  });
});
