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
      if (this.x + this.width + this.vel_x + accel < map.width) {
        this.vel_x = this.positiveVel(this.vel_x, accel, top_speed);
      } else {
        this.x = map.width - this.width;
      }
    } else {
      if (this.x + this.width + this.vel_x + accel < map.width) {
        this.vel_x = this.applyFriction(this.vel_x, friction);
      } else {
        this.x = map.width - this.width;
      }
    }

    if (userInput["ArrowLeft"]) {
      if (this.x + this.vel_x + accel > 0) {
        this.vel_x = this.negativeVel(this.vel_x, accel, top_speed);
      } else {
        this.x = 0;
      }
    } else {
      if (this.x + this.vel_x + accel > 0) {
        this.vel_x = this.applyFriction(this.vel_x, friction);
      } else {
        this.x = 0;
      }
    }

    if (userInput["ArrowDown"]) {
      if (this.y + this.height + this.vel_y + accel < map.height) {
        this.vel_y = this.positiveVel(this.vel_y, accel, top_speed);
      } else {
        this.y = map.height - this.height;
      }
    } else {
      if (this.y + this.height + this.vel_y + accel < map.height) {
        this.vel_y = this.applyFriction(this.vel_y, friction);
      } else {
        this.y = map.height - this.height;
      }
    }

    if (userInput["ArrowUp"]) {
      if (this.y + this.vel_y + accel > 0) {
        this.vel_y = this.negativeVel(this.vel_y, accel, top_speed);
      } else {
        this.y = 0;
      }
    } else {
      if (this.y + this.vel_y + accel > 0) {
        this.vel_y = this.applyFriction(this.vel_y, friction);
      } else {
        this.y = 0;
      }
    }

    this.x += this.vel_x * dt;
    this.y += this.vel_y * dt;

    this.draw();
  }

  positiveVel(vel, accel, top_speed) {
    if (vel + accel < top_speed) {
      vel += accel;
    } else {
      vel = top_speed;
    }
    return vel;
  }

  negativeVel(vel, accel, top_speed) {
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
