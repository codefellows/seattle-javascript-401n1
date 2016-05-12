
function User (name ){
  this.name = name;
  this.human = true;
}

User.prototype.sayHello = function(){
  console.log('hello, im', this.name);
};

function SuperUser(name, power){
  User.call(this, name);
  this.power = power;
}

SuperUser.prototype = Object.create(User.prototype);


var slug = new User('slug');
slug.sayHello();

var superSlug = new SuperUser('neo', 'fly');
console.log('superSlug', superSlug);
superSlug.sayHello();

function sayGoodbye(){
  console.log('goodbye, im', this.name);
}

sayGoodbye.call(slug);
