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
  img2 = loadImage("images/clinton.jpg");
  img3 = loadImage("images/farage.jpg");
  img4 = loadImage("images/corbyn.jpg");
  frameRate(2);
}

function draw() {
  clear();

  // '%' = Modulus
  if(frameCount%4 == 0){ // Divisible by 4 exactly
    image(img1, 0, 0, width/2, height/2);
  } else if(frameCount%4 == 1){ // Divisible by 4 with remainder 1
    image(img2, 0, 0, width/2, height/2);
  } else if(frameCount%4 == 2){ // Divisible by 4 with remainder 2
    image(img3, 0, 0, width/2, height/2);
  } else if(frameCount%4 == 3){ // Divisible by 4 with remainder 3
    image(img4, 0, 0, width/2, height/2);
  }

  // Transparent fill for the rectangle.
  fill(0, 0);
  strokeWeight(2);
  rect(0, 0, width/2, height/2);
}
