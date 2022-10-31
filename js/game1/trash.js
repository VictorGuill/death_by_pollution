////////////////////////////////
// TRASH PARAMETERS

let trash_scale_x = 30;
let trash_scale_y = 30;

export default class Trash {
  constructor(id, map) {
    this.id = id;
    this.map_id = map.id;

    this.trash_type;

    this.width = 0;
    this.height = 0;

    this.x = 0;
    this.y = 0;

    this.add();
  }

  // create div with object id and appends to DOM
  add() {
    const map = document.getElementById(this.map_id);
    let map_width = map.getBoundingClientRect().width;
    let map_height = map.getBoundingClientRect().height;

    const trash = document.createElement("div");

    trash.setAttribute("id", this.id);
    trash.setAttribute("class", "trash");
    map.appendChild(trash);

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
        trash.style.backgroundColor = "red";
        break;
      case 2:
        trash.style.backgroundColor = "yellow";
        break;
      case 3:
        trash.style.backgroundColor = "green";
        break;
      case 4:
        trash.style.backgroundColor = "purple";
        break;
    }

    this.draw();
  }

  // change css visual values
  draw() {
    const player = document.getElementById(this.id);

    player.style.top = this.y + "px";
    player.style.left = this.x + "px";

    player.style.width = this.width + "px";
    player.style.height = this.height + "px";
  }

  //   // sets new map height and width
  //   Resize() {
  //     const map = document.getElementById(this.id);
  //     let properties = map.getBoundingClientRect();

  //     this.width = properties.width;
  //     this.height = properties.height;
  //   }
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
