import Item from "./item.js";
import { randomIntFromInterval } from "../functions.js";
import { item_margin_x, trash_scale } from "../config.js";

export default class Trash extends Item {
  constructor(id, map) {
    super(id, map);

    // spawn X,Y limits
    this.margin_x = item_margin_x;
    this.min_y;
    this.max_y;

    this.go_to_player = false;

    this.scale = trash_scale;
  }

  add() {
    this.num = randomIntFromInterval(0, 11);

    switch (this.num) {
      case 0:
        this.setSizePosName(65, 25, 0.16, 0.65, "water_bottle");
        break;
      case 1:
        this.setSizePosName(90, 30, 0.26, 0.985, "wine_bottle");
        break;
      case 2:
        this.setSizePosName(40, 30, 0.35, 0.85, "detergent");
        break;
      case 3:
        this.setSizePosName(35, 30, 0.28, 0.8, "detergent_2");
        break;
      case 4:
        this.setSizePosName(30, 45, 0.3, 0.99, "soda_can");
        break;
      case 5:
        this.setSizePosName(60, 50, 0.63, 0.69, "food_can");
        break;
      case 6:
        this.setSizePosName(43, 45, 0.63, 0.9, "soda_can_2");
        break;
      case 7:
        this.setSizePosName(60, 35, 0.63, 0.9, "food_can_2");
        break;
      case 8:
        this.setSizePosName(22, 16.3, 0.76, 0.98, "nuclear");
        break;
      case 9:
        this.setSizePosName(70, 35, 0.16, 0.4, "spray");
        break;
      case 10:
        this.setSizePosName(50, 55, 0.85, 0.99, "mug");
        break;
      case 11:
        this.setSizePosName(58, 40, 0.15, 0.7, "plastic_cup");
        break;
    }

    super.add();
  }
}
