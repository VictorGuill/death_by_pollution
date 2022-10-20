window.onload = init;

function init() {
  // Start the first frame request
  window.requestAnimationFrame(gameLoop);
}

// map
const map = document.getElementById("map");
const mapStyle = window.getComputedStyle(map, null);

// player
const player = document.getElementById("player");
const playerStyle = window.getComputedStyle(player, null);

// stats
const fpsText = document.getElementById("fps");
const timeText = document.getElementById("time");
const frameTimeText = document.getElementById("frameTime");

// create assoc array
let userInputs = {};

// Detects keydown/keyup presses. If keypress type is "keydown", stores true.
document.onkeydown = document.onkeyup = function (e) {
  userInputs[e.key] = e.type == "keydown";
};

let dt, oldTime;

function gameLoop(newTime) {
  // Calculate time between frames
  dt = (newTime - oldTime) / 1000;
  oldTime = newTime;

  // Perform the drawing operation
  updateStats(newTime, dt);
  draw(dt);

  // Request new frame
  window.requestAnimationFrame(gameLoop);
}

// FUNCTIONS //

function updateStats(runtime, dt) {
  time.innerHTML = "Time: " + (runtime / 1000).toFixed(2) + "s";
  fpsText.innerHTML = "FPS: " + Math.round(1 / dt);
  frameTimeText.innerHTML = "FrameTime:<br>" + dt.toFixed(6) + "s";
}

function draw(dt) {
  // let speedUnit = parseInt(mapStyle.getPropertyValue("width")) / 1000;
  let speed = 100 * dt;
  let currentPosX = parseInt(playerStyle.getPropertyValue("top"));
  let currentPosY = parseInt(playerStyle.getPropertyValue("left"));

  if (userInputs["ArrowUp"]) {
    currentPosX -= speed;
    player.style.top = currentPosX + "px";
  } else if (userInputs["ArrowRight"]) {
    currentPosY += speed;
    player.style.left = currentPosY + "px";
  } else if (userInputs["ArrowDown"]) {
    currentPosX += speed;
    player.style.top = currentPosX + "px";
  } else if (userInputs["ArrowLeft"]) {
    currentPosY -= speed;
    player.style.left = currentPosY + "px";
  }

  // if (userInputs["ArrowUp"]) {
  //   currentPosX -= speed;
  //   player.style.top = currentPosX + "px";
  // } else if (userInputs["ArrowRight"]) {
  //   currentPosY += speed;
  //   player.style.left = currentPosY + "px";
  // } else if (userInputs["ArrowDown"]) {
  //   currentPosX += speed;
  //   player.style.top = currentPosX + "px";
  // } else if (userInputs["ArrowLeft"]) {
  //   currentPosY -= speed;
  //   player.style.left = currentPosY + "px";
  // }
}
