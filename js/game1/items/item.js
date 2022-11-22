import { randomIntFromInterval } from "../functions.js";
import { rotation_min, rotation_max } from "../config.js";

export default class Item {
  constructor(id, map) {
    this.id = id;
    this.num;
    this.name;
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
    this.scale = 1;

    // map info
    this.map = map;
    this.map_w = map.width;
    this.map_h = map.height;
  }

  add() {
    this.map = document.getElementById(map.id);

    // get subclass name
    const type = this.constructor.name.toLocaleLowerCase();

    // set id and class
    this.dom.setAttribute("id", this.id);
    this.dom.setAttribute("class", type);

    // set item image/
    const img_path =
      "../../../media/game1_assets/" + type + "/" + this.num + ".png";
    this.dom.style.backgroundImage = "url(" + img_path + ")";

    // set item size
    this.width = (this.map_w / this.size_x) * this.scale;
    this.height = (this.map_h / this.size_y) * this.scale;

    // generate horizontal pos
    const min_x = this.map_w * this.margin_x;
    const max_x = this.map_w - this.map_w * this.margin_x - this.width;
    this.x = randomIntFromInterval(min_x, max_x);

    // generate vetical pos
    const min_y = this.map_h * this.min_y;
    const max_y = this.map_h * this.max_y - this.height;
    this.y = randomIntFromInterval(min_y, max_y);

    // generate item rotation
    const rotation = randomIntFromInterval(rotation_min, rotation_max);
    this.dom.style.transform = "rotate(" + rotation + "deg)";

    this.map.appendChild(this.dom);
    this.draw();
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

    this.width = (this.map_w / this.size_x) * this.scale;
    this.height = (this.map_h / this.size_y) * this.scale;

    this.draw();
  }

  setSizePosName(size_x, size_y, min_y, max_y, name) {
    this.size_x = size_x;
    this.size_y = size_y;

    this.min_y = min_y;
    this.max_y = max_y;

    this.name = name;
  }

  // removes div from DOM
  remove() {
    this.dom.remove();
  }
}
