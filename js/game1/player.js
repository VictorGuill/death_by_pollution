import userInput from "./inputs.js";

////////////////////////////////
// PLAYER PARAMETERS

let player_scale_x = 12;
let player_scale_y = 14.6;

////////////////////////////////

export default class Player {
  constructor(id, map) {
    this.id = id;
    this.map = document.getElementById(map.id);

    this.trash_collected = 0;

    this.x = 0;
    this.y = 0;

    this.vel_x = 0;
    this.vel_y = 0;

    this.width = 0;
    this.height = 0;

    this.limit_x = 0;
    this.limit_y = 0;

    this.playerDOM = document.createElement("div");

    this.add();
  }

  // create div with object id and appends to DOM
  add() {
    let map_width = this.map.getBoundingClientRect().width;
    let map_height = this.map.getBoundingClientRect().height;

    this.playerDOM.setAttribute("id", this.id);
    this.map.appendChild(this.playerDOM);

    this.width = map_width / player_scale_x;
    this.height = map_height / player_scale_y;

    this.x = map_width / 2 - this.width / 2;
    this.y = map_height / 2 - this.height / 2;

    this.limit_x = map_width;
    this.limit_y = map_height;

    this.draw();
  }

  // change css visual values
  draw() {
    this.playerDOM.style.top = this.y + "px";
    this.playerDOM.style.left = this.x + "px";

    this.playerDOM.style.width = this.width + "px";
    this.playerDOM.style.height = this.height + "px";
  }

  // sets new player height and width
  Resize() {
    let map_width = this.map.getBoundingClientRect().width;
    let map_height = this.map.getBoundingClientRect().height;

    this.x = (this.x / this.limit_x) * map_width;
    this.y = (this.y / this.limit_y) * map_height;

    this.limit_x = map_width;
    this.limit_y = map_height;

    this.width = map_width / player_scale_x;
    this.height = map_height / player_scale_y;

    this.draw();
  }

  move(dt, accel, top_speed, friction) {
    accel *= this.limit_x / 1000;
    top_speed *= this.limit_x / 1000;
    friction *= this.limit_x / 1000;

    let diagonal_speed_limit = 1.25;

    if (userInput["ArrowUp"] && userInput["ArrowRight"]) {
      top_speed /= diagonal_speed_limit;
    } else if (userInput["ArrowRight"] && userInput["ArrowDown"]) {
      top_speed /= diagonal_speed_limit;
    } else if (userInput["ArrowDown"] && userInput["ArrowLeft"]) {
      top_speed /= diagonal_speed_limit;
    } else if (userInput["ArrowLeft"] && userInput["ArrowUp"]) {
      top_speed /= diagonal_speed_limit;
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

    if (userInput["ArrowRight"]) {
      this.vel_x = this.calcVel(this.vel_x + accel, top_speed);

      this.playerDOM.style.transform = "scaleX(1)";
      // this.playerDOM.style.animation =
      //   "turn-right .5s cubic-bezier(0,1,.25,1) forwards";
    }

    if (userInput["ArrowLeft"]) {
      this.vel_x = this.calcVel(this.vel_x + -accel, top_speed);

      this.playerDOM.style.transform = "scaleX(-1)";
      // this.playerDOM.style.animation =
      //   "turn-left .5s cubic-bezier(0,1,.25,1) forwards";
    }

    if (userInput["ArrowDown"]) {
      this.vel_y = this.calcVel(this.vel_y + accel, top_speed);
    }

    if (userInput["ArrowUp"]) {
      this.vel_y = this.calcVel(this.vel_y + -accel, top_speed);
    }

    // apply new position
    this.x += this.vel_x * dt;
    this.y += this.vel_y * dt;

    // limit new position if not inside map
    let wallBounceForce = 0;
    if (this.x < 0) {
      this.x = 0;
      this.vel_x = wallBounceForce;
    } else if (this.x + this.width > this.limit_x) {
      this.x = this.limit_x - this.width;
      this.vel_x = -wallBounceForce;
    }

    if (this.y < this.limit_y * 0.14) {
      this.y = this.limit_y * 0.14;
      this.vel_y = wallBounceForce;
    } else if (this.y + this.height > this.limit_y) {
      this.y = this.limit_y - this.height;
      this.vel_y = -wallBounceForce;
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

  detectCollision(entity) {
    if (
      entity.x + entity.width >= this.x && // r1 right edge past r2 left
      entity.x <= this.x + this.width && // r1 left edge past r2 right
      entity.y + entity.height >= this.y && // r1 top edge past r2 bottom
      entity.y <= this.y + this.height
    ) {
      // r1 bottom edge past r2 top
      return true;
    }
    return false;
  }
}
