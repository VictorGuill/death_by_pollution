const stats_values = [
  "fps",
  "time",
  "input",
  "x",
  "y",
  "playerPhysics",
  "playerProgress",
];
export default class Stats {
  constructor(id) {
    this.id = id;
    this.addToDOM();
  }
  // create div with texts to the DOM
  addToDOM() {
    // add container
    const statsContainer = document.createElement("div");
    statsContainer.setAttribute("id", this.id);
    document.body.appendChild(statsContainer);
    stats_values.forEach((element) => {
      const text = document.createElement("p");
      text.setAttribute("id", element);
      statsContainer.appendChild(text);
    });
  }
  updateValues(dt, runtime, userInput, player) {
    // fps
    const fpsText = document.getElementById("fps");
    fpsText.innerHTML = "FPS:  " + (10 / dt).toFixed(0);

    // time
    const timeText = document.getElementById("time");
    timeText.innerHTML = "Time: " + (runtime / 1000).toFixed(2) + "s";

    // user input
    const inputText = document.getElementById("input");
    let inputString = "Input: ";
    if (userInput["ArrowUp"] && userInput["ArrowRight"]) {
      inputString += "↗️";
    } else if (userInput["ArrowRight"] && userInput["ArrowDown"]) {
      inputString += "↘️";
    } else if (userInput["ArrowDown"] && userInput["ArrowLeft"]) {
      inputString += "↙️";
    } else if (userInput["ArrowLeft"] && userInput["ArrowUp"]) {
      inputString += "↖️";
    } else if (userInput["ArrowUp"]) {
      inputString += "⬆️";
    } else if (userInput["ArrowRight"]) {
      inputString += "➡️";
    } else if (userInput["ArrowDown"]) {
      inputString += "⬇️";
    } else if (userInput["ArrowLeft"]) {
      inputString += "⬅️";
    } else if (userInput[" "]) {
      inputString += "*️⃣";
    } else {
      inputString += "🟦";
    }
    inputText.innerHTML = inputString;

    // player stats
    // X position
    const posXtext = document.getElementById("x");
    posXtext.innerHTML =
      "-----------<br>X: " +
      player.x.toFixed(0) +
      "px " +
      ((player.x / player.limit_x) * 109).toFixed(0) +
      "% ";

    // Y position
    const posYtext = document.getElementById("y");
    posYtext.innerHTML =
      "Y: " +
      player.y.toFixed(0) +
      "px " +
      ((player.y / player.limit_y) * 108).toFixed(0) +
      "% ";

    // Accel
    const physicsText = document.getElementById("playerPhysics");
    physicsText.innerHTML =
      "X vel: " +
      Math.abs(player.vel_x).toFixed(0) +
      "px/s" +
      "<br>Y vel: " +
      Math.abs(player.vel_y).toFixed(0) +
      "px/s";

    // player progres
    const progressText = document.getElementById("playerProgress");
    progressText.innerHTML = "-----------<br>Trash: " + player.trash_collected;
  }
}
