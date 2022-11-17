export default class Item {
  constructor(id, map) {
    this.id = id;
    this.dom = document.createElement("div");

    // top left coords
    this.x;
    this.y;

    // item width height
    this.width;
    this.height;

    // sizes and scale
    this.size_x;
    this.size_y;
    this.item_scale = 1;

    // map info
    this.map;
    this.map_w = map.width;
    this.map_h = map.height;
  }

  add() {
    this.map = document.getElementById(map.id);
  }

  // change css visual values
  draw() {
    this.dom.style.top = this.y + "px";
    this.dom.style.left = this.x + "px";

    this.dom.style.width = this.width + "px";
    this.dom.style.height = this.height + "px";
  }

  // sets new height and width
  resize() {
    let new_map_width = this.map.getBoundingClientRect().width;
    let new_map_height = this.map.getBoundingClientRect().height;

    this.x = (this.x / this.map_w) * new_map_width;
    this.y = (this.y / this.map_h) * new_map_height;

    this.map_w = new_map_width;
    this.map_h = new_map_height;

    this.width = (this.map_w / this.size_x) * this.item_scale;
    this.height = (this.map_h / this.size_y) * this.item_scale;

    this.draw();
  }

  // removes div from DOM
  remove() {
    this.dom.remove();
  }
}
