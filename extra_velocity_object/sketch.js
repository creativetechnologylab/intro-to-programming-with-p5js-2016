// var x = 0;
// var y = 0;
//
// var vx = 1;
// var vy = 1;

// var ax = 0.05;
// var ay = 0.05;

var mySpeeders = [];

function setup() {
  createCanvas(500, 500);

  for(var i = 0; i < 100; i++){
    var randx = random(width);
    var randy = random(height);
    var randvx = random(-2, 2);
    var randvy = random(-2, 2);
    var randax = random(-0.05, 0.05);
    var randay = random(-0.05, 0.05);
    mySpeeders.push(new Speeder(randx, randy, randvx, randvy, randax, randay));
  }
}

function draw() {
  background(0);
  for(var i = 0; i < mySpeeders.length; i++){
    mySpeeders[i].update();
    mySpeeders[i].draw();
  }
}

function Speeder(x, y, vx, vy, ax, ay) {

  this.draw = function(){
    rect(x, y, 10, 10);
  }

  this.update = function() {
    vy += ay;
    vx += ax;

    x += vy;
    y += vx

    if(x < 0 || y < 0 || x > width || y > height){
      vy *= -1;
      vx *= -1;

      ax *= -1;
      ay *= -1;
    }
  }

}
