export default class Map {
  constructor(id) {
    this.id = id;
    this.map = document.createElement("div");

    this.width = 0;
    this.height = 0;

    this.x = 0;
    this.y = 0;

    this.add();
  }

  // create div with object id and appends to DOM
  add() {
    this.map.setAttribute("id", this.id);
    this.map.setAttribute("class", "map-style");

    document.body.appendChild(this.map);

    let properties = this.map.getBoundingClientRect();

    this.x = properties.left;
    this.y = properties.top;

    this.width = properties.width;
    this.height = properties.height;
  }

  // sets new map height and width
  Resize() {
    let properties = this.map.getBoundingClientRect();

    this.width = properties.width;
    this.height = properties.height;
  }

  // isInside(entity) {
  //   let inside_left = entity.x > 0;
  //   let inside_right = entity.x + entity.width < map.width;
  //   let inside_top = entity.y > 0;
  //   let inside_bottom = entity.y + entity.height < map.height;

  //   return inside_left && inside_right && inside_top && inside_bottom;
  // }
}
