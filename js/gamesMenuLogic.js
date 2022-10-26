const gamesContainer = document.getElementById("gamesContainer");

const game1 = document.getElementById("game1");
const game2 = document.getElementById("game2");
const game3 = document.getElementById("game3");

let elementsHover = {};

onmouseover = (e) => {
  changeBackground(e.target.id);
};

function changeBackground(id) {
  let color;

  switch (id) {
    case "game1":
      color = "red";
      break;
    case "game2":
      color = "green";
      break;
    case "game3":
      color = "blue";
      break;
    default:
      color = "#222222";
      break;
  }

  gamesContainer.style.backgroundColor = color;
}
