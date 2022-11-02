export default class Map {
  constructor(id) {
    this.id = id;
    this.map = document.createElement("div");

    this.width = 0;
    this.height = 0;

    this.x = 0;
    this.y = 0;

    this.add();
  }

  // create div with object id and appends to DOM
  add() {
    this.map.setAttribute("id", this.id);
    this.map.setAttribute("class", "map-style");

    document.body.appendChild(this.map);

    let properties = this.map.getBoundingClientRect();

    this.x = properties.left;
    this.y = properties.top;

    this.width = properties.width;
    this.height = properties.height;
  }

  // sets new map height and width
  Resize() {
    let properties = this.map.getBoundingClientRect();

    this.width = properties.width;
    this.height = properties.height;
  }
}
