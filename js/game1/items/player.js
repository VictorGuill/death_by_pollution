import Item from "./item.js";
import { item_margin_x, player_scale } from "../config.js";

export default class Player extends Item {
  constructor(id, map) {
    super(id, map);

    // set size
    this.size_x = this.map_width / 12;
    this.size_y = this.map_height / 14.6;

    // spawn X,Y limits
    this.margin_x = item_margin_x;
    this.min_y;
    this.max_y;

    this.item_scale = player_scale;
    this.trash_type;
  }

  add() {
    super.add();
    // set id
    this.dom.setAttribute("id", this.id);

    // set item image
    const img = "../../../media/game1_assets/player.gif";
    this.dom.style.backgroundImage = "url(" + img + ")";

    // set item size
    this.width = this.size_x * this.item_scale;
    this.height = this.size_y * this.item_scale;

    // Set player in center
    this.x = this.map_width / 2 - this.width / 2;
    this.y = this.map_height / 2 - this.height / 2;

    this.map.appendChild(this.dom);
    super.draw();
  }
}
