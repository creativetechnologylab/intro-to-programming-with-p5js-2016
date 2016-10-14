/*
 * Variables (built in)
 * @author Gareth Foote
 */
function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw() {
  // Calculate mouse position as a proportion of width/height
  var positionX = mouseX/width;
  var positionY = mouseY/height;
  // Log...
  // console.log();
  
  // Make sure the first two params of ellipse() are the top left corner. 
  ellipseMode(CORNER);
  // Make the size of the ellipse follow position of mouse.
  ellipse(0, 0, width*positionX, height*positionY);
}