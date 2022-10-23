export default class Stats {
  constructor() {
    this.id = "stats";
    this.color = "#ffffff";
    this.delta = 0;
    this.runtime = 0;

    // Add stats to html
    const statsContainer = document.createElement("div");
    statsContainer.setAttribute("id", this.id);
    statsContainer.style.backgroundColor = this.color;
    document.body.appendChild(statsContainer);

    const fpsText = document.createElement("p");
    fpsText.setAttribute("id", "fps");
    fpsText.innerHTML = "FPS: 0";

    const timeText = document.createElement("p");
    timeText.setAttribute("id", "time");
    timeText.innerHTML = "Time: 0s";

    const inputText = document.createElement("p");
    inputText.setAttribute("id", "input");
    inputText.innerHTML = "Input: 🟦";

    document.getElementById(this.id).appendChild(fpsText);
    document.getElementById(this.id).appendChild(timeText);
    document.getElementById(this.id).appendChild(inputText);
  }

  update(dt, runtime, userInputs) {
    const fpsText = document.getElementById("fps");
    const timeText = document.getElementById("time");
    const inputText = document.getElementById("input");

    fpsText.innerHTML = "FPS: " + Math.round(1 / dt);
    timeText.innerHTML = "Time: " + (runtime / 1000).toFixed(2) + "s";

    if (userInputs["ArrowUp"] && userInputs["ArrowRight"]) {
      inputText.innerHTML = "Input: ↗️";
    } else if (userInputs["ArrowRight"] && userInputs["ArrowDown"]) {
      inputText.innerHTML = "Input: ↘️";
    } else if (userInputs["ArrowDown"] && userInputs["ArrowLeft"]) {
      inputText.innerHTML = "Input: ↙️";
    } else if (userInputs["ArrowLeft"] && userInputs["ArrowUp"]) {
      inputText.innerHTML = "Input: ↖️";
    } else if (userInputs["ArrowUp"]) {
      inputText.innerHTML = "Input: ⬆️";
    } else if (userInputs["ArrowRight"]) {
      inputText.innerHTML = "Input: ➡️";
    } else if (userInputs["ArrowDown"]) {
      inputText.innerHTML = "Input: ⬇️";
    } else if (userInputs["ArrowLeft"]) {
      inputText.innerHTML = "Input: ⬅️";
    } else {
      inputText.innerHTML = "Input: 🟦";
    }
  }
}
