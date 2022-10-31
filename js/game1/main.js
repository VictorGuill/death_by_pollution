////////////////////////////////
// GAME PARAMETERS

// player movement
let accel = 10;
let top_speed = 32;
let friction = 5;

////////////////////////////////
// IMPORTS

import userInput from "./inputs.js";
import Stats from "./stats.js";
import Player from "./player.js";
import Map from "./map.js";
import Trash from "./trash.js";

////////////////////////////////
// START

const map_0 = new Map("map");

const player = new Player("player", map_0);

const stats = new Stats("statsContainer");

let trash_array = [];

for (let i = 1; i <= 5; i++) {
  trash_array.push(new Trash("trash_" + i, map_0));
}

////////////////////////////////
// GAME LOOP

let oldTime = 0;

function gameLoop(runtime) {
  let dt = (runtime - oldTime) / 100;
  oldTime = runtime;

  stats.updateValues(dt, runtime, userInput, player);
  updateGame(dt);

  window.requestAnimationFrame(gameLoop);
}

window.requestAnimationFrame(gameLoop);

////////////////////////////////
// GAME UPDATE

function updateGame(dt) {
  player.move(dt, accel * dt, top_speed, friction * dt, map_0);

  trash_array.forEach(function (element, i) {
    let collision = player.detectCollision(element);

    if (collision) {
      player.trash_collected++;
      const trash = document.getElementById(element.id);
      trash.remove();
      trash_array.splice(i, 1);
      // let new_trash = new Trash("trash_" + i, map_0);
      // trash_array.push(new_trash);
    }
  });
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
