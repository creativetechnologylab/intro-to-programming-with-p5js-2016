/*
 * Functions & state - How do we create/use a function?
 * @author Gareth Foote
 */

var bgCol = 0;

var isFlashing = false;

function setup() {
  createCanvas(500, 500);
  
  var answer = doMultiplication(10, 4);
  println(answer);
}

function draw() {
  background(bgCol);
  
  fill(0, 0, 255);
  stroke(0, 255, 0);
  
  // drawSunshine(250, 250, 10, 50, 20);
  // drawSunshine(100, 100, 10);
  
  drawFace(50, 0, 20, 10);
  // drawFace(200, 400, 10, 5);
  
  if(isFlashing == true){
    bgCol = color(random(0,255), random(0,255), random(0,255));  
  }
}

function doMultiplication(value, multiplier){
  var result = value * multiplier;
  return result;
}

// Called from outside of our sketch by the p5.js library.
function mousePressed(){
  // Within this function we affect a global variable, which is then used inside draw()
  isFlashing = !isFlashing; // Using the '!' on a boolean inverts it. 
}

function drawFace(posX, posY, eyesOffset, noseHeight){
  ellipse(posX+30-eyesOffset, posY+30, 20, 10);
  ellipse(posX+70+eyesOffset, posY+30, 20, 10);
  triangle(posX+50, posY+50+noseHeight, posX+60, posY+60+noseHeight, posX+40, posY+60+noseHeight);
}

function drawSunshine(posX, posY, numRays, radius, rayLength){
  push();
  translate(posX, posY);
  var numRays = numRays;
  var r = radius || 30;
  var rl = rayLength || 50;

  for(var i = 0; i < numRays; i++){
    var angle = (360/numRays)*i;
    // Convert polar to cartesian coordinates.
    var x1 = r * cos(radians(angle));
    var y1 = r * sin(radians(angle));
    var x2 = (r+rl) * cos(radians(angle));
    var y2 = (r+rl) * sin(radians(angle));
    line(x1, y1, x2, y2);
  }
  pop();
}