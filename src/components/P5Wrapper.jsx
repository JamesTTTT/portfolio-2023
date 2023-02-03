import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import p5 from "p5";
import { AiOutlinePause } from "react-icons/ai";
import Particle from "../data/particle";

let particles = [];

const windowSize = () => {
  let clientHeight = document.getElementById("insideFrame").clientHeight;
  let clientWidth = document.getElementById("insideFrame").clientWidth;

  return {
    height: clientHeight,
    width: clientWidth,
  };
};

const Sketch = (p) => {
  let isPaused = true;
  let pauseSatus = "Space to start ";
  p.setup = function () {
    p.createCanvas(windowSize().width, windowSize().height);

    for (var i = 0; i < 1000; i++) {
      particles[i] = new Particle(p);
    }
  };

  p.draw = function () {
    p.background("#061A40");
    p.fill("");
    p.textSize(25);

    // p.text(
    //   "Scroll to change speed: " + particles[0].getMag(),
    //   10,
    //   windowSize().height - 20
    // );
    // p.text("'R' to reverse", 10, windowSize().height - 80);
    // p.text(pauseSatus, 10, windowSize().height - 110);
    // p.text("'E' to  reset ", 10, windowSize().height - 50);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].display();
    }
  };

  p.keyPressed = function () {
    if (p.key == " ") {
      for (let i = 0; i < particles.length; i++) {
        particles[i].pause(isPaused);
      }
      isPaused = !isPaused;
      if (isPaused) {
        pauseSatus = "Space to play";
      } else {
        pauseSatus = "Space to pause";
      }
    } else if (p.key === "r") {
      for (let i = 0; i < particles.length; i++) {
        particles[i].rev(p);
      }
    } else if (p.key === "e") {
      for (let i = 0; i < particles.length; i++) {
        particles[i].scatter();
      }
    }
  };

  p.mouseWheel = function (event) {
    let isUp = true;
    if (event.delta > 0) {
      isUp = false;
    } else {
      isUp = true;
    }
    for (let i = 0; i < particles.length; i++) {
      particles[i].changeSpeed(isUp);
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(windowSize().width, windowSize().height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].scatter();
    }
  };
};

const P5Wrap = () => {
  return (
    <div style={{ zIndex: -1 }} className="absolute">
      <ReactP5Wrapper sketch={Sketch} />
    </div>
  );
};

export default P5Wrap;
