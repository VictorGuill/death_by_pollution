export default class Ui {
  constructor(id) {
    this.id = id;
    this.ui = document.createElement("div");

    this.add();
  }

  // create div with object id and appends to DOM
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
    game_text.innerHTML = "scuba-test";
    game_text.style.color = "#ea5000";
    this.ui.appendChild(game_text);

    // add timer
    const timer_text = document.createElement("p");
    timer_text.setAttribute("id", "timer_text");
    this.ui.appendChild(timer_text);
  }

  // sets new map height and width
  Resize() {
    let properties = this.ui.getBoundingClientRect();

    this.width = properties.width;
    this.height = properties.height;
  }

  updateValues(player, runtime) {
    const trash_text = document.getElementById("trashText");
    trash_text.innerHTML = "trash: " + player.trash_collected;

    timer_text.innerHTML = secondsToTime(runtime / 1000) + "s";
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
