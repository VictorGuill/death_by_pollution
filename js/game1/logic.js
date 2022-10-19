const player = document.getElementById("player");

// create assoc array
let userInputs = {};

// Detects keydown/keyup presses.
// If keypress type is "keydown", stores true.
// Otherwise store false.
document.onkeydown = document.onkeyup = function (e) {
  userInputs[e.key] = e.type == "keydown";
};

// Game loop
setInterval(function () {
  movePlayer();
}, 1000 / 60);

function movePlayer() {
  const style = window.getComputedStyle(player, null);

  let currentPosX = parseInt(style.getPropertyValue("top"));
  let currentPosY = parseInt(style.getPropertyValue("left"));

  let speed = 10;

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

  /*
  if (userInputs["ArrowUp"] && userInputs["ArrowRight"]) {
    inputText.innerHTML = "↗";
  } else if (userInputs["ArrowRight"] && userInputs["ArrowDown"]) {
    inputText.innerHTML = "↘";
  } else if (userInputs["ArrowDown"] && userInputs["ArrowLeft"]) {
    inputText.innerHTML = "↙";
  } else if (userInputs["ArrowLeft"] && userInputs["ArrowUp"]) {
    inputText.innerHTML = "↖";
  } else if (userInputs["ArrowUp"]) {
    inputText.innerHTML = "⬆";
  } else if (userInputs["ArrowRight"]) {
    inputText.innerHTML = "➡";
  } else if (userInputs["ArrowDown"]) {
    inputText.innerHTML = "⬇";
  } else if (userInputs["ArrowLeft"]) {
    inputText.innerHTML = "⬅";
  } else if (userInputs[" "]) {
    inputText.innerHTML = "🌌";
  }
  */
}
