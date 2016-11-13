/*
 * Loading images
 * @description Loading images, cropping and resizing
 * @author Gareth Foote
 */

var img1;
var img2;
var img3;
var img4;

function setup() {
  createCanvas(500, 500);
  img1 = loadImage("images/trump.jpg");
}

function draw() {
  clear();
  // Top left.
  if(mouseX < width/2 && mouseY < height/2){
    tint(255, 127);
  } else {
    tint(255);
  }
  image(img1, 0, 0, width/2, height/2);

  // Transparent fill for the rectangle.
  fill(0, 0);
  strokeWeight(2);
  rect(0, 0, width/2, height/2);

  // Task: Top right.
  // Task: Bottom left.
  // Task: Bottom right.
}
