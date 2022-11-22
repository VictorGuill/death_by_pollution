import Item from "./item.js";
import { randomIntFromInterval } from "../functions.js";
import { item_margin_x, perk_scale } from "../config.js";

export default class Perk extends Item {
  constructor(id, map) {
    super(id, map);

    // spawn X,Y limits
    this.margin_x = item_margin_x;
    this.min_y;
    this.max_y;

    this.scale = perk_scale;
  }

  add() {
    this.num = randomIntFromInterval(1, 100);

    if (this.num <= 40) {
      this.num = 0;
      this.setSizePosName(30, 22, 0.16, 1, "speed_boost");
    } else if (this.num <= 80) {
      this.num = 1;
      this.setSizePosName(30, 28, 0.25, 1, "magnet");
    } else if (this.num <= 100) {
      this.num = 2;
      this.setSizePosName(30, 28, 0.25, 1, "gold_magnet");
    }

    super.add();
  }
}
