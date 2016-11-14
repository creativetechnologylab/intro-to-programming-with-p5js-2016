/*
 * Loading images
 * @description Loading images, cropping and resizing
 * @author Gareth Foote
 */

var img1;
var img2;
var img3;
var img4;

function preload(){
  img1 = loadImage("images/trump.jpg");
  img2 = loadImage("images/clinton.jpg");
  img3 = loadImage("images/farage.jpg");
  img4 = loadImage("images/corbyn.jpg");
}

function setup() {
  createCanvas(500, 500);
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

/*
  // Top right.
  if(mouseX < width/2 && mouseY < height/2){
    tint(255, 90);
  } else {
    noTint();
  }
  image(img1, 0, 0, width/2, height/2);

  // Top left
  if(mouseX > width/2 && mouseY < height/2){
    tint(255, 90);
  } else {
    noTint();
  }
  image(img2, width/2, 0, width/2, height/2);

  // Bottom left
  if(mouseX < width/2 && mouseY > height/2){
    tint(255, 90);
  } else {
    noTint();
  }
  image(img3, 0, height/2, width/2, height/2);

  // Bottom right
  if(mouseX > width/2 && mouseY > height/2){
    tint(255, 90);
  } else {
    noTint();
  }
  image(img4, width/2, height/2, width/2, height/2);
*/
}
