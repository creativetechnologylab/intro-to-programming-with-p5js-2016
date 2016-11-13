/*
 * Capture
 * @description Using the webcam to capture images.
 * @author Gareth Foote
 */

var capture;
var count = 1;

var cameraResolution = 4/3;
var h = 300;
var camWidth = h*cameraResolution;

function setup() {
  createCanvas(camWidth, h);

  // Create video capture object.
  capture = createCapture(VIDEO);
  capture.size(camWidth, height);
  capture.hide();
  pixelDensity(1);
}

function draw() {
  clear();
  // Unfiltered image.
  image(capture, 0, 0, width, height);
}

function keyPressed(){
  if (keyCode == RETURN) {
    saveCanvasArea(0, 0, width, height, "image"+count);
    count++;
  }
}

function saveCanvasArea(sx, sy, swidth, sheight, filename){
  loadPixels();
  // Make a copy of the whole canvas in an image object/canvas.
  var canvasImg = createImage(width, height);
  canvasImg.loadPixels();
  for (i = 0; i < pixels.length; i++) {
    canvasImg.pixels[i] = pixels[i];
  }
  canvasImg.updatePixels();

  // Copy the specified area of the snapshot and save the image.
  var snapshot = createImage(swidth, sheight);
  snapshot.copy(canvasImg, sx, sy, swidth, sheight, 0, 0, swidth, sheight);
  snapshot.save(str(filename) || "snapshot", "jpg");
}
