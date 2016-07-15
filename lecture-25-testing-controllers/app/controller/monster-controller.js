'use strict';

const angular = require('angular');

angular.module('demoApp').controller('MonsterController', [MonsterController]);

function MonsterController(){
  this.monster = {
    name: 'boogybug',
    hp: 87,
    damage: 11,
    class: 'TypeError'
  };
}

MonsterController.prototype.takeDamage = function(num){
  this.monster.hp -= num;
};
