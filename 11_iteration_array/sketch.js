/*
 * Iterating Arrays 
 * @description Looping through data in an array (& using object literals)
 * @author Gareth Foote
 */

// Arrays are lists of values.
var positions = [10, 50, 200, 350, 450];
// In JavaScript you can store different types of data in arrays (strings, integers, more arrays(!))
var labels = [99, "hello", 10.7, [16, 44], 15];
// Objects use curly brackets and contain pairs of key/values
var labelConfig = {
  colour: "#ff00ff",
  font: "Georgia",
  size: 20
};

function setup() {
  createCanvas(500, 500);
  
  println(labels[0]); // prints 99
  println(labels[1]); // prints "hello"
  println(labelConfig.font); // prints "Georgia"
}

function draw() {
  background(102);
  
  noStroke();
  fill(255);
  
  for(var i = 0; i <= positions.length; i++){
    ellipse(width/2, height/2, 20);
  }
  
  // Task: Label the ellipses with the data from the labels array
  // Task: Use the labelConfig option to set the appearance of the labels
}
