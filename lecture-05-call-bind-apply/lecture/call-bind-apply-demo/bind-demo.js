var slug = {name: 'slug'};
var teapot = {name: 'teapot'};

function sayHello(){
  console.log('name', this.name);
}

var slugHello = sayHello.bind(slug); 
var teapotHello = sayHello.bind(teapot); 

slugHello();
teapotHello();
