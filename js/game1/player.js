export default class Player {
  constructor(color, map) {
    this.color = color;
    this.id = "player";
    this.height = map.height / 25;
    this.width = map.width / 25;

    // Add player to html
    const player = document.createElement("div");
    player.setAttribute("id", this.id);
    player.style.backgroundColor = this.color;
    document.getElementById(map.id).appendChild(player);

    player.style.height = this.height + "px";
    player.style.width = this.width + "px";
  }
}
