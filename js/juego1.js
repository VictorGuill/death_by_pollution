isPlaying = true;

const casillas = getComputedStyle(document.documentElement).getPropertyValue(
  "--casillas"
);

let xPos = Math.round(casillas / 2);
let yPos = Math.round(casillas / 2);

createPlayer();

moveUp = false;

document.onkeydown = (e) => {
  e = e || window.event;
  if (e.keyCode === 38) {
    //up
    if (xPos > 0) {
      moveUp = true;
    }
  } else if (e.keyCode === 40) {
    //down
    if (xPos < casillas) {
      xPos++;
      player.style.gridRow = formatPosition(xPos);
    }
  } else if (e.keyCode === 37) {
    //left
    if (yPos > 0) {
      yPos--;
      player.style.gridColumn = formatPosition(yPos);
    }
  } else if (e.keyCode === 39) {
    //right
    if (yPos < casillas) {
      yPos++;
      player.style.gridColumn = formatPosition(yPos);
    }
  } else if (e.keyCode === 27) {
    //esc
    isPlaying = false;
  }
};

function createPlayer() {
  const player = document.createElement("div");
  player.setAttribute("id", "player");

  player.style.gridColumn = formatPosition(xPos);
  player.style.gridRow = formatPosition(yPos);

  map.appendChild(player);
}

function formatPosition(pos) {
  return pos + " / " + (pos + 1);
}

// GameLoop

setInterval(funsionsita, 100);
funsionsita();
function funsionsita() {
  console.log(moveUp);
  if (moveUp) {
    moveUp = false;
  }
}
