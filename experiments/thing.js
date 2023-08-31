function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255, 255, 255);
  noLoop();
  //colorMode(HSB, 100);
}

function draw() {
  background(255, 255, 255);
  for (let x = 5; x < 300; x = x + 13) {
    for (let y = 5; y < 300; y = y + 25) {
      if (x < 200 && x > 100) {
        strokeWeight(0.4);
        fill(255, 255, 255);
        rect(x + 24, y + 95, 15, 15);
      } else {
        push();
        noStroke();
        fill(random(0, 400), random(0, 100), 70);
        ellipse(x + 30, y + 100, 13);
        pop();
      }
    }
  }
}

function mouseClicked() {
  draw();
}
