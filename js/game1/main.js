//#region IMPORTS
import { input } from "./input.js";
import * as cfg from "./config.js";
import * as func from "./functions.js";

import Menu from "./screens/menu.js";
import Map from "./screens/map.js";
import Trash from "./items/trash.js";
import Player from "./items/player.js";
//#endregion

//#region GAME SETUP
export let elapsedTime = 0;

let screen_state = "menu";

// create game elements
const menu_start = new Menu("menu_start");
menu_start.add();

const map = new Map("map");

const player = new Player(
  "player",
  map,
  cfg.accel,
  cfg.top_speed,
  cfg.friction
);

let trash_items = [];
let trash_id_counter = 0;
//#endregion

//#region GAME LOOP
window.requestAnimationFrame(gameLoop); // start loop

function gameLoop(millis) {
  let dt = (millis - elapsedTime) / 100;
  elapsedTime = millis;

  switch (screen_state) {
    case "menu":
      let option = menu_start.actions(input);

      if (option !== -1) {
        screen_state = option;
        menu_start.remove();
        switch (option) {
          case "game":
            gameSetup();
            break;
          case "options":
            break;
          case "exit":
            break;
        }
      }
      break;
    case "game":
      updateGame(dt, elapsedTime);
      break;
    case "options":
      console.log("in options");
      break;
    case "exit":
      console.log("exiting...");
      break;
  }

  window.requestAnimationFrame(gameLoop); // request new frame
}
//#endregion

//#region RESIZE EVENT
addEventListener("resize", (e) => {
  menu_start.resize();

  map.resize();

  player.resize();

  trash_items.forEach((trash) => {
    trash.resize();
  });

  // prevent bug: input sometime remain true when resizing
  input["ArrowUp"] = false;
  input["ArrowRight"] = false;
  input["ArrowDown"] = false;
  input["ArrowLeft"] = false;
});
//#endregion

//#region FUNCTIONS
function gameSetup() {
  map.add();
  player.add();
  initialTrashSpawn();
}

function updateGame(dt, elapsedTime) {
  player.move(dt, input);
  checkTrashCollition(trash_items);
}

// create initial trashes before game starts
function initialTrashSpawn() {
  for (let i = 1; i <= cfg.trash_quantity; i++) {
    const new_trash = new Trash("trash_" + trash_id_counter, map);
    new_trash.add();

    if (player.checkCollision(new_trash)) {
      // if trash collides with player, remove it and decrease the counter by 1
      const trash = document.getElementById(new_trash.id);
      trash.remove();
      console.log("Collision trash");
      i--;
    } else {
      trash_items.push(new_trash);
      trash_id_counter++;
    }
  }
}

// if player collides with trash: delete, apply animation and create a new one
function checkTrashCollition(trash_items) {
  trash_items.forEach((element) => {
    let collision = player.checkCollision(element);

    if (collision) {
      player.trash_collected++;
      console.log(player.trash_collected);

      // apply pick up animation
      const animation_duration = 1.2;
      const trash = document.getElementById(element.id);
      trash.style.animation =
        "pick-item " + animation_duration + "s cubic-bezier(.2,1.1,.84,1.02)";
      trash.style.animationFillMode = "forwards";

      // delete element after animation ends
      delay(animation_duration * 1000).then(() => trash.remove());

      // remove trash from array
      const pos = trash_items.indexOf(element);
      trash_items.splice(pos, 1);

      // add new trash and increase id counter
      trash_id_counter++;
      const new_trash = new Trash("trash_" + trash_id_counter, map);
      trash_items.push(new_trash);
      new_trash.add();
    }
  });
}

// wait "time" amount
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
//#endregion
