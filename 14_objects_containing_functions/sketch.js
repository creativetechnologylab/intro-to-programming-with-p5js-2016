/*
 * Objects
 * @description Looking at functions as variables & objects
 * @author Gareth Foote
 */

 // Bicycle object
var bicycle = {
  colour : "#ff00ff",
  // Here we define the velocity of the bicycle using 2 properties.
  vx : 1,
  vy : 1,
  size : 20,
  x : 0,
  y : 0,
  // drawBicycle : function(){
  //   fill(bicycle.colour);
  //   ellipse(bicycle.x, bicycle.y, bicycle.size, bicycle.size)
  // },
  // updateBicycle : function(){
  //   bicycle.x += bicycle.vx;
  //   bicycle.y += bicycle.vy;
  // }
};

// The two functions are stored in variables
var drawBicycle = function(){
  // Using the properties of the bicycle object to draw on screen
  fill(bicycle.colour);
  ellipse(bicycle.x, bicycle.y, bicycle.size, bicycle.size);
};

var updateBicycle = function(){
  // Manipulating the properties of the bicycle object to change it's position.
  bicycle.x += bicycle.vx;
  bicycle.y += bicycle.vy;
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  drawBicycle();
  updateBicycle();

  // bicycle.drawBicycle();
  // bicycle.updateBicycle();
}
