//Variables
function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255, 255, 255);
  noLoop();
}

const size = 15;
const gap = 20;
const ammount = 46;

//drawing beads
function draw() {
  background(255, 255, 255);
  for (let x = 2; x < 500; x = x + 21) {
    for (let y = 5; y < 500; y = y + 6) {
      push();
      noStroke();
      fill(random(0, 250), random(0, 300), 255);
      ellipse(x + 70, y + 100, 14);
      pop();
    }
  }
}

//changes colors on click
function mouseClicked() {
  draw();
}
