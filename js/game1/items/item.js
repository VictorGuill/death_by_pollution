import { rotation_min_max } from "../config.js";

export default class Item {
  constructor(id, map) {
    this.id = id;
    this.map = document.getElementById(map.id);

    this.dom;
    this.img_path;

    this.width;
    this.height;

    this.x;
    this.y;

    this.scale_x;
    this.scale_y;
    this.global_scale;

    this.map_width;
    this.map_height;

    this.min_y = 0.16;
    this.max_y = 1;
    this.x_margins = 0.03;

    this.add();
  }

  // set div attributes and append to DOM
  add() {
    this.map_width = this.map.getBoundingClientRect().width;
    this.map_height = this.map.getBoundingClientRect().height;

    this.dom = document.createElement("div");

    this.width = (this.map_width / this.scale_x) * global_scale;
    this.height = (this.map_height / this.scale_y) * global_scale;

    const rotation = randomIntFromInterval(-rotation_min_max, rotation_min_max);
    this.perkDOM.style.transform = "rotate(" + rotation + "deg)";

    this.perkDOM.setAttribute("id", this.id);
    this.perkDOM.setAttribute("class", "perk");
    this.map.appendChild(this.dom);

    this.draw();
  }

  // change css visual values
  draw() {
    this.perkDOM.style.top = this.y + "px";
    this.perkDOM.style.left = this.x + "px";
    this.perkDOM.style.width = this.width + "px";
    this.perkDOM.style.height = this.height + "px";
  }

  // sets new height and width
  Resize() {
    let new_map_width = this.map.getBoundingClientRect().width;
    let new_map_height = this.map.getBoundingClientRect().height;

    this.x = (this.x / this.map_width) * new_map_width;
    this.y = (this.y / this.map_height) * new_map_height;

    this.map_width = new_map_width;
    this.map_height = new_map_height;

    this.width = (new_map_width / this.scale_x) * global_scale;
    this.height = (new_map_height / this.scale_y) * global_scale;

    this.draw();
  }
}
