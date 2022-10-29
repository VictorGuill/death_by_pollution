import userInput from "./inputs.js";

export default class Player {
  constructor(id, map) {
    this.id = id;
    this.map_id = map.id;

    this.x = 0;
    this.y = 0;

    this.vel_x = 0;
    this.vel_y = 0;

    this.width = 0;
    this.height = 0;

    this.add();
  }

  // create div with object id and appends to DOM
  add() {
    const map = document.getElementById(this.map_id);
    const player = document.createElement("div");

    player.setAttribute("id", this.id);
    map.appendChild(player);

    this.x = player.offsetLeft;
    this.y = player.offsetTop;

    this.width = parseFloat(player.clientWidth);
    this.height = parseFloat(player.clientHeight);
  }

  // change css visual values
  draw() {
    const player = document.getElementById(this.id);

    player.style.top = this.y + "px";
    player.style.left = this.x + "px";
  }

  move(dt, accel, top_speed, friction, map) {
    if (userInput["ArrowRight"]) {
      this.vel_x = this.calcVel(this.vel_x + accel, top_speed);
    }

    if (userInput["ArrowLeft"]) {
      this.vel_x = this.calcVel(this.vel_x + -accel, top_speed);
    }

    if (userInput["ArrowDown"]) {
      this.vel_y = this.calcVel(this.vel_y + accel, top_speed);
    }

    if (userInput["ArrowUp"]) {
      this.vel_y = this.calcVel(this.vel_y + -accel, top_speed);
    }

    if (
      (!userInput["ArrowRight"] && !userInput["ArrowLeft"]) ||
      (userInput["ArrowRight"] && userInput["ArrowLeft"])
    ) {
      this.vel_x = this.calcFriction(this.vel_x, friction);
    }

    if (
      (!userInput["ArrowDown"] && !userInput["ArrowUp"]) ||
      (userInput["ArrowDown"] && userInput["ArrowUp"])
    ) {
      this.vel_y = this.calcFriction(this.vel_y, friction);
    }

    this.x += this.vel_x * dt;
    this.y += this.vel_y * dt;

    // try to simplify below
    if (this.x < 0) {
      this.x = 0;
      this.vel_x = 0;
    } else if (this.x + this.width > map.width) {
      this.x = map.width - this.width;
      this.vel_x = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.vel_y = 0;
    } else if (this.y + this.height > map.height) {
      this.y = map.height - this.height;
      this.vel_y = 0;
    }

    this.draw();
  }

  calcVel(vel, top_speed) {
    // if velocity in positive is less than top speed
    if (Math.abs(vel) < top_speed) {
      return vel;
    }
    // if we reach top speed, match direction
    if (vel < 0) {
      return -top_speed;
    } else {
      return top_speed;
    }
  }

  calcFriction(vel, friction) {
    if (vel - friction > 0) {
      return vel - friction;
    } else if (vel + friction < 0) {
      return vel + friction;
    } else {
      return 0;
    }
  }
}
