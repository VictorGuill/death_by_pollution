////////////////////////////////
// GAME PARAMETERS

// player movement
let accel = 10;
let top_speed = 50;
let friction = 7;

let cantidad_basura = 8;

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
let trash_id_counter = 0;

for (let i = 1; i <= cantidad_basura; i++) {
  const new_trash = new Trash("trash_" + trash_id_counter, map_0);

  if (!player.detectCollision(new_trash)) {
    trash_array.push(new_trash);
    trash_id_counter++;
  } else {
    console.log(new_trash);
    const trash = document.getElementById(new_trash.id);
    trash.remove();
    i--;
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

  if (trash_array.length < cantidad_basura) {
    const new_trash = new Trash("trash_" + trash_id_counter, map_0);
    trash_array.push(new_trash);
    trash_id_counter++;
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
