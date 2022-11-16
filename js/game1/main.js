////////////////////////////////
// IMPORTS

import { input } from "./input.js";
import Menu from "./screens/menu.js";
import Map from "./screens/map.js";

////////////////////////////////
// GAME SETUP

export let elapsedTime = 0;

let screen_state = "menu";

// create game elements
const menu_start = new Menu("menu_start");
const map = new Map("map");

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
            map.add();
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
  menu_start.updateValues();
  map.updateValues();

  // prevent bug: input sometime remain true when resizing
  input["ArrowUp"] = false;
  input["ArrowRight"] = false;
  input["ArrowDown"] = false;
  input["ArrowLeft"] = false;
});

////////////////////////////////
// FUNCTIONS

function updateGame(dt, elapsedTime) {}
