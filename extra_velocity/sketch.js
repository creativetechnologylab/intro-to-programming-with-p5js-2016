var x = 0;
var y = 0;

// Velocity
var vx = 5;
var vy = 5;

//Acceleration
var ax = 0.2;
var ay = 0.2;

var rSize = 15; // Cannot use 'size' as var.
var r = 255;
var g = 100;
var b = 55;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  fill(r, g, b);
  rect(x, y, rSize, rSize);

  // Add acceleration to velocity.
  vy += ay;
  vx += ax;

  // Add velocity to position.
  x += vy;
  y += vx

  if(x < 0 || y < 0 || x > width || y > height){
    vy *= -1;
    vx *= -1;
  }
}
