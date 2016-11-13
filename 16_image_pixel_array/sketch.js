/*
 * Image pixel array
 * @description Looping through pixels of canvas/image
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
  tint(255, 0, 0);
  image(img, 0, 0);

  // https://p5js.org/reference/#/p5/filter
  // filter("THRESHOLD");

  // loadPixels();
  // for (var i = 0; i < pixels.length; i+=4) {
  //   var r = pixels[i];
  //   var g = pixels[i+1];
  //   var b = pixels[i+2];
  //   var a = pixels[i+3];

  //   pixels[i] = r;
  //   pixels[i+1] = g;
  //   pixels[i+2] = b;
  //   pixels[i+3] = 255;
  // }
  // updatePixels();
}
