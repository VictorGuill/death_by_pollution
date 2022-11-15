////////////////////////////////
// PERK PARAMETERS

const perk_scale = 0.4;

export default class Perk {
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
    this.width_margins;

    this.perk_type;
    this.perkDOM = document.createElement("div");
    this.imgID;

    this.add();
  }

  // set trash div attributes and append to DOM
  add() {
    let map_width = this.map.getBoundingClientRect().width;
    let map_height = this.map.getBoundingClientRect().height;

    const rotation = randomIntFromInterval(-50, 50);
    const num = randomIntFromInterval(0, 0);
    // const img = "../../games/game1_assets/perks/" + num + ".png";

    this.scale_x = 10;
    this.scale_y = 10;
    this.height_range = [0.16, 1];
    this.width_margins = map_width * 0.03;

    switch (num) {
      case 0:
        this.perk_type = "speed_boost";
        this.perkDOM.style.backgroundColor = "red";
        break;
      case 1:
        this.perk_type = "magnet";
        this.perkDOM.style.backgroundColor = "green";
        break;
    }

    this.width = (map_width / this.scale_x) * perk_scale;
    this.height = (map_height / this.scale_y) * perk_scale;

    this.x = randomIntFromInterval(
      this.width_margins,
      map_width - this.width_margins - this.width
    );
    this.y = randomIntFromInterval(
      map_height * this.height_range[0],
      map_height * this.height_range[1] - this.height
    );

    // this.trashDOM.style.backgroundImage = "url(" + img + ")";
    this.perkDOM.style.transform = "rotate(" + rotation + "deg)";

    this.perkDOM.setAttribute("id", this.id);
    this.perkDOM.setAttribute("class", "perk");
    this.map.appendChild(this.perkDOM);

    this.limit_x = map_width;
    this.limit_y = map_height;

    this.draw();
  }

  // change css visual values
  draw() {
    this.perkDOM.style.top = this.y + "px";
    this.perkDOM.style.left = this.x + "px";
    this.perkDOM.style.width = this.width + "px";
    this.perkDOM.style.height = this.height + "px";
  }

  // sets new player height and width
  Resize() {
    let map_width = this.map.getBoundingClientRect().width;
    let map_height = this.map.getBoundingClientRect().height;

    this.x = (this.x / this.limit_x) * map_width;
    this.y = (this.y / this.limit_y) * map_height;

    this.limit_x = map_width;
    this.limit_y = map_height;

    this.width = (map_width / this.scale_x) * perk_scale;
    this.height = (map_height / this.scale_y) * perk_scale;

    this.draw();
  }
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
