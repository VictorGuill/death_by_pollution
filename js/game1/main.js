////////////////////////////////
// IMPORTS

import { input } from "./input.js";
import * as cfg from "./config.js";
import * as func from "./functions.js";

import Menu from "./screens/menu.js";
import Map from "./screens/map.js";
import Trash from "./items/trash.js";
import Player from "./items/player.js";

////////////////////////////////
// GAME SETUP

export let elapsedTime = 0;

let screen_state = "game";

// create game elements
const menu_start = new Menu("menu_start");
// menu_start.add();

const map = new Map("map");

let trash_items = [];

gameSetup();

////////////////////////////////
// GAME LOOP

window.requestAnimationFrame(gameLoop); // start loop

function gameLoop(millis) {
  let dt = (millis - elapsedTime) / 100;
  elapsedTime = millis;

  switch (screen_state) {
    case "menu":
      let option = menu_start.actions(input);

      if (option !== -1) {
        screen_state = option;
        switch (option) {
          case "game":
            menu_start.remove();
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

////////////////////////////////
// RESIZE EVENT

addEventListener("resize", (e) => {
  let menu_exist = document.getElementById(menu_start.id);
  if (menu_exist !== null) {
    menu_start.updateValues();
  }

  map.updateValues();

  trash_items.forEach((trash) => {
    trash.resize();
  });

  // prevent bug: input sometime remain true when resizing
  input["ArrowUp"] = false;
  input["ArrowRight"] = false;
  input["ArrowDown"] = false;
  input["ArrowLeft"] = false;
});

////////////////////////////////
// FUNCTIONS

function gameSetup() {
  map.add();

  for (let i = 0; i < cfg.trash_quantity; i++) {
    const element = new Trash("trash_" + i, map);
    trash_items.push(element);
    // console.log(element.trash_type);
  }

  const player = new Player("player", map);
}

function updateGame(dt, elapsedTime) {}
