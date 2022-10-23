export default class Map {
  constructor(color, id) {
    this.color = color;
    this.id = id;

    // add map to html
    const map = document.createElement("div");
    map.setAttribute("id", this.id);
    map.style.backgroundColor = this.color;

    document.body.appendChild(map);

    this.height = map.getBoundingClientRect().height;
    this.width = map.getBoundingClientRect().width;
  }

  uppdateMapSize() {
    this.height = map.getBoundingClientRect().height;
    this.width = map.getBoundingClientRect().width;
  }
}
