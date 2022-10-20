const player = document.getElementById("player");
const fps = document.getElementById("fps");
const time = document.getElementById("time");
const style = window.getComputedStyle(player, null);

// create assoc array
let userInputs = {};

// Detects keydown/keyup presses.
// If keypress type is "keydown", stores true.
// Otherwise store false.
document.onkeydown = document.onkeyup = function (e) {
  userInputs[e.key] = e.type == "keydown";
};

// Game loop

let lastTime;

function playAnimation(millis) {
  if (lastTime != null) {
    const delta = millis - lastTime;
    time.innerHTML = "Time: " + (millis / 1000).toFixed(1) + "s";
    fps.innerHTML = "FPS: " + ((1 / delta) * 1000).toFixed(2);
    movePlayer(delta);
  }



  lastTime = millis;
  window.requestAnimationFrame(playAnimation);
}
window.requestAnimationFrame(playAnimation);

function movePlayer(delta) {
  let currentPosX = parseInt(style.getPropertyValue("top"));
  let currentPosY = parseInt(style.getPropertyValue("left"));

  let speed = 0.6 * delta;

  if (userInputs["ArrowUp"] && userInputs["ArrowRight"]) {
    currentPosX -= speed;
    player.style.top = currentPosX + "px";
    currentPosY += speed;
    player.style.left = currentPosY + "px";
  } else if (userInputs["ArrowRight"] && userInputs["ArrowDown"]) {
    currentPosY += speed;
    player.style.left = currentPosY + "px";
    currentPosX += speed;
    player.style.top = currentPosX + "px";
  } else if (userInputs["ArrowDown"] && userInputs["ArrowLeft"]) {
    currentPosX += speed;
    player.style.top = currentPosX + "px";
    currentPosY -= speed;
    player.style.left = currentPosY + "px";
  } else if (userInputs["ArrowLeft"] && userInputs["ArrowUp"]) {
    currentPosY -= speed;
    player.style.left = currentPosY + "px";
    currentPosX -= speed;
    player.style.top = currentPosX + "px";
  } else if (userInputs["ArrowUp"]) {
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
  } else if (userInputs[" "]) {
  }
}

/*
document.getElementById("fps");

let lastTime;

function callback(millis) {
  if (lastTime) {
    update((millis - lastTime) / 1000);
  }
  lastTime = millis;
  requestAnimationFrame(callback);
}

function update(dt) {
  fps.innerHTML = dt;
}

callback();
*/
