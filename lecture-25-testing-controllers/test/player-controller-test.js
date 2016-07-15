'use strict';

describe('testing playercontroller', function(){
  beforeEach( () => {
    angular.mock.module('demoApp');
    angular.mock.inject(($controller, $rootScope) => {
      this.scope = $rootScope.$new();
      new $controller('PlayerController', {$scope: this.scope})
    })
  });

  it('should have a player',() => {
    expect(this.scope.player.name).toBe('nena');
    expect(this.scope.player.class).toBe('mom');
  })
  
  it('should update the player class',() => {
    this.scope.updateClass('lulwat');
    expect(this.scope.player.name).toBe('nena');
    expect(this.scope.player.class).toBe('lulwat');
  })
});
