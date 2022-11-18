export default class Entity {
  constructor(id, type, colum_start, row_start) {
    this.id = id;
    this.type = type;

    this.dom = document.createElement("div");

    this.colum_start = colum_start;
    this.row_start = row_start;

    // set size depending on entity type
    switch (this.type) {
      case "start":
        this.height = 1;
        this.width = 1;
        break;
      case "end":
        this.height = 1;
        this.width = 1;
        break;
      case "tree":
        this.height = 1;
        this.width = 1;
        break;
      case "mountain":
        this.height = 1;
        this.width = 2;
        break;
    }

    // store entity ends to use it in collitions
    this.colum_end = this.colum_start + this.width;
    this.row_end = this.row_start + this.height;
  }

  add() {
    // set column and row start / end
    this.dom.style.gridColumn = this.colum_start + "/" + this.colum_end;
    this.dom.style.gridRow = this.row_start + "/" + this.row_end;

    // set text, id class
    this.dom.innerHTML = this.type;
    this.dom.setAttribute("id", this.id);
    this.dom.setAttribute("class", this.type + " obstacle");

    // get map
    const map = document.querySelector("#map");
    map.appendChild(this.dom);
  }
}
