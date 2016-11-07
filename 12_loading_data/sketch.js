/*
 * Loading Data 
 * @description Using data from a JS object and loading from a JSON file
 * @author Gareth Foote
 */

// An array of objects.
var staff = [
  { name: "Eva", heightCms: 168, shoeSize: 6, id: 8882191, favCol: "#120F73" },
  { name: "Nicolas", heightCms: 181, shoeSize: 9, id: 213409234, favCol: "#0F4F23" },
  { name: "Gareth", heightCms: 173, shoeSize: 4, id: 23974234, favCol: "#FFFF00" },
  { name: "Tom", heightCms: 177, shoeSize: 8, id: 124752, favCol: "#E102F2" },
  { name: "Ben", heightCms: 158, shoeSize: 10, id: 92342, favCol: "#02F2E1" },
  // Task: Add another member of staff to the team & add this data to the staff.json file.
];

function setup() {
  createCanvas(500, 500);
  
  println(staff[0].id); 
  println(staff[0].name);
  
  var lastIndex = staff.length-1;
  println(staff[lastIndex].id); 
  println(staff[lastIndex].name);
}

function draw() {
  background(102);
  noStroke();
  fill(255);
  
  for(var i = 0; i < staff.length; i++){
    // Space between each shape on X axis. Plus 1 to move away from edge.
    var xSpacing = width/(staff.length+1);
    var posX = xSpacing*i+xSpacing;
    var posY = map(staff[i].heightCms, 130, 200, height, 0);
    
    var size = 20;
    
    ellipse(posX, posY, size);
  }
  
  // Task: Change the size of shape based on data provided
  // Task: Change the colour of shape based on data provided
}