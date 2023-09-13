//Variables
function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255, 255, 255);
}

//
class waterParticles {
  constructor(x, y) {
    this.x = x; // places things in place :)
    this.y = y; // line time
    this.particles = []; // empty but will be filled with particles
  }
  createParticle() {
    let newParticle = new particle();
    this.particles.push(newParticle);
  }
}

//
class particle {
  constructor() {
    this.x = random(0, width);
    this.y = height;
    this.speed = 0;
    this.gravity = 0.5;
    this.lifespan = 50;

    this.color = [random(0, 40), random(150, 255), random(0, 100)];
    this.size = random(12, 3);
  }
  update() {
    this.speed += this.gravity;
    this.y += this.speed;
    this.lifespan--;
    this.size += this.y / 30;
  }
  isDead() {
    return this.lifespan <= 0;
  }
  draw() {
    push();
    noStroke();
    fill(this.color[0], this.color[1], this.color[2]);
    ellipse(this.x, this.y, this.size);
    pop();
  }
}

const emitter = new waterParticles(100, 100);
const size = 15;
const gap = 20;
const ammount = 46;

//drawing beads
function draw() {
  background(255, 255, 255);
  emitter.createParticle();
  for (let particle of emitter.particles) {
    if (!particle.isDead()) {
      particle.update();
      particle.draw();
    }
  }
  // for (let x = 2; x < 500; x = x + random(3, 15)) {
  //   for (let y = random(10, 20); y < 500; y = y + random(1, 50)) {
  //     push();
  //     noStroke();
  //     fill(random(0, 40), random(0, 300), 255);
  //     ellipse(x + 100, y + 100, random(12, 3));
  //     pop();
  //   }
  // }
}

//changes colors on click
// function mouseClicked() {
//   draw();
// }
