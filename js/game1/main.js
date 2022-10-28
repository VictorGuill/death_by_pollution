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
  let local_accel = accel * dt;
  let local_friction = friction * dt;
  let local_top_speed = top_speed;

  if (userInput["ArrowRight"]) {
    if (player.vel_x + local_accel < local_top_speed) {
      player.vel_x += local_accel;
    } else {
      player.vel_x = local_top_speed;
    }
  }

  if (userInput["ArrowLeft"]) {
    if (player.vel_x - local_accel > -local_top_speed) {
      player.vel_x -= local_accel;
    } else {
      player.vel_x = -local_top_speed;
    }
  }

  if (userInput["ArrowDown"]) {
    if (player.vel_y + local_accel < local_top_speed) {
      player.vel_y += local_accel;
    } else {
      player.vel_y = local_top_speed;
    }
  }

  if (userInput["ArrowUp"]) {
    if (player.vel_y - local_accel > -local_top_speed) {
      player.vel_y -= local_accel;
    } else {
      player.vel_y = -local_top_speed;
    }
  }

  if (
    (!userInput["ArrowRight"] && !userInput["ArrowLeft"]) ||
    (userInput["ArrowRight"] && userInput["ArrowLeft"])
  ) {
    if (player.vel_x - local_friction > 0) {
      player.vel_x -= local_friction;
    } else if (player.vel_x + local_friction < 0) {
      player.vel_x += local_friction;
    } else {
      player.vel_x = 0;
    }
  }

  if (
    (!userInput["ArrowDown"] && !userInput["ArrowUp"]) ||
    (userInput["ArrowDown"] && userInput["ArrowUp"])
  ) {
    if (player.vel_y - local_friction > 0) {
      player.vel_y -= local_friction;
    } else if (player.vel_y + local_friction < 0) {
      player.vel_y += local_friction;
    } else {
      player.vel_y = 0;
    }
  }

  player.x += player.vel_x * dt;
  player.y += player.vel_y * dt;

  player.draw();
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
