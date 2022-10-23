////////////////////////////////
// IMPORTS
////////////////////////////////

import userInput from "./inputs.js";
import Map from "./map.js";
import Player from "./player.js";
import Stats from "./stats.js";

////////////////////////////////
// START
////////////////////////////////

const map = new Map("#202020", "map");
const player = new Player("#ffc300", map);
const stats = new Stats();

// request first frame
window.requestAnimationFrame(gameLoop);

////////////////////////////////
// GAME LOOP
////////////////////////////////

const step = 1 / 200;
let acc = 0;
let oldTime = 0;

function gameLoop(runtime) {
  let dt = (runtime - oldTime) / 1000;
  acc += dt;
  oldTime = runtime;

  while (acc > step) {
    update(step);
    acc -= step;
  }

  draw();

  stats.update(dt, runtime, userInput);

  window.requestAnimationFrame(gameLoop);
}

////////////////////////////////
// UPDATE
////////////////////////////////

function update(step) {
  let speed = 300 * ((map.height + map.width / 2) * 0.001) * step;

  if (userInput["ArrowUp"]) {
    player.UP(speed);
  }
  if (userInput["ArrowRight"]) {
    player.RIGHT(speed);
  }
  if (userInput["ArrowDown"]) {
    player.DOWN(speed);
  }
  if (userInput["ArrowLeft"]) {
    player.LEFT(speed);
  }
}

////////////////////////////////
// DRAW
////////////////////////////////

function draw() {
  player.DRAW();
}

////////////////////////////////
// RESIZE EVENT
////////////////////////////////

addEventListener("resize", (e) => {
  map.uppdateMapSize();

  player.updatePlayerLimits(map.height, map.width);
});
