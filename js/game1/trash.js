////////////////////////////////
// TRASH PARAMETERS

const trash_scale = 1.4;

export default class Trash {
  constructor(id, map) {
    this.id = id;
    this.map = document.getElementById(map.id);

    this.width = 0;
    this.height = 0;

    this.scale_x;
    this.scale_y;

    this.x = 0;
    this.y = 0;

    this.limit_x = 0;
    this.limit_y = 0;

    this.height_range;
    this.width_marings;

    this.trashDOM = document.createElement("div");
    this.imgID;

    this.add();
  }

  // create div with object id and appends to DOM
  add() {
    let map_width = this.map.getBoundingClientRect().width;
    let map_height = this.map.getBoundingClientRect().height;

    const num = randomIntFromInterval(0, 11);
    const rotation = randomIntFromInterval(-50, 50);
    const img = "../../games/game1_assets/trash/" + num + ".png";

    switch (num) {
      case 0:
        this.scale_x = 65;
        this.scale_y = 25;
        this.height_range = [0.16, 0.65];
        this.width_margin = map_width * 0.03;
        break;
      case 1:
        this.scale_x = 80;
        this.scale_y = 30;
        this.height_range = [0.26, 0.985];
        this.width_margin = map_width * 0.03;
        break;
      case 2:
        this.scale_x = 40;
        this.scale_y = 30;
        this.height_range = [0.35, 0.85];
        this.width_margin = map_width * 0.05;
        break;
      case 3:
        this.scale_x = 35;
        this.scale_y = 30;
        this.height_range = [0.28, 0.8];
        this.width_margin = map_width * 0.07;
        break;
      case 4:
        this.scale_x = 30;
        this.scale_y = 45;
        this.height_range = [0.3, 0.99];
        this.width_margin = map_width * 0.07;
        break;
      case 5:
        this.scale_x = 60;
        this.scale_y = 50;
        this.height_range = [0.63, 0.9];
        this.width_margin = map_width * 0.023;
        break;
      case 6:
        this.scale_x = 43;
        this.scale_y = 45;
        this.height_range = [0.63, 0.9];
        this.width_margin = map_width * 0.07;
        break;
      case 7:
        this.scale_x = 60;
        this.scale_y = 35;
        this.height_range = [0.63, 0.9];
        this.width_margin = map_width * 0.023;
        break;
      case 8:
        this.scale_x = 22;
        this.scale_y = 16.3;
        this.height_range = [0.76, 0.98];
        this.width_margin = map_width * 0.07;
        break;
      case 9:
        this.scale_x = 70;
        this.scale_y = 35;
        this.height_range = [0.16, 0.4];
        this.width_margin = map_width * 0.023;
        break;
      case 10:
        this.scale_x = 50;
        this.scale_y = 55;
        this.height_range = [0.85, 0.99];
        this.width_margin = map_width * 0.023;
        break;
      case 11:
        this.scale_x = 58;
        this.scale_y = 40;
        this.height_range = [0.15, 0.7];
        this.width_margin = map_width * 0.023;
        break;
    }

    this.width = (map_width / this.scale_x) * trash_scale;
    this.height = (map_height / this.scale_y) * trash_scale;

    this.x = randomIntFromInterval(
      this.width_margin - this.width,
      map_width - this.width_margin
    );
    this.y = randomIntFromInterval(
      map_height * this.height_range[0],
      map_height * this.height_range[1] - this.height
    );

    this.trashDOM.style.backgroundImage = "url(" + img + ")";
    this.trashDOM.style.transform = "rotate(" + rotation + "deg)";

    this.trashDOM.setAttribute("id", this.id);
    this.trashDOM.setAttribute("class", "trash");
    this.trashDOM.setAttribute("class", "trash");
    this.map.appendChild(this.trashDOM);

    this.limit_x = map_width;
    this.limit_y = map_height;

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

    this.width = (map_width / this.scale_x) * trash_scale;
    this.height = (map_height / this.scale_y) * trash_scale;

    this.draw();
  }
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
