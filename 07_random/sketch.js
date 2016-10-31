/*
 * Random - Also covering declaring, assigning & using variables in different places
 * @author Gareth Foote
 */

// Declare our intent to use theses variables.
var positionX;
var positionY;

function setup() {
  createCanvas(500, 500);
  // Assign a value to the variables 
  positionX = width/2;
  positionY = height/2;
}

function draw() {
  background(0, 25);
  
  // Use the value within the variables.
  ellipse(positionX, positionY, 10, 10);
  
  // Task: Change the position variables using a random() number
  // positionX = positionX + 2;
  
  // Task: Change another feature of the shape with random
  // Task: Create twinkling star night scene
}