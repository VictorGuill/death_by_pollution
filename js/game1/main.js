////////////////////////////////
// IMPORTS

import userInput from "./inputs.js";
import Stats from "./stats.js";
import Player from "./player.js";
import Ui from "./ui.js";
import Map from "./map.js";
import Trash from "./trash.js";
import Perk from "./perk.js";
import * as cfg from "./config.js";

////////////////////////////////
// SETUP

// create game elements
const stats = new Stats("statsContainer");
const map_0 = new Map("map");
const ui = new Ui("ui");
const player = new Player(
  "player",
  map_0,
  cfg.accel,
  cfg.top_speed,
  cfg.friction
);

// create trashes
let trash_array = [];
let trash_id_counter = 0;
initialTrashSpawn();

// create perks
let perks_array = [];
let perks_id_counter = 0;

////////////////////////////////
// GAME LOOP

export let runtime = 0;
function gameLoop(elapsedTime) {
  let dt = (elapsedTime - runtime) / 100;
  console.log(runtime);

  stats.updateValues(dt, elapsedTime, userInput, player);
  updateGame(dt, elapsedTime);

  // built in function to request a new frame when browser is ready
  window.requestAnimationFrame(gameLoop);
}
window.requestAnimationFrame(gameLoop);

////////////////////////////////
// GAME UPDATE

let acc = 0;

function updateGame(dt, runtime) {
  player.move(dt, cfg.diagonal_speed_limit);

  checkTrashCollition(trash_array);
  checkPerksCollition(perks_array);

  if (acc > cfg.perks_step) {
    let num = randomIntFromInterval(1, 100);
    if (num <= cfg.perk_probability) {
      perkSpawn(perks_array);
    }
    acc = 0;
  }

  acc += dt * 100;

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

  perks_array.forEach((element) => {
    element.Resize();
  });

  // prevent bug: input sometime remain true when resizing
  userInput["ArrowUp"] = false;
  userInput["ArrowRight"] = false;
  userInput["ArrowDown"] = false;
  userInput["ArrowLeft"] = false;
});

////////////////////////////////
// FUNCTIONS

// create initial trashes before game starts
function initialTrashSpawn() {
  for (let i = 1; i <= cfg.cantidad_basura; i++) {
    const new_trash = new Trash("trash_" + trash_id_counter, map_0);

    if (player.checkCollision(new_trash)) {
      // if trash collides with player, remove it and decrease the counter by 1
      const trash = document.getElementById(new_trash.id);
      trash.remove();
      console.log("Collision trash");
      i--;
    } else {
      trash_array.push(new_trash);
      trash_id_counter++;
    }
  }
}

// if player collides with trash: delete, apply animation and create a new one
function checkTrashCollition(trash_array) {
  trash_array.forEach((element) => {
    let collision = player.checkCollision(element);

    if (collision) {
      player.trash_collected++;

      // apply pick up animation
      const animation_duration = 1.2;
      const trash = document.getElementById(element.id);
      trash.style.animation =
        "pick-item " + animation_duration + "s cubic-bezier(.2,1.1,.84,1.02)";

      // delete element after animation ends
      delay(animation_duration * 1000).then(() => trash.remove());

      // remove trash from array
      const pos = trash_array.indexOf(element);
      trash_array.splice(pos, 1);

      // add new trash and increase id counter
      const new_trash = new Trash("trash_" + trash_id_counter, map_0);
      trash_array.push(new_trash);
      trash_id_counter++;
    }
  });
}

// create initial trashes before game starts
function perkSpawn(perks_array) {
  if (perks_array.length < cfg.cantidad_perks) {
    // add new perk and increase id counter
    const new_perk = new Perk("perk_" + perks_id_counter, map_0);
    perks_array.push(new_perk);
    perks_id_counter++;
  }
}

// if player collides with perk: delete and apply upgrade
function checkPerksCollition(perk_array) {
  perk_array.forEach((element) => {
    let collision = player.checkCollision(element);

    if (collision) {
      player.perkCollected(element.perk_type, global_time);

      // apply pick up animation
      const animation_duration = 1.2;
      const perk = document.getElementById(element.id);
      perk.style.animation =
        "pick-perk " + animation_duration + "s cubic-bezier(.2,1.1,.84,1.02)";

      // delete element after animation ends
      delay(animation_duration * 1000).then(() => perk.remove());

      // remove trash from array
      const pos = perks_array.indexOf(element);
      perks_array.splice(pos, 1);
    }
  });
}

// wait "time" amount
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
