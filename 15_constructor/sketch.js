/*
 * Constructor functions
 * @description Looking at constructors & the 'new' operator
 * @author Gareth Foote
 */

 // Bicycle object
var b1;
var bicycles = [];

function setup() {
  createCanvas(500, 500);

  // Create a bicycle using a constructor and the 'new' keyword
  b1 = new Bicycle(0, 0, 1, 1, 10, "#000fff");
  console.log(b1);

  // Create 10 bicycles with random properties.
  for(var i = 0; i < 10; i++){
    var randx = random(width);
    var randy = random(height);
    var randvx = random(-2, 2);
    var randvy = random(-2, 2);
    bicycles.push(new Bicycle(randx, randy, randvx, randvy, 10, "#000fff"));
  }
}

function draw() {
  background(0);

  b1.drawBicycle();
  b1.updateBicycle();

  for(var i = 0; i < bicycles.length; i++){
    bicycles[i].drawBicycle();
    bicycles[i].updateBicycle();
  }
}

// A constructor function
// By giving the function name a capital letter we are implying this is a consctructor function.
function Bicycle(x, y, vx, vy, size, colour){
  // These are functions....within functions(!)
  this.drawBicycle = function(){
    fill(colour);
    ellipse(x, y, size, size);
  };

  // The 'this' keyword makes this function available to call from outside the Bicycle constructor.
  this.updateBicycle = function(){
    x += vx;
    y += vy;
  }
}
