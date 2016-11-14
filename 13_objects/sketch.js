/*
 * Objects
 * @description Looking at JavaScript objects
 * @author Gareth Foote
 */

var x = 0;
var y = 0;

var radius = 25;
var r = 0;
var g = 100;
var b = 55;
var speed = 2;

var circle = {};

function setup() {
  createCanvas(500, 500);
  y = height/2;
}

function draw() {
  background(0);

  fill(r, g, b);
  ellipse(x, y, radius);

  x += 1;
}
