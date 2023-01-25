export default class Particle {
  constructor(p) {
    this.position = p.createVector(p.random(p.width), p.random(p.height));
    this.velocity = p.createVector();
    this.acceleration = p.createVector();
    this.topspeed = 0;
    this.mag = 0.2;
    this.p = p;
  }

  update() {
    let mouse = this.p.createVector(this.p.mouseX, this.p.mouseY);
    this.acceleration = this.p.constructor.Vector.sub(mouse, this.position);
    this.acceleration.setMag(this.mag);

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
  }

  display() {
    this.p.noStroke();
    this.p.strokeWeight(2);
    this.p.fill(255);
    this.p.ellipse(this.position.x, this.position.y, 2, 2);
  }

  pause(isPause) {
    if (isPause) {
      this.topspeed = 10;
    } else {
      this.topspeed = 0;
    }
  }

  changeMag(isUp) {
    if (isUp && this.mag < 2) {
      this.mag += 0.01;
    } else if (!isUp && this.mag > 0.05) {
      this.mag -= 0.01;
    }
    // console.log(this.mag);
  }

  scatter(p) {
    this.position = p.createVector(p.random(p.width), p.random(p.height));
  }

  getMag() {
    return this.mag.toFixed(2);
  }
}
