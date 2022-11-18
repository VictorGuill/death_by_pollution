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
    this.num = randomIntFromInterval(0, 0);

    switch (this.num) {
      case 0:
        this.setSizePosName(30, 22, 0.16, 1, "speed_boost");
        break;
    }

    super.add();
  }
}
