const playerScale = 5;
const speed_base = 1200;

export default class Player {
  constructor(id, map) {
    this.id = id;
    this.mapID = map.id;

    let size = Math.min(map.height, map.width) / (100 / playerScale);
    this.height = size;
    this.width = size;

    this.limitY = map.height;
    this.limitX = map.width;

    this.Ypos = map.height / 2 - size / 2;
    this.Xpos = map.width / 2 - size / 2;

    this.addToDOM();
  }

  // create div with object id and appends to DOM
  addToDOM() {
    const map = document.getElementById(this.mapID);
    const player = document.createElement("div");

    player.setAttribute("id", this.id);
    player.style.position = "absolute";
    player.style.backgroundColor = "#ffc300";

    map.appendChild(player);

    this.updateCSS();
  }

  // calculates new player values
  Resize(newHeight, newWidth) {
    this.Ypos = (this.Ypos / this.limitY) * newHeight;
    this.Xpos = (this.Xpos / this.limitX) * newWidth;

    this.limitY = newHeight;
    this.limitX = newWidth;

    let size = Math.min(newHeight, newWidth) / (100 / playerScale);
    this.height = size;
    this.width = size;

    this.updateCSS();
  }

  // change css visual values
  updateCSS() {
    const player = document.getElementById(this.id);

    player.style.height = this.height + "px";
    player.style.width = this.width + "px";
    player.style.top = this.Ypos + "px";
    player.style.left = this.Xpos + "px";
  }

  moveUP(dt) {
    let speed = speed_base * ((this.limitY + this.limitX / 2) * 0.001) * dt;

    if (this.Ypos - speed > 0) {
      this.Ypos -= speed;
    } else {
      this.Ypos = 0;
    }
  }

  moveDOWN(dt) {
    let speed = speed_base * ((this.limitY + this.limitX / 2) * 0.001) * dt;

    if (this.Ypos + this.height + speed < this.limitY) {
      this.Ypos += speed;
    } else {
      this.Ypos = this.limitY - this.height;
    }
  }

  moveLEFT(dt) {
    let speed = speed_base * ((this.limitY + this.limitX / 2) * 0.001) * dt;

    if (this.Xpos - speed > 0) {
      this.Xpos -= speed;
    } else {
      this.Xpos = 0;
    }
  }

  moveRIGHT(dt) {
    let speed = speed_base * ((this.limitY + this.limitX / 2) * 0.001) * dt;

    if (this.Xpos + this.width + speed < this.limitX) {
      this.Xpos += speed;
    } else {
      this.Xpos = this.limitX - this.width;
    }
  }
}
