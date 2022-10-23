export default class Map {
  constructor(color) {
    this.color = color;
    this.id = "map";

    // Add map to html
    const map = document.createElement("div");
    map.setAttribute("id", this.id);
    map.style.backgroundColor = this.color;
    document.body.appendChild(map);
    this.height = map.getBoundingClientRect().height;
    this.width = map.getBoundingClientRect().width;
  }
}
