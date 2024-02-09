export default class Particle {
  constructor(p) {
    this.position = p.createVector(p.random(p.width), p.random(p.height));
    this.velocity = p.createVector();
    this.acceleration = p.createVector();
    this.topspeed = 0.5;
    this.mag = 1;
    this.prev = 0;
    this.p = p;
  }

  update() {
    let orb = this.p.createVector(
      this.position.x + this.p.width,
      this.position.y + this.p.height
    );
    this.acceleration = this.p.constructor.Vector.sub(orb, this.position);
    this.acceleration.setMag(this.mag);

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);

    if (this.position.y > this.p.height) {
      this.position.y = 1;
    }

    if (this.position.y <= 0) {
      this.position.y = this.p.height - 1;
    }

    if (this.position.x > this.p.width) {
      this.position.x = 1;
    }

    if (this.position.x <= 0) {
      this.position.x = this.p.width - 1;
    }
  }

  display() {
    this.p.noStroke();
    this.p.strokeWeight(1);
    this.p.fill("#91cde6");
    this.p.ellipse(this.position.x, this.position.y, 2, 2);
  }

  pause(isPause) {
    if (isPause) {
      this.prev = this.topspeed;
      this.topspeed = 0;
    } else {
      this.topspeed = this.prev;
    }
  }

  rev() {
    this.mag = this.mag * -1;
  }

  scatter() {
    this.position = this.p.createVector(
      this.p.random(this.p.width),
      this.p.random(this.p.height)
    );
  }

  changeSpeed(up) {
    if (up && this.topspeed <= 3) {
      this.topspeed += 0.1;
    }

    if (!up && this.topspeed >= 0.1) {
      this.topspeed -= 0.1;
    }
  }

  getMag() {
    return this.topspeed.toFixed(2);
  }
}
