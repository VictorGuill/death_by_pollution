////////////////////////////////
// GAME PARAMETERS

// player movement
let accel = 10;
let top_speed = 32;
let friction = 5;

let cantidad_basura = 2;

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

for (let i = 1; i <= cantidad_basura; i++) {
  const new_trash = new Trash("trash_" + i, map_0);

  if (!player.detectCollision(new_trash)) {
    trash_array.push(new_trash);
  }
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

  console.log(trash_array);

  if (trash_array.length < cantidad_basura) {
    const new_trash = new Trash("trash_" + (trash_array.length + 1), map_0);

    trash_array.push(new_trash);
  }

  trash_array.forEach(function (element, i) {
    let collision = player.detectCollision(element);

    if (collision) {
      player.trash_collected++;

      const elementPos = trash_array.indexOf(element);

      const trash = document.getElementById(element.id);
      trash.remove();

      trash_array.splice(elementPos, 1);
    }
  });
}

////////////////////////////////
// RESIZE EVENT

addEventListener("resize", (e) => {
  map_0.Resize();
  player.Resize();
  trash_array.forEach((element) => {
    element.Resize();
  });

  // prevent bug: input sometime remain true when resizing
  userInput["ArrowUp"] = false;
  userInput["ArrowRight"] = false;
  userInput["ArrowDown"] = false;
  userInput["ArrowLeft"] = false;
});
