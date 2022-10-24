////////////////////////////////
// IMPORTS
////////////////////////////////

import userInput from "./inputs.js";
import Map from "./map.js";
import Player from "./player.js";
import Stats from "./stats.js";

////////////////////////////////
// START
////////////////////////////////

const map = new Map("#202020", "map");
const player = new Player("#ffc300", map);
const stats = new Stats();

// request first frame
window.requestAnimationFrame(gameLoop);

////////////////////////////////
// GAME LOOP
////////////////////////////////

let oldTime = 0;

function gameLoop(runtime) {
  let dt = (runtime - oldTime) / 1000;
  oldTime = runtime;
  console.log(dt);

  update(dt);
  stats.update(dt, runtime, userInput);

  window.requestAnimationFrame(gameLoop);
}

////////////////////////////////
// UPDATE
////////////////////////////////

function update(dt) {
  let speed = 300 * ((map.height + map.width / 2) * 0.001) * dt;

  if (userInput["ArrowUp"]) {
    player.UP(speed);
  }
  if (userInput["ArrowRight"]) {
    player.RIGHT(speed);
  }
  if (userInput["ArrowDown"]) {
    player.DOWN(speed);
  }
  if (userInput["ArrowLeft"]) {
    player.LEFT(speed);
  }
  player.DRAW();
}

////////////////////////////////
// RESIZE EVENT
////////////////////////////////

addEventListener("resize", (e) => {
  map.uppdateMapSize();

  player.updatePlayerLimits(map.height, map.width);
});
