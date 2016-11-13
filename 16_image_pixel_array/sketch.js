/*
 * Image pixel array
 * @description Manipulating images. Looping through and modifying pixels of image
 * @author Gareth Foote
 */

var img;

function preload() {
  img = loadImage("maxernst.jpg");
}

function setup() {
  createCanvas(800, 619);
  noLoop();
}

function draw() {
  tint(255, 0, 255);
  image(img, 0, 0);

  // https://p5js.org/reference/#/p5/filter
  // filter("THRESHOLD");

  // img.loadPixels();
  // for (var i = 0; i < img.pixels.length; i+=4) {
  //   // Read the r,g,b & alpha values for each pixel.
  //   var r = img.pixels[i];
  //   var g = img.pixels[i+1];
  //   var b = img.pixels[i+2];
  //   var a = img.pixels[i+3];
  //   // Modify the r,g,b & alpha values for each pixel.
  //   img.pixels[i] = r;
  //   img.pixels[i+1] = 0;
  //   img.pixels[i+2] = 0;
  //   img.pixels[i+3] = 255;
  // }
  // img.updatePixels();
  // // Rendering it back onto the canvas.
  // image(img, 0, 0);
}
