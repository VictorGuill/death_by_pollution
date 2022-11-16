export default class Trash {
  constructor(id, map) {
    this.id = id;
    this.map = document.getElementById(map.id);

    this.x;
    this.y;

    this.width;
    this.height;

    this.scale_x;
    this.scale_y;
    this.global_scale;

    this.limit_x;
    this.limit_y;

    this.spawn_min_y = 0.16;
    this.spawn_max_y = 1;
    this.width_margins = 0.03;

    this.dom = document.createElement("div");

    this.add();
  }

  // set trash div attributes and append to DOM
  add() {
    let map_width = this.map.getBoundingClientRect().width;
    let map_height = this.map.getBoundingClientRect().height;

    this.width = (map_width / this.scale_x) * this.global_scale;
    this.height = (map_height / this.scale_y) * this.global_scale;
    this.x = randomIntFromInterval(
      this.width_margins,
      map_width - this.width_margins - this.width
    );
    this.y = randomIntFromInterval(
      map_height * this.spawn_min_y,
      map_height * this.spawn_max_y - this.height
    );

    this.dom.setAttribute("id", this.id);
    this.map.appendChild(this.dom);

    this.limit_x = map_width;
    this.limit_y = map_height;

    this.draw();
  }

  // change css visual values
  draw() {
    this.dom.style.top = this.y + "px";
    this.dom.style.left = this.x + "px";
    this.dom.style.width = this.width + "px";
    this.dom.style.height = this.height + "px";
  }

  // sets new player height and width
  Resize() {
    let map_width = this.map.getBoundingClientRect().width;
    let map_height = this.map.getBoundingClientRect().height;

    this.x = (this.x / this.limit_x) * map_width;
    this.y = (this.y / this.limit_y) * map_height;

    this.limit_x = map_width;
    this.limit_y = map_height;

    this.width = (map_width / this.scale_x) * trash_scale;
    this.height = (map_height / this.scale_y) * trash_scale;

    this.draw();
  }
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
