import React, { useEffect } from "react";
import Sketch from "react-p5";

import { distance, getRandomColor, getVelocity } from "./util";

const Background = () => {
  let CANVAS_WIDTH = window.innerWidth;
  let CANVAS_HEIGHT = window.innerHeight;
  let sq200Pixels = (CANVAS_HEIGHT * CANVAS_WIDTH) / 200;
  let STAR_COUNT = Math.floor(sq200Pixels / 100); // Number of stars
  let stars = [];
  let FPS = 60;

  const initializeStars = () => {
    for (let i = 0; i < STAR_COUNT; i++) {
      // this initializes array with new Star objects.
      let x = Math.random() * CANVAS_WIDTH;
      let y = Math.random() * CANVAS_HEIGHT;
      let r = Math.floor(Math.random() * (3 - 1.5 + 1) + 1.5);
      let vx = getVelocity(r);
      let vy = getVelocity(r);
      let opacity = Math.floor(Math.random() * (255 + 1));

      let color_offset = getRandomColor();
      let red = 33 + color_offset;
      let green = 67 + color_offset;
      let blue = 92 + color_offset;

      stars.push({
        x: x,
        y: y,
        radius: r,
        vx: vx,
        vy: vy,
        opacity: opacity,
        twinkle: "increase",
        red: red,
        green: green,
        blue: blue,
      });
    }
  };

  const mouse = {
    x: 0,
    y: 0,
  };

  // handle resize layout
  const handleResize = (p5) => {
    CANVAS_HEIGHT = window.innerHeight;
    CANVAS_WIDTH = window.innerWidth;
    sq200Pixels = (CANVAS_HEIGHT * CANVAS_WIDTH) / 200;
    STAR_COUNT = Math.floor(sq200Pixels / 100);
    p5.resizeCanvas(window.innerWidth, window.innerHeight, true);
    stars = [];
    initializeStars();
  };

  const mouseMoved = (p5, mousemove) => {
    mouse.x = mousemove.clientX;
    mouse.y = mousemove.clientY;
  };

  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    initializeStars();
    p5.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background("#010d1d");
    p5.noStroke();

    for (let i = 0; i < STAR_COUNT; i++) {
      let s = stars[i];
      p5.fill(s.red, s.green, s.blue, s.opacity);
      p5.ellipse(s.x, s.y, s.radius, s.radius);
    }

    // NOTE: Do not use setState in the draw function or in functions that are executed
    // in the draw function...
    // please use normal variables or class properties for these purposes

    // if (x >= window.innerWidth + 70) x = 0;

    const getClosestPointOnCircle = (mouse, star, radius) => {
      let vX = star.x - mouse.x;
      let vY = star.y - mouse.y;
      let magV = Math.sqrt(vX * vX + vY * vY);
      let aX = mouse.x + (vX / magV) * radius;
      let aY = mouse.y + (vY / magV) * radius;

      return { x: aX, y: aY }; // gives us the coordinates on circle
    };

    stars.forEach((s) => {
      s.x += s.vx / FPS;
      s.y += s.vy / FPS;

      // if mouse is close, push it towards the nearest point on circle

      if (distance(mouse, s) < 150) {
        s.x += (getClosestPointOnCircle(mouse, s, 150).x - s.x) / 150;
        s.y += (getClosestPointOnCircle(mouse, s, 150).y - s.y) / 150;
      }

      if (s.opacity > 255)
        // blink effect
        s.twinkle = "decrease";
      if (s.opacity <= 10) s.twinkle = "increase";

      if (s.twinkle === "increase") s.opacity += 1;
      if (s.twinkle === "decrease") s.opacity -= 1;

      if (s.x < 0 || s.x > CANVAS_WIDTH) s.vx = -s.vx;
      if (s.y < 0 || s.y > CANVAS_HEIGHT) s.vy = -s.vy;
    });
  };

  return (
    <>
      <Sketch
        className={
          "canvas fixed top-0 left-0 z-[-1] before:w-screen before:h-screen before:bg-gradient-to-b before:opacoty from-black to-[#e8e8e8] via-[#6c98d1] before:absolute before:mix-blend-overlay"
        }
        mouseMoved={mouseMoved}
        setup={setup}
        draw={draw}
        windowResized={handleResize}
      />
    </>
  );
};

export default Background;
