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
    // console.log("Inside: ", this.x > 0);
    // console.log("Inside: ", this.x + this.width < map.width);

    if (
      this.x > 0 &&
      this.x + this.width < map.width &&
      this.y > 0 &&
      this.y + this.height < map.height
    ) {
      if (userInput["ArrowRight"]) {
        this.vel_x = this.positiveMove(this.vel_x, accel, top_speed);
      }

      if (userInput["ArrowLeft"]) {
        this.vel_x = this.negativeMove(this.vel_x, accel, top_speed);
      }

      if (userInput["ArrowDown"]) {
        this.vel_y = this.positiveMove(this.vel_y, accel, top_speed);
      }

      if (userInput["ArrowUp"]) {
        this.vel_y = this.negativeMove(this.vel_y, accel, top_speed);
      }

      if (
        (!userInput["ArrowRight"] && !userInput["ArrowLeft"]) ||
        (userInput["ArrowRight"] && userInput["ArrowLeft"])
      ) {
        this.vel_x = this.applyFriction(this.vel_x, friction);
      }

      if (
        (!userInput["ArrowDown"] && !userInput["ArrowUp"]) ||
        (userInput["ArrowDown"] && userInput["ArrowUp"])
      ) {
        this.vel_y = this.applyFriction(this.vel_y, friction);
      }

      this.x += this.vel_x * dt;
      this.y += this.vel_y * dt;
    }

    this.draw();
  }

  positiveMove(vel, accel, top_speed) {
    if (vel + accel < top_speed) {
      vel += accel;
    } else {
      vel = top_speed;
    }
    return vel;
  }

  negativeMove(vel, accel, top_speed) {
    if (vel - accel > -top_speed) {
      vel -= accel;
    } else {
      vel = -top_speed;
    }
    return vel;
  }

  applyFriction(vel, friction) {
    if (vel - friction > 0) {
      vel -= friction;
    } else if (vel + friction < 0) {
      vel += friction;
    } else {
      vel = 0;
    }
    return vel;
  }
}
