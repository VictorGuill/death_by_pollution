////////////////////////////////
// IMPORTS
////////////////////////////////

import keyboardInputs from "./inputs.js";
import Map from "./map.js";
import Player from "./player.js";
import Stats from "./stats.js";

////////////////////////////////
// START
////////////////////////////////

const map = new Map("#323232");

const player = new Player("red", map);

const stats = new Stats();

window.requestAnimationFrame(gameLoop); // request first frame
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
    acc -= step;
  }

  stats.update(dt, runtime, keyboardInputs);

  window.requestAnimationFrame(gameLoop);
}
