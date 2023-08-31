//Variables
function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255, 255, 255);
  noLoop();
}

//drawing beads
function draw() {
  background(255, 255, 255);
  for (let x = 5; x < 300; x = x + 14) {
    for (let y = 5; y < 300; y = y + 25) {
      if (x < 200 && x > 100) {
        strokeWeight(0.4);
        fill(255, 255, 255);
        rect(x + 64, y + 94, 12, 12);
      } else {
        push();
        noStroke();
        fill(random(0, 60), random(0, 200), 70);
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
