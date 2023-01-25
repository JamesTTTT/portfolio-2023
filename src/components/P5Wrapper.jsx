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
  let isPaused = false;
  let pauseSatus = "Press space to pause";
  p.setup = function () {
    p.createCanvas(windowSize().width, windowSize().height);

    for (var i = 0; i < 1000; i++) {
      particles[i] = new Particle(p);
    }
  };

  p.draw = function () {
    p.background("#061A40");
    p.textSize(32);
    p.text(pauseSatus, 10, windowSize().height - 30);

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
        pauseSatus = "Press space to play";
      } else {
        pauseSatus = "Press space to pause";
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
      particles[i].changeMag(isUp);
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(windowSize().width, windowSize().height);
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
