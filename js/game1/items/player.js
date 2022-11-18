import Item from "./item.js";
import * as cfg from "../config.js";

import {
  player_scale,
  diagonal_speed_limit,
  player_min_y,
  player_max_y,
  player_margin_x,
  accel,
  top_speed,
  friction,
} from "../config.js";

export default class Player extends Item {
  constructor(id, map) {
    super(id, map);
    this.trash_type;

    // player size and scale
    this.size_x = 12;
    this.size_y = 14.6;
    this.item_scale = player_scale;

    //speed values
    this.accel = accel;
    this.top_speed = top_speed;
    this.friction = friction;

    // player speed
    this.vel_x = 0;
    this.vel_y = 0;

    // player stats
    this.trash_collected = 0;
    this.perks = [];
  }

  add() {
    super.add();

    // overwrite super set rotation
    this.dom.style.transform = "rotate(0deg)";

    // set item image/
    const img_path = "../../../media/game1_assets/player.gif";
    this.dom.style.backgroundImage = "url(" + img_path + ")";

    // Set player in center
    this.x = this.map_w / 2 - this.width / 2;
    this.y = this.map_h / 2 - this.height / 2;

    super.draw();
  }

  move(dt, input) {
    // frame independency to acceletarion and friction
    let accel = this.accel * dt;
    let top_speed = this.top_speed;
    let friction = this.friction * dt;

    // values depend on map size, so it's resizable
    accel *= this.map_w / 1000;
    top_speed *= this.map_w / 1000;
    friction *= this.map_w / 1000;

    if (input["ArrowUp"] && input["ArrowRight"]) {
      top_speed *= diagonal_speed_limit;
    } else if (input["ArrowRight"] && input["ArrowDown"]) {
      top_speed *= diagonal_speed_limit;
    } else if (input["ArrowDown"] && input["ArrowLeft"]) {
      top_speed *= diagonal_speed_limit;
    } else if (input["ArrowLeft"] && input["ArrowUp"]) {
      top_speed *= diagonal_speed_limit;
    }

    if (
      (!input["ArrowRight"] && !input["ArrowLeft"]) ||
      (input["ArrowRight"] && input["ArrowLeft"])
    ) {
      this.vel_x = this.calcFriction(this.vel_x, friction);
    }

    if (
      (!input["ArrowDown"] && !input["ArrowUp"]) ||
      (input["ArrowDown"] && input["ArrowUp"])
    ) {
      this.vel_y = this.calcFriction(this.vel_y, friction);
    }

    if (input["ArrowRight"]) {
      this.vel_x = this.calcVel(this.vel_x + accel, top_speed);
      this.dom.style.transform = "scaleX(1)";
    }

    if (input["ArrowLeft"]) {
      this.vel_x = this.calcVel(this.vel_x + -accel, top_speed);
      this.dom.style.transform = "scaleX(-1)";
    }

    if (input["ArrowDown"]) {
      this.vel_y = this.calcVel(this.vel_y + accel, top_speed);
    }

    if (input["ArrowUp"]) {
      this.vel_y = this.calcVel(this.vel_y + -accel, top_speed);
    }

    // apply new position
    this.x += this.vel_x * dt;
    this.y += this.vel_y * dt;

    // limit new position if not inside map
    if (this.x < this.map_w * player_margin_x) {
      this.x = this.map_w * player_margin_x;
      this.vel_x = 0;
    } else if (
      this.x + this.width >
      this.map_w - this.map_w * player_margin_x
    ) {
      this.x = this.map_w - this.map_w * player_margin_x - this.width;
      this.vel_x = -0;
    }

    if (this.y < this.map_h * player_min_y) {
      this.y = this.map_h * player_min_y;
      this.vel_y = 0;
    } else if (this.y + this.height > this.map_h * player_max_y) {
      this.y = this.map_h * player_max_y - this.height;
      this.vel_y = -0;
    }

    super.draw();
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

  checkCollision(entity) {
    if (
      entity.x + entity.width >= this.x &&
      entity.x <= this.x + this.width &&
      entity.y + entity.height >= this.y &&
      entity.y <= this.y + this.height
    ) {
      return true;
    }
    return false;
  }

  perkCollected(perk, pickup_time) {
    if (typeof this.perks[perk.name] === "undefined") {
      this.perks[perk.name] = pickup_time + cfg.speed_boost_duration;
    } else {
      if (
        this.perks[perk.name] + cfg.speed_boost_duration - pickup_time >
        cfg.speed_boost_max
      ) {
        this.perks[perk.name] = pickup_time + cfg.speed_boost_max;
      } else {
        this.perks[perk.name] += cfg.speed_boost_duration;
      }
    }
  }

  applyPerk(runtime) {
    if (typeof this.perks["speed_boost"] !== "undefined") {
      if (this.perks["speed_boost"] > runtime) {
        console.log(
          "fast_speed_begin",
          Number(this.perks["speed_boost"] - runtime).toFixed(0)
        );
        this.accel = cfg.accel_boost;
        this.top_speed = cfg.top_speed_boost;
        this.friction = cfg.friction_boost;
      } else {
        this.accel = cfg.accel;
        this.top_speed = cfg.top_speed;
        this.friction = cfg.friction;

        delete this.perks["speed_boost"];
        console.log("normal_speed");
      }
    }
  }
}
