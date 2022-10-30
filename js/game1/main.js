////////////////////////////////
// GAME PARAMETERS

// player movement
let accel = 50;
let top_speed = 80;
let friction = 30;

////////////////////////////////
// IMPORTS

import userInput from "./inputs.js";
import Player from "./player.js";
import Map from "./map.js";

////////////////////////////////
// START

const map_0 = new Map("map");

const player = new Player("player", map_0);

////////////////////////////////
// GAME LOOP

let oldTime = 0;

function gameLoop(runtime) {
  let dt = (runtime - oldTime) / 100;
  oldTime = runtime;

  updateGameState(dt);

  window.requestAnimationFrame(gameLoop);
}

window.requestAnimationFrame(gameLoop);

////////////////////////////////
// GAME UPDATE

function updateGameState(dt) {
  player.move(dt, accel * dt, top_speed, friction * dt, map_0);
}

////////////////////////////////
// RESIZE EVENT

addEventListener("resize", (e) => {
  map_0.Resize();
  player.Resize();

  // prevent bug: input sometime remain true when resizing
  userInput["ArrowUp"] = false;
  userInput["ArrowRight"] = false;
  userInput["ArrowDown"] = false;
  userInput["ArrowLeft"] = false;
});
