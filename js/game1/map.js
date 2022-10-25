export default class Map {
  constructor(id, height, width, color) {
    this.id = id;

    let size = Math.min(height, width);
    this.height = size;
    this.width = size;
    this.color = color;

    this.addToDOM();
  }

  // create div with object id and appends to DOM
  addToDOM() {
    const map = document.createElement("div");

    map.setAttribute("id", this.id);
    map.style.position = "relative";
    map.style.backgroundColor = this.color;

    document.body.appendChild(map);

    this.updateCSS();

    let coords = map.getBoundingClientRect();

    this.Ypos = coords.top;
    this.Xpos = coords.left;
  }

  // calculates new height and width
  Resize(height, width) {
    let size = Math.min(height, width);
    this.height = size;
    this.width = size;

    this.updateCSS();
  }

  // change css visual values
  updateCSS() {
    const map = document.getElementById(this.id);

    map.style.height = this.height + "px";
    map.style.width = this.width + "px";
  }
}
