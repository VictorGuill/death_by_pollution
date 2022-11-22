import Item from "./item.js";

export default class Ship extends Item {
  constructor(id, map) {
    super(id, map);
  }

  add() {
    this.setSizePosName(9.5, 14, 0.16, 0.65, "ship");

    super.add();

    // overwrite super set rotation
    this.dom.style.transform = "rotate(0deg)";

    // set item image/
    const img_path = "../../../media/game1_assets/ship.png";
    this.dom.style.backgroundImage = "url(" + img_path + ")";

    // postion

    this.x = this.map_w / 10;
    this.y = this.map_w / 10;

    super.draw();
  }
}
