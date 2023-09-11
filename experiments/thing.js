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
  for (let x = 5; x < 300; x = x + 14) {
    for (let y = 5; y < 150; y = y + 25) {
      if (x < 200 && x > 100) {
        strokeWeight(0.4);
        fill(255, 255, 255);
        rect(x + 64, y + 94, 12, 12);
      } else {
        push();
        noStroke();
        fill(random(0, 250), random(0, 300), 255);
        ellipse(x + 70, y + 100, 14);
        pop();
      }
    }
  }
}

//changes colors on click
function mouseClicked() {
  draw();
}
