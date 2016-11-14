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
  pixelDensity(1);
  noLoop();
}

function draw() {

  // tint(255, 0, 255);
  image(img, 0, 0);
  // https://p5js.org/reference/#/p5/filter
  // filter("THRESHOLD");

  // createSmallImage();

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

function createSmallImage() {

  var myPixels = [
    // [0]=0,0        // [1]=0,1        // [2]=0,2        // [3]=0,3
    255, 0, 0, 255,   255, 0, 0, 255,   255, 0, 0, 255,   255, 0, 0, 255,

    // [4]=1,0        // [5]=1,1        // [6]=1,2        // [7]=1,3
    0, 255, 0, 255,   0, 255, 0, 255,   0, 255, 0, 255,   0, 255, 0, 255,

    // [8]=2,0        // [9]=2,1        // [10]=2,2       // [11]=2,3
    0, 0, 255, 255,   0, 0, 255, 255,   0, 0, 255, 255,   0, 0, 255, 255,

    // [12]=3,0       // [13]=3,1       // [14]=3,2       // [15]=3,3
    0, 0, 255, 127,   0, 0, 255, 127,   0, 0, 255, 127,   0, 0, 255, 127,
  ];

  var smallImage = createImage(4, 4);
  smallImage.loadPixels();
  for(var i = 0; i < myPixels.length; i ++){
    smallImage.pixels[i] = myPixels[i];
  }
  smallImage.updatePixels();

  image(smallImage, 0, 0);
}
