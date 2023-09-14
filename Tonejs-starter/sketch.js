function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255, 255, 255);
}

let volume;
let oscillator;
const o = 200;
let size = 100;

window.addEventListener("load", () => {
  volume = new Tone.Volume().toDestination();
  oscillator = new Tone.Oscillator(300, "triangle").connect(volume);

  volume.volume.value = -20;
});

function swirly() {
  push();
  noFill();
  stroke(0, 0, 0);
  ellipse(o, o, size); //silly shape
  ellipse(o, o, size + 20);
  ellipse(o, o, size + 10);
  ellipse(o, o, size + 30);
  ellipse(o, o, size + 50);
  ellipse(o, o, size + 40);
  pop();
}

function draw() {
  //Circle
  swirly();
}

swirly.mouseClicked() {

  draw();
  oscillator.start();
}
