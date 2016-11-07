/*
 * Loading JSON example
 * @description Loading JSON from an extrenal 3rd party source (Icelandic earthquake API) 
 * @author Gareth Foote
 */

function setup() {
  createCanvas(500, 500);  
  loadJSON('http://apis.is/earthquake/is', drawQuakes);
}

function draw() {
  // Do nothing here. 
}

function drawQuakes(data){
  background(0);
  noStroke();

  // Inpsect the JSON in the developer console.
  println(data); 
  // Loop through the 'results' property of the data object.
  for(var i = 0; i < data.results.length; i++){
    var depth = data.results[i].depth;
    var size = data.results[i].size;
  
    var fillAlpha = map(depth, 0, 5, 0, 100);
    var size = map(size, 0, 5, 20, 100);
    
    fill(255, 133, 71, fillAlpha); // A nice orange with varying alpha channel
    ellipse(random(width), random(height), size);
  }
  
}