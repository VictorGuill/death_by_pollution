// background change

const gamesContainerWallpaper = document.getElementById(
  "gamesContainerWallpaper"
);

const game1 = document.getElementById("game1");
const game2 = document.getElementById("game2");
const game3 = document.getElementById("game3");

let elementsHover = {};

onmouseover = (e) => {
  const id = e.target.id;

  changeBackground(e.target.id);
};

game1.addEventListener("click", (e) => {
  window.location.href = "../games/game1.html";
});
game2.addEventListener("click", (e) => {
  window.location.href = "../games/game2.html";
});
game3.addEventListener("click", (e) => {
  window.location.href = "../games/game3.html";
});

function changeBackground(id) {
  let img_path = "../media/games_img/";

  switch (id) {
    case "game1":
      img_path = img_path + "game1_bg.jpg";
      break;
    case "game2":
      img_path = img_path + "game2_bg.jpg";
      break;
    case "game3":
      img_path = img_path + "game3_screenshot.png";
      break;
    default:
      img_path = img_path + "wallpaper_BW.jpg";
      break;
  }

  gamesContainerWallpaper.style.backgroundImage = "url(" + img_path + ")";
}

// info button panel

const infoContainer = document.getElementById("infoContainer");

function showInfo() {
  infoContainer.style.display = "inline-block";
}

function hideInfo() {
  infoContainer.style.display = "none";
}
