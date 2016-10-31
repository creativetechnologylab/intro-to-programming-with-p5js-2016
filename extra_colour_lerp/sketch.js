/*
 * @name Lerp Color
 * @description Lerp color from red to blue.
 */
 
function setup() {
  createCanvas(500, 500);
}

function draw() {
  var pos = map(mouseX, 0, width, 0, 1);
  var from = color(255, 0, 0);
  var to = color(0, 0, 255);
  var c1 = lerpColor(from, to, pos);
  background(c1);
}