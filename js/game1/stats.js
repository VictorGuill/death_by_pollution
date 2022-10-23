export default class Stats {
  constructor() {
    this.id = "stats";
    this.color = "#ffffff";
    this.delta = 0;
    this.runtime = 0;

    // add stats to html
    const statsContainer = document.createElement("div");
    statsContainer.setAttribute("id", this.id);
    statsContainer.style.backgroundColor = this.color;

    document.body.appendChild(statsContainer);

    const fpsText = document.createElement("p");
    fpsText.setAttribute("id", "fps");

    const timeText = document.createElement("p");
    timeText.setAttribute("id", "time");

    const inputText = document.createElement("p");
    inputText.setAttribute("id", "input");

    document.getElementById(this.id).appendChild(fpsText);
    document.getElementById(this.id).appendChild(timeText);
    document.getElementById(this.id).appendChild(inputText);
  }

  // updates stats info
  update(dt, runtime, userInput) {
    const fpsText = document.getElementById("fps");
    const timeText = document.getElementById("time");
    const inputText = document.getElementById("input");

    fpsText.innerHTML = "FPS: " + Math.round(1 / dt);
    timeText.innerHTML = "Time: " + (runtime / 1000).toFixed(2) + "s";

    if (userInput["ArrowUp"] && userInput["ArrowRight"]) {
      inputText.innerHTML = "Input: ↗️";
    } else if (userInput["ArrowRight"] && userInput["ArrowDown"]) {
      inputText.innerHTML = "Input: ↘️";
    } else if (userInput["ArrowDown"] && userInput["ArrowLeft"]) {
      inputText.innerHTML = "Input: ↙️";
    } else if (userInput["ArrowLeft"] && userInput["ArrowUp"]) {
      inputText.innerHTML = "Input: ↖️";
    } else if (userInput["ArrowUp"]) {
      inputText.innerHTML = "Input: ⬆️";
    } else if (userInput["ArrowRight"]) {
      inputText.innerHTML = "Input: ➡️";
    } else if (userInput["ArrowDown"]) {
      inputText.innerHTML = "Input: ⬇️";
    } else if (userInput["ArrowLeft"]) {
      inputText.innerHTML = "Input: ⬅️";
    } else if (userInput[" "]) {
      inputText.innerHTML = "Input: *️⃣";
    } else {
      inputText.innerHTML = "Input: 🟦";
    }
  }
}
