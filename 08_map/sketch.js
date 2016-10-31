/*
 * Map - Using a map function
 * @author Gareth Foote
 */

function setup() {
  createCanvas(640, 200);
  background(0);
  // Change the colorMode to HSB to make it easier to 
  // transition the saturation & brightness of a colour.
  // colorMode(HSB, 360, 100, 100);
}

function draw() {
  noStroke();
  
  // Colour the sky.
  var bgBrightness = 0;
  // var bgBrightness = map(_____);
  // HSB tuple for blue: 216, 100, 0-100;
  background(0);
  
  // Draw the sun
  var sunX = width/2;
  var sunY = 0;
  fill("#FFFF00");
  ellipse(sunX, sunY, 100, 100);
  
  // Draw a grassy hill
  fill("#2ECC40");
  ellipse(width/2, height, width, 100);
  
  // Task: Make the sun rise with a mouse interaction.
}