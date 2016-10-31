/*
 * Conditionals 02 & Scope
 * @author Gareth Foote
 */
 
// Global variable
var count = 0;

function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw(){
  
  background(0);
  stroke(255);
  noFill();
  
  // Add some conditions using 'IF', 'ELSE' and 'ELSE IF' to draw 
  // different shapes on screen.
  // if(____)

  // Add some conditions using AND (&&) to fill() the square when
  // the mouse is within it's boundaries on the horizontal axis.
  // if(____)
  
  // Task: Fill the rect only when the mouse is fully within the bounds of the box 
  // Task: Fill the rect when the mouse is fully within the bounds OR when the count has gone over a certain number
  
  dashLog(count)
}

function mousePressed(){
  count++;
}

function dashLog(msg) {
  noStroke();
  // Draw background
  fill(255);
  rect(0, 0, 60, 40);
  // Write message to screen
  fill(0);
  textSize(40);
  text(msg, 7, 32);
}