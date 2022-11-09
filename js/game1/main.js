////////////////////////////////
// GAME PARAMETERS

// player movement
let accel = 9;
let top_speed = 45;
let friction = 6;

let cantidad_basura = 15;

////////////////////////////////
// IMPORTS

import userInput from "./inputs.js";
import Stats from "./stats.js";
import Player from "./player.js";
import Ui from "./ui.js";
import Map from "./map.js";
import Trash from "./trash.js";

////////////////////////////////
// START

const map_0 = new Map("map");

const ui = new Ui("ui");

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

  // stats.updateValues(dt, runtime, userInput, player);
  updateGame(dt, runtime);

  window.requestAnimationFrame(gameLoop);
}

window.requestAnimationFrame(gameLoop);

////////////////////////////////
// GAME UPDATE

function updateGame(dt, runtime) {
  player.move(dt, accel * dt, top_speed, friction * dt, map_0);

  trash_array.forEach((element) => {
    let collision = player.detectCollision(element);

    if (collision) {
      player.trash_collected++;

      const elementPos = trash_array.indexOf(element);

      const trash = document.getElementById(element.id);

      trash.style.zIndex = 11;
      trash.style.animation = "pick-item 1.2s cubic-bezier(.2,1.1,.84,1.02)";

      function delay(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
      }

      delay(1200).then(() => console.log(trash.remove()));

      trash_array.splice(elementPos, 1);
    }

    if (trash_array.length < cantidad_basura) {
      const new_trash = new Trash("trash_" + trash_id_counter, map_0);
      trash_array.push(new_trash);
      trash_id_counter++;
    }
  });

  ui.updateValues(player, runtime);
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
