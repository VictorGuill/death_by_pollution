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
    this.ui.appendChild(game_text);
  }

  // sets new map height and width
  Resize() {
    let properties = this.ui.getBoundingClientRect();

    this.width = properties.width;
    this.height = properties.height;
  }

  updateValues(player) {
    const trash_text = document.getElementById("trashText");
    trash_text.innerHTML = "trash: " + player.trash_collected;
  }
}
