////////////////////////////////
// TRASH PARAMETERS

let trash_scale_x = 30;
let trash_scale_y = 30;

export default class Trash {
  constructor(id, map) {
    this.id = id;
    this.map = document.getElementById(map.id);

    this.trash_type;

    this.width = 0;
    this.height = 0;

    this.x = 0;
    this.y = 0;

    this.limit_x = 0;
    this.limit_y = 0;

    this.trashDOM = document.createElement("div");

    this.add();
  }

  // create div with object id and appends to DOM
  add() {
    let map_width = this.map.getBoundingClientRect().width;
    let map_height = this.map.getBoundingClientRect().height;

    this.trashDOM.setAttribute("id", this.id);
    this.trashDOM.setAttribute("class", "trash");
    this.map.appendChild(this.trashDOM);

    this.width = map_width / trash_scale_x;
    this.height = map_height / trash_scale_y;

    this.x = randomIntFromInterval(0, map_width - this.width);
    this.y = randomIntFromInterval(
      map_height * 0.225,
      map_height - this.height
    );

    this.limit_x = map_width;
    this.limit_y = map_height;

    this.trash_type = randomIntFromInterval(1, 4);

    switch (this.trash_type) {
      case 1:
        this.trashDOM.style.backgroundColor = "red";
        break;
      case 2:
        this.trashDOM.style.backgroundColor = "yellow";
        break;
      case 3:
        this.trashDOM.style.backgroundColor = "green";
        break;
      case 4:
        this.trashDOM.style.backgroundColor = "purple";
        break;
    }

    this.draw();
  }

  // change css visual values
  draw() {
    this.trashDOM.style.top = this.y + "px";
    this.trashDOM.style.left = this.x + "px";

    this.trashDOM.style.width = this.width + "px";
    this.trashDOM.style.height = this.height + "px";
  }

  // sets new player height and width
  Resize() {
    let map_width = this.map.getBoundingClientRect().width;
    let map_height = this.map.getBoundingClientRect().height;

    this.x = (this.x / this.limit_x) * map_width;
    this.y = (this.y / this.limit_y) * map_height;

    this.limit_x = map_width;
    this.limit_y = map_height;

    this.width = map_width / trash_scale_x;
    this.height = map_height / trash_scale_y;

    this.draw();
  }
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
