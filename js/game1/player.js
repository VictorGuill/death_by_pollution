export default class Player {
  constructor(color, map) {
    this.color = color;
    this.id = "player";

    this.limitY = map.height;
    this.limitX = map.width;

    let playerSize = Math.min(map.height, map.width) / 25;
    this.height = playerSize;
    this.width = playerSize;

    // this.Ypos = 0;
    // this.Xpos = 0;
    this.Ypos = map.height / 2 - playerSize / 2;
    this.Xpos = map.width / 2 - playerSize / 2;

    // add player to html
    const player = document.createElement("div");
    player.setAttribute("id", this.id);
    player.style.backgroundColor = this.color;

    document.getElementById(map.id).appendChild(player);

    // set player size
    player.style.height = this.height + "px";
    player.style.width = this.width + "px";

    // set player pos
    player.style.top = this.Ypos + "px";
    player.style.left = this.Xpos + "px";
  }

  UP(distance) {
    if (this.Ypos - distance > 0) {
      this.Ypos -= distance;
    } else {
      this.Ypos = 0;
    }
  }

  DOWN(distance) {
    if (this.Ypos + this.height + distance < this.limitY) {
      this.Ypos += distance;
    } else {
      this.Ypos = this.limitY - this.height;
    }
  }

  LEFT(distance) {
    if (this.Xpos - distance > 0) {
      this.Xpos -= distance;
    } else {
      this.Xpos = 0;
    }
  }

  RIGHT(distance) {
    if (this.Xpos + this.width + distance < this.limitX) {
      this.Xpos += distance;
    } else {
      this.Xpos = this.limitX - this.width;
    }
  }

  DRAW() {
    // set player pos
    player.style.top = this.Ypos + "px";
    player.style.left = this.Xpos + "px";

    // set player size
    player.style.height = this.height + "px";
    player.style.width = this.width + "px";

    // change coords info
    const coordText = document.getElementById("coords");
    coordText.innerHTML =
      "Y: " + this.Ypos.toFixed(3) + "<br>X: " + this.Xpos.toFixed(3);
  }

  updatePlayerLimits(height, width) {
    let newPosY = (this.Ypos / this.limitY) * height;
    let newPosX = (this.Xpos / this.limitX) * width;

    this.Ypos = newPosY;
    this.Xpos = newPosX;

    this.limitY = height;
    this.limitX = width;

    this.height = Math.min(height, width) / 25;
    this.width = Math.min(height, width) / 25;
  }
}
