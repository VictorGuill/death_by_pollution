export default class Ui {
  constructor(id) {
    this.id = id;
    this.ui = document.createElement("div");
  }

  // set iu div attributes and append to DOM
  add() {
    // add ui container
    this.ui.setAttribute("id", this.id);
    document.body.appendChild(this.ui);

    // add ui trash counter
    const trash_text = document.createElement("p");
    trash_text.setAttribute("id", "trashText");
    trash_text.innerHTML = "trash: ";
    this.ui.appendChild(trash_text);

    // add game name
    const game_text = document.createElement("p");
    game_text.setAttribute("id", "game_text");
    game_text.innerHTML = "SUPER SCUBA";
    game_text.style.color = "#ea5000";
    this.ui.appendChild(game_text);

    // add timer
    const timer_text = document.createElement("p");
    timer_text.setAttribute("id", "timer_text");
    this.ui.appendChild(timer_text);
  }

  // removes div from DOM
  remove() {
    this.ui.remove();
  }

  updateValues(player, gameplayTimeLeft) {
    const trash_text = document.getElementById("trashText");
    trash_text.innerHTML = "score: " + player.trash_collected;

    timer_text.innerHTML = secondsToTime(gameplayTimeLeft) + "s";
    +"s";
  }
}

function secondsToTime(e) {
  const m = Math.floor((e % 3600) / 60)
      .toString()
      .padStart(2, "0"),
    s = Math.floor(e % 60)
      .toString()
      .padStart(2, "0");

  return m + ":" + s;
  //return `${h}:${m}:${s}`;
}
