//#region IMPORTS
import { input } from "./input.js";
import * as cfg from "./config.js";
import * as func from "./functions.js";
import { setCookie, getCookie, eraseCookie } from "../cookiesFunctions.js";

import Menu from "./screens/menu.js";
import Map from "./screens/map.js";
import End from "./screens/end.js";
import Trash from "./items/trash.js";
import Perk from "./items/perk.js";
import Player from "./items/player.js";
import Ui from "./ui.js";
import Ship from "./items/ship.js";
//#endregion

//#region GAME SETUP
export let elapsedTime = 0;
export let gameplayTimeLeft;
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
const ship = new Ship("ship", map);

const end_screen = new End("end");
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
        switch (option) {
          case "game":
            menu_start.remove();
            gameSetup();
            break;
          case "tutorial":
            const tutorialModal = document.getElementById("tutorialModal");
            tutorialModal.style.display = "grid";
            input["Enter"] = false;
            break;
          case "credits":
            const creditsModal = document.getElementById("creditsModal");
            creditsModal.style.display = "grid";
            input["Enter"] = false;
            break;
          case "exit":
            menu_start.remove();
            window.location.href = "../pages/gamesMenu.php";
            break;
        }
      }
      break;
    case "tutorial":
      if (input["Enter"]) {
        const tutorialModal = document.getElementById("tutorialModal");
        tutorialModal.style.display = "none";

        input["Enter"] = false;
        screen_state = "menu";
      }
      break;
    case "credits":
      if (input["Enter"]) {
        const creditsModal = document.getElementById("creditsModal");
        creditsModal.style.display = "none";

        input["Enter"] = false;
        screen_state = "menu";
      }
      break;
    case "game":
      if (gameplayTimeLeft > 1 || gameplayTimeLeft === undefined) {
        updateGame(dt, elapsedTime);
      } else {
        map.remove();
        ui.remove();

        end_screen.add(player.trash_collected);
        setCookie("game1_score", player.trash_collected, 1);

        screen_state = "end_screen";

        input["ArrowUp"] = false;
        input["ArrowDown"] = false;
        input["ArrowLeft"] = false;
        input["ArrowRight"] = false;
        input["Enter"] = false;
      }
      break;
    case "end_screen":
      let end_option = end_screen.actions(input);

      if (end_option !== -1) {
        screen_state = end_option;
        switch (end_option) {
          case "menu":
            end_screen.remove();
            location.reload();
            break;
          case "credits_end":
            const creditsModal = document.getElementById("creditsModal");
            creditsModal.style.display = "grid";
            input["Enter"] = false;
            break;
          case "exit":
            end_screen.remove();
            window.location.href = "../pages/gamesMenu.php";
            break;
        }
      }
      break;
    case "credits_end":
      if (input["Enter"]) {
        const creditsModal = document.getElementById("creditsModal");
        creditsModal.style.display = "none";

        input["Enter"] = false;
        screen_state = "end_screen";
      }
      break;
    case "exit":
      // const redirectingTitle = document.createElement("p");
      // redirectingTitle.setAttribute("id", "redirecting");
      // redirectingTitle.innerHTML = "Redirecting";
      // document.body.appendChild(redirectingTitle);

      break;
  }

  window.requestAnimationFrame(gameLoop); // request new frame
}
//#endregion

//#region RESIZE EVENT
addEventListener("resize", (e) => {
  if (
    screen_state === "menu" ||
    screen_state === "tutorial" ||
    screen_state === "credits"
  ) {
    menu_start.resize();
  }

  if (screen_state === "game") {
    map.resize();
    player.resize();
    ship.resize();

    trashes.forEach((trash) => {
      trash.resize();
    });

    perks.forEach((perk) => {
      perk.resize();
    });
  }

  if (screen_state === "end_screen") {
    end_screen.resize();
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
  map.resize();
  map.setGameTime(elapsedTime);
  ui.add();
  player.add();
  player.resize();
  ship.add();
  ship.resize();

  initialTrashSpawn();
}

function updateGame(dt, elapsedTime) {
  gameplayTimeLeft = map.max_time / 1000 - elapsedTime / 1000;

  player.move(dt, input);

  checkTrashCollition(trashes);
  checkPerksCollition(elapsedTime);

  player.applyPerk(elapsedTime, trashes);

  perk_acc = perkSpawn(dt, perk_acc, perks);
  ui.updateValues(player, gameplayTimeLeft);
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
