////////////////////////////////
// IMPORTS

import userInput from "./inputs.js";
import Map from "./map.js";
import Player from "./player.js";
import Stats from "./stats.js";

////////////////////////////////
// SETTIGNS

let mapScale = 0.9;
let usePhysics = true;

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

let statsUpdateStep = 1000 / 10;
let statsAcc = 0;

function gameLoop(runtime) {
  let dt = (runtime - oldTime) / 1000;
  oldTime = runtime;

  statsAcc += dt;

  while (statsAcc * 1000 > statsUpdateStep) {
    stats.updateValues(dt, runtime, userInput, player);
    statsAcc = 0;
  }

  updateGameState(dt);

  window.requestAnimationFrame(gameLoop);
}

////////////////////////////////
// UPDATE

function updateGameState(dt) {
  if (usePhysics) {
    player.movePhysics(dt, userInput);
  } else {
    player.move(dt, userInput);
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
