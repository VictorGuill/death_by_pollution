const playerScale = 5;
const topSpeed = 125;
const acceleration = 7;
const friction = 0.03;

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

    // physics properties
    this.Yvel = 0;
    this.Xvel = 0;
    this.Yaccel = 0;
    this.Xaccel = 0;
    this.acceleration = acceleration;

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

  movePhysics(dt, userInput) {
    let acceleration =
      this.acceleration * ((this.limitY + this.limitX / 2) * 0.001) * dt;

    let maxSpeed = topSpeed * ((this.limitY + this.limitX / 2) * 0.001) * dt;

    if (userInput["ArrowUp"]) {
      if (this.Ypos > 0) {
        this.Yaccel = -acceleration;
      } else {
        this.Ypos = 0;
        this.Yaccel = 0;
        this.Yvel = 0;
      }
    }
    if (userInput["ArrowDown"]) {
      if (this.Ypos + this.height < this.limitY) {
        this.Yaccel = acceleration;
      } else {
        this.Ypos = this.limitY - this.height;
        this.Yaccel = 0;
        this.Yvel = 0;
      }
    }
    if (userInput["ArrowLeft"]) {
      if (this.Xpos > 0) {
        this.Xaccel = -acceleration;
      } else {
        this.Xpos = 0;
        this.Xaccel = 0;
        this.Xvel = 0;
      }
    }
    if (userInput["ArrowRight"]) {
      if (this.Xpos + this.width < this.limitX) {
        this.Xaccel = acceleration;
      } else {
        this.Xpos = this.limitX - this.width;
        this.Xaccel = 0;
        this.Xvel = 0;
      }
    }

    if (!userInput["ArrowUp"] && !userInput["ArrowDown"]) {
      this.Yaccel = 0;
    }
    if (!userInput["ArrowLeft"] && !userInput["ArrowRight"]) {
      this.Xaccel = 0;
    }

    if (Math.abs(this.Yvel) <= maxSpeed) {
      this.Yvel += this.Yaccel;
    }
    if (Math.abs(this.Xvel) <= maxSpeed) {
      this.Xvel += this.Xaccel;
    }

    this.Yvel *= 1 - friction;
    this.Xvel *= 1 - friction;

    if (this.Ypos >= 0 && this.Ypos + this.height <= this.limitY) {
      this.Ypos += this.Yvel;
    } else if (this.Ypos < 0) {
      this.Ypos = 0;
      this.Yvel = 0;
      // console.log(this.Ypos);
    } else if (this.Ypos + this.height > this.limitY) {
      this.Ypos = this.limitY - this.height;
      this.Yvel = 0;
      // console.log(this.Ypos);
    }

    if (this.Xpos >= 0 && this.Xpos + this.width <= this.limitX) {
      this.Xpos += this.Xvel;
    } else if (this.Xpos < 0) {
      this.Xpos = 0;
      this.Xvel = 0;
      // console.log(this.Xpos);
    } else if (this.Xpos + this.width > this.limitX) {
      this.Xpos = this.limitX - this.width;
      this.Xvel = 0;
      // console.log(this.Xpos);
    }

    this.updateCSS();
  }

  move(dt, userInput) {
    let speed = 100 * ((this.limitY + this.limitX / 2) * 0.001) * dt;

    if (userInput["ArrowUp"]) {
      if (this.Ypos - speed > 0) {
        this.Ypos -= speed;
      } else {
        this.Ypos = 0;
      }
    }
    if (userInput["ArrowRight"]) {
      if (this.Xpos + this.width + speed < this.limitX) {
        this.Xpos += speed;
      } else {
        this.Xpos = this.limitX - this.width;
      }
    }
    if (userInput["ArrowDown"]) {
      if (this.Ypos + this.height + speed < this.limitY) {
        this.Ypos += speed;
      } else {
        this.Ypos = this.limitY - this.height;
      }
    }
    if (userInput["ArrowLeft"]) {
      if (this.Xpos - speed > 0) {
        this.Xpos -= speed;
      } else {
        this.Xpos = 0;
      }
    }

    this.updateCSS();
  }
}
