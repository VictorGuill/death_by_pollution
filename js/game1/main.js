////////////////////////////////
// IMPORTS

import userInput from "./inputs.js";
import Map from "./map.js";
import Player from "./player.js";
import Stats from "./stats.js";

////////////////////////////////
// SETTIGNS

let mapScale = 0.9;

////////////////////////////////
// START

const map = new Map(
  "map",
  window.innerHeight * mapScale,
  window.innerWidth * mapScale,
  "#202020"
);

const player = new Player("player", map);

const stats = new Stats("statsContainer");

window.requestAnimationFrame(gameLoop); // request first frame

////////////////////////////////
// GAME LOOP

let oldTime = 0;

function gameLoop(runtime) {
  let dt = (runtime - oldTime) / 1000;
  oldTime = runtime;

  stats.updateValues(dt, runtime, userInput, player);
  updateGameState(dt);

  window.requestAnimationFrame(gameLoop);
}

////////////////////////////////
// UPDATE

function updateGameState(dt) {
  // player
  if (userInput["ArrowUp"]) {
    player.moveUP(dt);
    player.updateCSS();
  }
  if (userInput["ArrowRight"]) {
    player.moveRIGHT(dt);
    player.updateCSS();
  }
  if (userInput["ArrowDown"]) {
    player.moveDOWN(dt);
    player.updateCSS();
  }
  if (userInput["ArrowLeft"]) {
    player.moveLEFT(dt);
    player.updateCSS();
  }
}

////////////////////////////////
// RESIZE EVENT

addEventListener("resize", (e) => {
  map.Resize(window.innerHeight * mapScale, window.innerWidth * mapScale);
  player.Resize(map.height, map.width);

  // prevent bug: input sometime remain true when resizing
  userInput["ArrowUp"] = false;
  userInput["ArrowRight"] = false;
  userInput["ArrowDown"] = false;
  userInput["ArrowLeft"] = false;
});
