/*
 * Loading images
 * @description Loading images, cropping and resizing
 * @author Gareth Foote
 */

 var capture;


function setup() {
  var cameraResolution = 1.6;
  var h = 500;
  createCanvas(h*1.6, h);
  capture = createCapture(VIDEO);
  capture.size(width, height);
  capture.hide();
}

function draw() {
  background(255);
  println(capture);
  image(capture, 0, 0, width, height);
}
