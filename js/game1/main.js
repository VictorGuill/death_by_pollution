////////////////////////////////
// GAME PARAMETERS

let accel = 10;
let top_speed = 100;
let friction = 1;

////////////////////////////////
// IMPORTS

import userInput from "./inputs.js";
import Player from "./player.js";
import Map from "./map.js";

////////////////////////////////
// START

const map = new Map("map");

const player = new Player("player", map);

////////////////////////////////
// GAME LOOP

let oldTime = 0;

window.requestAnimationFrame(gameLoop);

function gameLoop(runtime) {
  let dt = (runtime - oldTime) / 100;
  oldTime = runtime;

  updateGameState(dt);

  window.requestAnimationFrame(gameLoop);
}

////////////////////////////////
// GAME UPDATE

function updateGameState(dt) {
  player.move(dt, accel * dt, top_speed, friction * dt);
}

////////////////////////////////
// CHECK COLLISIONS

function checkCollision(x1, y1, x2, y2) {}

////////////////////////////////
// RESIZE EVENT

addEventListener("resize", (e) => {
  map.Resize();

  // prevent bug: input sometime remain true when resizing
  userInput["ArrowUp"] = false;
  userInput["ArrowRight"] = false;
  userInput["ArrowDown"] = false;
  userInput["ArrowLeft"] = false;
});
