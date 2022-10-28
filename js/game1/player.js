import userInput from "./inputs.js";

export default class Player {
  constructor(id, map) {
    this.id = id;
    this.map_id = map.id;

    this.x = 0;
    this.y = 0;

    this.vel_x = 0;
    this.vel_y = 0;

    this.add();
  }

  // create div with object id and appends to DOM
  add() {
    const map = document.getElementById(this.map_id);
    const player = document.createElement("div");

    player.setAttribute("id", this.id);
    map.appendChild(player);

    //el get computd srtle
    this.x = player.getBoundingClientRect().left;
    this.y = player.getBoundingClientRect().top;
  }

  // change css visual values
  draw() {
    const player = document.getElementById(this.id);

    player.style.top = this.y + "px";
    player.style.left = this.x + "px";
  }

  move(dt, accel, top_speed, friciton) {
    if (userInput["ArrowRight"]) {
      if (this.vel_x + accel < top_speed) {
        this.vel_x += accel;
      } else {
        this.vel_x = top_speed;
      }
    }

    if (userInput["ArrowLeft"]) {
      if (this.vel_x - accel > -top_speed) {
        this.vel_x -= accel;
      } else {
        this.vel_x = -top_speed;
      }
    }

    if (userInput["ArrowDown"]) {
      if (this.vel_y + accel < top_speed) {
        this.vel_y += accel;
      } else {
        this.vel_y = top_speed;
      }
    }

    if (userInput["ArrowUp"]) {
      if (this.vel_y - accel > -top_speed) {
        this.vel_y -= accel;
      } else {
        this.vel_y = -top_speed;
      }
    }

    if (
      (!userInput["ArrowRight"] && !userInput["ArrowLeft"]) ||
      (userInput["ArrowRight"] && userInput["ArrowLeft"])
    ) {
      if (this.vel_x - friciton > 0) {
        this.vel_x -= friciton;
      } else if (this.vel_x + friciton < 0) {
        this.vel_x += friciton;
      } else {
        this.vel_x = 0;
      }
    }

    if (
      (!userInput["ArrowDown"] && !userInput["ArrowUp"]) ||
      (userInput["ArrowDown"] && userInput["ArrowUp"])
    ) {
      if (this.vel_y - friciton > 0) {
        this.vel_y -= friciton;
      } else if (this.vel_y + friciton < 0) {
        this.vel_y += friciton;
      } else {
        this.vel_y = 0;
      }
    }

    this.x += this.vel_x * dt;
    this.y += this.vel_y * dt;

    this.draw();
  }
}
