const stats_values = ["fps", "time", "input", "y", "x", "playerPhysics"];

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
    fpsText.innerHTML = "FPS:  " + Math.round(1 / dt);

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
    // Ypos
    const posYtext = document.getElementById("y");
    posYtext.innerHTML = "-----------<br>Y: " + player.Ypos.toFixed(2);

    // Xpos
    const posXtext = document.getElementById("x");
    posXtext.innerHTML = "X: " + player.Xpos.toFixed(2);

    // Accel
    const physicsText = document.getElementById("playerPhysics");
    physicsText.innerHTML =
      "<br>Yvel: " +
      Math.abs(player.Yvel / dt).toFixed(3) +
      "<br>Xvel: " +
      Math.abs(player.Xvel / dt).toFixed(3) +
      "<br><br>Yacc: " +
      Math.abs(player.Yaccel / dt).toFixed(3) +
      "<br>Xacc: " +
      Math.abs(player.Xaccel / dt).toFixed(3);
  }
}
