/*
 * Conditionals 01 - Bouncing ball, simple conditionals
 * @author Gareth Foote
 */
 
var speed = 3; 
var positionX = 0;

function setup() {
  createCanvas(500, 500);
  stroke(255);
  background(0);
}

function draw(){
  // instead of clear() we use background to reset to black on each draw().
  background(0);
  
  // Draw an ellipse of certain colour
  fill(255, 255, 0);
  ellipse(positionX, height/2, 20);
  
  // Increase position every time draw is called.
  positionX = positionX + speed;
  
  // Add some conditions here to make the ball bounce off the right wall
  // ...

  // Task: Make the ball bounce off both walls
  // Task: Change the colour, size, speed (accelerate!) when it hits a wall
  // Task: Move up and down instead of left and right
  
  // Put a message on screen to show current speed.
  noStroke();
  text("Speed:" + speed, 10, 30);
}
