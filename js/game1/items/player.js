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
    this.map = map;

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
    switch (perk.name) {
      case "speed_boost":
        if (typeof this.perks["speed_boost"] === "undefined") {
          this.perks["speed_boost"] = pickup_time + cfg.speed_boost_duration;
        } else {
          if (
            this.perks["speed_boost"] + cfg.speed_boost_duration - pickup_time >
            cfg.speed_boost_max
          ) {
            this.perks["speed_boost"] = pickup_time + cfg.speed_boost_max;
          } else {
            this.perks["speed_boost"] += cfg.speed_boost_duration;
          }
        }
        break;
      case "magnet":
        if (typeof this.perks["magnet"] === "undefined") {
          this.perks["magnet"] = pickup_time + cfg.magnet_duration;
        } else {
          if (
            this.perks["magnet"] + cfg.magnet_duration - pickup_time >
            cfg.magnet_max
          ) {
            this.perks["magnet"] = pickup_time + cfg.magnet_max;
          } else {
            this.perks["magnet"] += cfg.magnet_duration;
          }
        }
        break;
      case "gold_magnet":
        if (typeof this.perks["gold_magnet"] === "undefined") {
          this.perks["gold_magnet"] = pickup_time + cfg.gold_magnet_duration;
        } else {
          if (
            this.perks["gold_magnet"] + cfg.gold_magnet_duration - pickup_time >
            cfg.gold_magnet_max
          ) {
            this.perks["gold_magnet"] = pickup_time + cfg.gold_magnet_max;
          } else {
            this.perks["gold_magnet"] += cfg.gold_magnet_duration;
          }
        }
        break;
    }
  }

  applyPerk(runtime, trash_items) {
    if (typeof this.perks["speed_boost"] !== "undefined") {
      if (this.perks["speed_boost"] > runtime) {
        this.accel = cfg.accel_boost;
        this.top_speed = cfg.top_speed_boost;
        this.friction = cfg.friction_boost;
        this.dom.style.animation = "rainbow 1s infinite linear";
      } else {
        this.accel = cfg.accel;
        this.top_speed = cfg.top_speed;
        this.friction = cfg.friction;

        delete this.perks["speed_boost"];

        this.dom.style.animation = "item-spawn 0s";
      }
    }

    if (typeof this.perks["magnet"] !== "undefined") {
      if (this.perks["magnet"] > runtime) {
        // console.log(
        //   "magnet_begin",
        //   Number(this.perks["magnet"] - runtime).toFixed(0)
        // );
        this.dom.style.setProperty("--opacityMagnetFX", "1");

        trash_items.forEach((trash) => {
          let testX;
          let testY;
          if (this.x < trash.x) {
            testX = trash.x;
          } else if (this.x > trash.x + trash.width) {
            testX = trash.x + trash.width;
          }

          if (this.y < trash.y) {
            testY = trash.y;
          } else if (this.y > trash.y + trash.height) {
            testY = trash.y + trash.height;
          }

          let distX = this.x - testX;
          let distY = this.y - testY;
          let distance = Math.sqrt(distX * distX + distY * distY);

          let range = this.width * 2;
          let speed = this.width / 10;

          if (distance < range || trash.go_to_player) {
            trash.go_to_player = true;

            // console.log("collision con " + trash.id);
            if (trash.x < this.x + this.width / 2) {
              trash.x += speed;
            }
            if (trash.x > this.x + this.width / 2) {
              trash.x -= speed;
            }

            if (trash.y < this.y + this.height / 2) {
              trash.y += speed;
            }
            if (trash.y > this.y + this.height / 2) {
              trash.y -= speed;
            }

            trash.draw();
          }
        });
      } else {
        delete this.perks["magnet"];
        this.dom.style.setProperty("--opacityMagnetFX", "0");
      }
    }

    if (typeof this.perks["gold_magnet"] !== "undefined") {
      if (this.perks["gold_magnet"] > runtime) {
        trash_items.forEach((trash) => {
          let testX;
          let testY;
          if (this.x < trash.x) {
            testX = trash.x;
          } else if (this.x > trash.x + trash.width) {
            testX = trash.x + trash.width;
          }

          if (this.y < trash.y) {
            testY = trash.y;
          } else if (this.y > trash.y + trash.height) {
            testY = trash.y + trash.height;
          }

          let distX = this.x - testX;
          let distY = this.y - testY;
          let distance = Math.sqrt(distX * distX + distY * distY);

          let range = this.width * 2000;
          let speed = this.width / 10;

          if (distance < range || trash.go_to_player) {
            trash.go_to_player = true;

            // console.log("collision con " + trash.id);
            if (trash.x < this.x + this.width / 2) {
              trash.x += speed;
            }
            if (trash.x > this.x + this.width / 2) {
              trash.x -= speed;
            }

            if (trash.y < this.y + this.height / 2) {
              trash.y += speed;
            }
            if (trash.y > this.y + this.height / 2) {
              trash.y -= speed;
            }

            trash.draw();
          }
        });
      } else {
        delete this.perks["gold_magnet"];
      }
    }
  }
}
