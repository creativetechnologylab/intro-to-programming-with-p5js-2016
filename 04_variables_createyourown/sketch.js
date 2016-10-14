/*
 * Variables (create your own)
 * @author Gareth Foote
 */
 
var positionX = 0;

function setup() {
  createCanvas(500, 500);
  stroke(255);
  background(0);
}

function draw(){
  // instead of clear() we use background to reset to black on each draw().
  // background(0);
  
  // Draw a line that reaches from the left of the screen to {positionX}
  line(0, height/2, positionX, height/2);
  
  // Increase position every time draw is called.
  positionX = positionX + 1;
  
  // if(positionX > width){
  //   ????
  // }
  
}