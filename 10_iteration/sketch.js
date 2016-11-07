/*
 * Iteration - Using the "for" structure to construct repetitive forms.
 * @author Gareth Foote
 */

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(102);
  
  noStroke();
  fill(255);
  
  var xPos = 0;
  for(var i = 0; i < 10; i++){
    text(i, xPos+10 , 10);
    rect(xPos, 0, 10, height);
    xPos += 30;
  }
  
  // Task: Use the `i` variable to set the xPos on each iteration
  // Task: Spread the rectangles evenly across the width
  // Task: Change the colour of each rectangle proportionately to the `i` variable
  
}
