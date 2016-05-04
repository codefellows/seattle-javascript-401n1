'use strict';

function User(){
  // add a property to the User Constuctor
  this.name = 'ada';
}

// add a method to the User Constructor
User.prototype.sayHello = function(){
  console.log('hello from', this.name);
};

function Admin(){
  // inherit the properys from the User Constuctor
  User.call(this);

  // add property to the Admin Constuctor
  this.accessWrites = 'all of everything';
}

// inherit the prototype (methods) from the user Constuctor
Admin.prototype = Object.create(User.prototype);

// create an admin
var ada = new Admin();
console.log('ada: ', ada);
// run the admins method say Hello from that was inherited from
// the User object Constructor's prototype
ada.sayHello();

