/*
 * Loading Images from API
 * @description Loading JSON from an extrenal 3rd party source (Icelandic earthquake API)
 * @author Gareth Foote
 */

var API_KEY = "API_KEY";

function setup() {
  createCanvas(500, 500);
  searchImages("feet", drawImages);
}

function searchImages(q, callback) {
  loadJSON('https://pixabay.com/api/?key=' + API_KEY + '&q='+ q +'&image_type=photo', callback);
}

function drawImages(data) {
  for(var i = 0; i < data.hits.length; i++){
      console.log(data.hits[i].previewURL);
  }
}
