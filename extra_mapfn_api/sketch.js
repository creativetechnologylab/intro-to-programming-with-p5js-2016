/*
 * Extra - Using a map function to change the range of values obtained from an API
 * @author Gareth Foote
 */

var daylight;

function setup() {
  createCanvas(500, 500);
  background(0);
  // Set a repeating interval. Calls getLightReading function every 100ms
  setInterval(getLightReading, 1000);
}

function draw() {
  var colour = int(map(daylight, 200, 700, 0, 255));
  background(colour, 20);
}

function getLightReading(){
  // We visit the URL of the API that has the data we need. Using a callback function to handle the result 
  var apiUrl = 'https://us.wio.seeed.io/v1/node/GenericAInA0/analog?access_token=56aeab55f12fabf9d45007edc66f775b';
  loadJSON(apiUrl, handleLightReading);
}

function handleLightReading(data){
  daylight = data.analog;
}
