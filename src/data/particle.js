export default class Particle {
  constructor(p) {
    this.position = p.createVector(p.random(p.width), p.random(p.height));
    this.velocity = p.createVector();
    this.acceleration = p.createVector();
    this.topspeed = 10;
    this.p = p;
  }

  update() {
    let mouse = this.p.createVector(this.p.mouseX, this.p.mouseY);
    this.acceleration = this.p.constructor.Vector.sub(mouse, this.position);
    this.acceleration.setMag(0.2);

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);

    // function mouseClicked() {
    //   this.p.fill(0);
    // }

    // this.p.mouseClicked(changeGray);
    // if (this.position.x > this.p.width) {
    //   console.log("ihappen");
    //   this.position.add(-this.velocity);
    // }
    // if (this.position.y > this.p.height) {
    //   console.log("ihappen2");
    //   this.velocity.add(-1);
    //   this.position.add(-this.velocity);
    // }
  }

  display() {
    this.p.noStroke();
    this.p.strokeWeight(2);
    this.p.fill(255);
    this.p.ellipse(this.position.x, this.position.y, 2, 2);
  }
}
