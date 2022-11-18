//#region IMPORTS
import { input } from "./input.js";
import * as cfg from "./config.js";
import * as func from "./functions.js";

import Menu from "./screens/menu.js";
import Map from "./screens/map.js";
import Trash from "./items/trash.js";
import Perk from "./items/perk.js";
import Player from "./items/player.js";
import Ui from "./ui.js";
//#endregion

//#region GAME SETUP
export let elapsedTime = 0;
let screen_state = "menu";

let trashes = [],
  perks = [];
let trash_id_counter = 0,
  perk_id_counter = 0;

let perk_acc = cfg.perk_spawn_time;

// create game elements
const menu_start = new Menu("menu_start");
menu_start.add();

const map = new Map("map");
const ui = new Ui("ui");
const player = new Player("player", map);
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
      window.location.href = "../../pages/games.html";
      break;
  }

  window.requestAnimationFrame(gameLoop); // request new frame
}
//#endregion

//#region RESIZE EVENT
addEventListener("resize", (e) => {
  if (screen_state === "menu") {
    menu_start.resize();
  }

  if (screen_state === "game") {
    map.resize();
    player.resize();

    trashes.forEach((trash) => {
      trash.resize();
    });

    perks.forEach((perk) => {
      perk.resize();
    });
  }

  // prevent bug: input sometimes remain true when resizing
  input["ArrowUp"] = false;
  input["ArrowRight"] = false;
  input["ArrowDown"] = false;
  input["ArrowLeft"] = false;
});
//#endregion

//#region FUNCTIONS
function gameSetup() {
  map.add();
  ui.add();
  player.add();

  initialTrashSpawn();
}

function updateGame(dt, elapsedTime) {
  player.move(dt, input);

  checkTrashCollition(trashes);
  checkPerksCollition(elapsedTime);

  player.applyPerk(elapsedTime);

  perk_acc = perkSpawn(dt, perk_acc, perks);
  ui.updateValues(player, elapsedTime);
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
      i--;
    } else {
      trashes.push(new_trash);
      trash_id_counter++;
    }
  }
  player.trash_collected = 0;
}

// if player collides with trash: delete, apply animation and create a new one
function checkTrashCollition(trash_items) {
  trash_items.forEach((element) => {
    let collision = player.checkCollision(element);

    if (collision) {
      player.trash_collected++;

      // apply pick up animation
      const animation_time = 1.2;

      const trash = document.getElementById(element.id);
      trash.style.animation =
        "pick-item " + animation_time + "s cubic-bezier(.2,1.1,.84,1.02)";
      trash.style.animationFillMode = "forwards";

      // delete element after animation ends
      delay(animation_time * 1000).then(() => trash.remove());

      // remove trash from array
      const trash_pos = trash_items.indexOf(element);
      trash_items.splice(trash_pos, 1);

      // add new trash and increase id counter
      trash_id_counter++;
      const new_trash = new Trash("trash_" + trash_id_counter, map);
      trash_items.push(new_trash);

      new_trash.add();
    }
  });
}

// if player collides with perk: delete and apply upgrade
function checkPerksCollition(elapsedTime) {
  perks.forEach((element) => {
    let collision = player.checkCollision(element);

    if (collision) {
      player.perkCollected(element, elapsedTime);

      // apply pick up animation
      const animation_duration = 1.2;
      const perk = document.getElementById(element.id);
      perk.style.animation =
        "pick-perk " + animation_duration + "s cubic-bezier(.2,1.1,.84,1.02)";
      perk.style.animationFillMode = "forwards";

      // delete element after animation ends
      delay(animation_duration * 1000).then(() => perk.remove());

      // remove trash from array
      const pos = perks.indexOf(element);
      perks.splice(pos, 1);
    }
  });
}

// create initial trashes before game starts
function perkSpawn(dt, acc, perks) {
  if (acc > cfg.perk_spawn_time) {
    let num = func.randomIntFromInterval(1, 100);
    if (num <= cfg.perk_probability) {
      if (perks.length < cfg.perks_quantity) {
        // add new perk and increase id counter
        perk_id_counter++;
        const new_perk = new Perk("perk_" + perk_id_counter, map);
        new_perk.add();
        perks.push(new_perk);
      }
    }
    return (acc = 0);
  }
  return (acc += dt * 100);
}

// wait "time" amount
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
//#endregion
