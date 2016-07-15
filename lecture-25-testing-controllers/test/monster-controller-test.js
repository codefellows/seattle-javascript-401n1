'use strict';

describe('testing MonsterController', function(){
  beforeEach(() => {
    angular.mock.module('demoApp');
    angular.mock.inject(($controller) => {
      this.crtl = new $controller('MonsterController');
    })
  });

  it('should contain a monster', () => {
    expect(this.crtl.monster.name).toBe('boogybug');
    expect(this.crtl.monster.class).toBe('TypeError');
    expect(this.crtl.monster.hp).toBe(87);
  });

  it('should reduce hp by 7', () => {
    this.crtl.takeDamage(7);
    expect(this.crtl.monster.hp).toBe(80);
  });

});
