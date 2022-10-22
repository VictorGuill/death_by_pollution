// map
const map = document.getElementById("map");
const mapStyle = window.getComputedStyle(map, null);

// player
const player = document.getElementById("player");
const playerStyle = window.getComputedStyle(player, null);
const playerPosText = document.getElementById("playerPos");

// stats
const fpsText = document.getElementById("fps");
const timeText = document.getElementById("time");
const inputText = document.getElementById("userInput");

////////////////////////////////
// START
////////////////////////////////

window.onload = init;

function init() {
  // Start the first frame request
  window.requestAnimationFrame(gameLoop);
}

////////////////////////////////
// INPUTS
////////////////////////////////

// create assoc array
let userInputs = {};

// Detects keydown/keyup presses. If keypress type is "keydown", stores true.
document.onkeydown = document.onkeyup = function (e) {
  userInputs[e.key] = e.type == "keydown";
};

////////////////////////////////
// GAME LOOP
////////////////////////////////
const step = 1 / 200;
let acc = 0;
let oldTime = 0;

function gameLoop(runtime) {
  let dt = (runtime - oldTime) / 1000;
  acc += dt;
  oldTime = runtime;

  while (acc > step) {
    // console.log("Step", step);
    update(step);
    acc -= step;
  }

  draw(dt, runtime);
  window.requestAnimationFrame(gameLoop);
}

function update() {
  let playerCenter = parseFloat(playerStyle.getPropertyValue("height")) / 2;

  let PosY = parseFloat(playerStyle.getPropertyValue("top"));
  let PosX = parseFloat(playerStyle.getPropertyValue("left"));

  let limitY = parseFloat(mapStyle.getPropertyValue("height"));
  let limitX = parseFloat(mapStyle.getPropertyValue("width"));

  let speed = 400 * step;
  // console.log(speed);

  if (userInputs["ArrowUp"] && userInputs["ArrowRight"]) {
    inputText.innerHTML = "Input: ↗️";
    if (PosY > 0) {
      if (PosY - speed < 0) {
        PosY = 0;
        player.style.top = PosY + "px";
      } else {
        PosY -= speed;
        player.style.top = PosY + "px";
      }
    }
    if (PosX + playerCenter * 2 < limitX) {
      if (limitX - (PosX + playerCenter * 2) > speed) {
        PosX += speed;
        player.style.left = PosX + "px";
      } else {
        PosX += limitX - (PosX + playerCenter * 2);
        player.style.left = PosX + "px";
      }
    }
  } else if (userInputs["ArrowRight"] && userInputs["ArrowDown"]) {
    inputText.innerHTML = "Input: ↘️";
    if (PosX + playerCenter * 2 < limitX) {
      if (limitX - (PosX + playerCenter * 2) > speed) {
        PosX += speed;
        player.style.left = PosX + "px";
      } else {
        PosX += limitX - (PosX + playerCenter * 2);
        player.style.left = PosX + "px";
      }
    }
    if (PosY + playerCenter * 2 < limitY) {
      if (limitY - (PosY + playerCenter * 2) > speed) {
        PosY += speed;
        player.style.top = PosY + "px";
      } else {
        PosY += limitY - (PosY + playerCenter * 2);
        player.style.top = PosY + "px";
      }
    }
  } else if (userInputs["ArrowDown"] && userInputs["ArrowLeft"]) {
    inputText.innerHTML = "Input: ↙️";
    if (PosY + playerCenter * 2 < limitY) {
      if (limitY - (PosY + playerCenter * 2) > speed) {
        PosY += speed;
        player.style.top = PosY + "px";
      } else {
        PosY += limitY - (PosY + playerCenter * 2);
        player.style.top = PosY + "px";
      }
    }
    if (PosX > 0) {
      if (PosX - speed < 0) {
        PosX = 0;
        player.style.left = PosX + "px";
      } else {
        PosX -= speed;
        player.style.left = PosX + "px";
      }
    }
  } else if (userInputs["ArrowLeft"] && userInputs["ArrowUp"]) {
    inputText.innerHTML = "Input: ↖️";
    if (PosX > 0) {
      if (PosX - speed < 0) {
        PosX = 0;
        player.style.left = PosX + "px";
      } else {
        PosX -= speed;
        player.style.left = PosX + "px";
      }
    }
    if (PosY > 0) {
      if (PosY - speed < 0) {
        PosY = 0;
        player.style.top = PosY + "px";
      } else {
        PosY -= speed;
        player.style.top = PosY + "px";
      }
    }
  } else if (userInputs["ArrowUp"]) {
    inputText.innerHTML = "Input: ⬆️";
    if (PosY > 0) {
      if (PosY - speed < 0) {
        PosY = 0;
        player.style.top = PosY + "px";
      } else {
        PosY -= speed;
        player.style.top = PosY + "px";
      }
    }
  } else if (userInputs["ArrowRight"]) {
    inputText.innerHTML = "Input: ➡️";
    if (PosX + playerCenter * 2 < limitX) {
      if (limitX - (PosX + playerCenter * 2) > speed) {
        PosX += speed;
        player.style.left = PosX + "px";
      } else {
        PosX += limitX - (PosX + playerCenter * 2);
        player.style.left = PosX + "px";
      }
    }
  } else if (userInputs["ArrowDown"]) {
    inputText.innerHTML = "Input: ⬇️";
    if (PosY + playerCenter * 2 < limitY) {
      if (limitY - (PosY + playerCenter * 2) > speed) {
        PosY += speed;
        player.style.top = PosY + "px";
      } else {
        PosY += limitY - (PosY + playerCenter * 2);
        player.style.top = PosY + "px";
      }
    }
  } else if (userInputs["ArrowLeft"]) {
    inputText.innerHTML = "Input: ⬅️";
    if (PosX > 0) {
      if (PosX - speed < 0) {
        PosX = 0;
        player.style.left = PosX + "px";
      } else {
        PosX -= speed;
        player.style.left = PosX + "px";
      }
    }
  } else {
    inputText.innerHTML = "Input: 🟦";
  }

  playerPosText.innerHTML =
    "_Y: " + PosY.toFixed(2) + "<br>X: " + PosX.toFixed(2);
}

function draw(dt, runtime) {
  // console.log("Dt", dt);
  updateStats(dt, runtime);
}

////////////////////////////////
// FUNCTIONS
////////////////////////////////
function updateStats(dt, runtime) {
  time.innerHTML = "Time: " + (runtime / 1000).toFixed(2) + "s";
  fpsText.innerHTML = "FPS: " + Math.round(1 / dt);
}
