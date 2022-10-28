export default class Map {
  constructor(id) {
    this.id = id;

    this.width = 0;
    this.height = 0;

    this.x = 0;
    this.y = 0;

    this.addToDOM();
  }

  // create div with object id and appends to DOM
  addToDOM() {
    const map = document.createElement("div");

    map.setAttribute("id", this.id);
    map.setAttribute("class", "map-style");

    document.body.appendChild(map);

    let properties = map.getBoundingClientRect();

    this.x = properties.left;
    this.y = properties.top;

    this.width = properties.width;
    this.height = properties.height;
  }

  // sets new map height and width
  Resize() {
    const map = document.getElementById(this.id);
    let properties = map.getBoundingClientRect();

    this.width = properties.width;
    this.height = properties.height;
  }

  // isInside(entity) {}
}
