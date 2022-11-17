import Item from "./item.js";
import { randomIntFromInterval } from "../functions.js";
import {
  item_margin_x,
  trash_scale,
  rotation_min,
  rotation_max,
} from "../config.js";

export default class Trash extends Item {
  constructor(id, map) {
    super(id, map);

    // spawn X,Y limits
    this.margin_x = item_margin_x;
    this.min_y;
    this.max_y;

    this.item_scale = trash_scale;
    this.trash_type;
  }

  add() {
    super.add();

    const trash_type = randomIntFromInterval(0, 11);
    switch (trash_type) {
      case 0:
        this.setTrashType(65, 25, 0.16, 0.65, "water_bottle");
        break;
      case 1:
        this.setTrashType(80, 30, 0.26, 0.985, "wine_bottle");
        break;
      case 2:
        this.setTrashType(40, 30, 0.35, 0.85, "detergent");
        break;
      case 3:
        this.setTrashType(35, 30, 0.28, 0.8, "detergent_2");
        break;
      case 4:
        this.setTrashType(30, 45, 0.3, 0.99, "soda_can");
        break;
      case 5:
        this.setTrashType(60, 50, 0.63, 0.69, "food_can");
        break;
      case 6:
        this.setTrashType(43, 45, 0.63, 0.9, "soda_can_2");
        break;
      case 7:
        this.setTrashType(60, 35, 0.63, 0.9, "food_can_2");
        break;
      case 8:
        this.setTrashType(22, 16.3, 0.76, 0.98, "nuclear");
        break;
      case 9:
        this.setTrashType(70, 35, 0.16, 0.4, "spray");
        break;
      case 10:
        this.setTrashType(50, 55, 0.85, 0.99, "mug");
        break;
      case 11:
        this.setTrashType(58, 40, 0.15, 0.7, "plastic_cup");
        break;
    }

    // set id and class
    this.dom.setAttribute("id", this.id);
    this.dom.setAttribute("class", "trash");

    // set item image
    const img = "../../../media/game1_assets/trash/" + trash_type + ".png";
    this.dom.style.backgroundImage = "url(" + img + ")";

    // set item size
    this.width = (this.map_w / this.size_x) * this.item_scale;
    this.height = (this.map_h / this.size_y) * this.item_scale;

    // generate horizontal pos
    const min_x = this.map_w * this.margin_x;
    const max_x = this.map_w - this.map_w * this.margin_x - this.width;
    this.x = randomIntFromInterval(min_x, max_x);

    // generate vetical pos
    const min_y = this.map_h * this.min_y;
    const max_y = this.map_h * this.max_y - this.height;
    this.y = randomIntFromInterval(min_y, max_y);

    // generate item rotation
    const rotation = randomIntFromInterval(rotation_min, rotation_max);
    this.dom.style.transform = "rotate(" + rotation + "deg)";

    this.map.appendChild(this.dom);
    super.draw();
  }

  setTrashType(size_x, size_y, min_y, max_y, trash_type) {
    this.size_x = size_x;
    this.size_y = size_y;

    this.min_y = min_y;
    this.max_y = max_y;

    this.trash_type = trash_type;
  }
}
