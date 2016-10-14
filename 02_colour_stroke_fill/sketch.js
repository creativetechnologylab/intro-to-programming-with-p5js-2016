/*
 * Colour, Stroke & Fill
 * @author Gareth Foote
 */
function setup() {
  createCanvas(500, 500);
  background(200);
}

function draw() {
  
  strokeWeight(4);
  stroke(0);
  fill(225);
  
  // Rectangle
  rect(50, 50, 100,100);
  
  stroke(255);
  fill(0);
  
  // Ellipse 1
  ellipse(50, 50, 100);

  // Ellipse 2
  ellipse(450, 450, 100);

  // Triangle
  // Line
  // Arc
  // Quad
  // noStroke();
  
}