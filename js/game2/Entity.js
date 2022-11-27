export default class Entity {
  constructor(id, type, colum_start, row_start) {
    this.id = id;
    this.type = type;

    this.doc = document.createElement("div");

    this.colum_start = colum_start;
    this.row_start = row_start;

    // set size depending on entity type
    switch (this.type) {
      case "start":
      case "end":
      case "tree":
      case "dropSpace":
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
    this.doc.style.gridColumn = this.colum_start + "/" + this.colum_end;
    this.doc.style.gridRow = this.row_start + "/" + this.row_end;

    // set text, id class
    if(this.type == 'start' || this.type == 'end'){
      this.doc.innerHTML = '<img src="../media/game2/objects/house.gif" width="60px" height="60px"/>';
    } else if (this.type == 'mountain') {
      this.doc.innerHTML = '<img src="../media/game2/objects/mount2.png" width="120px" height="60px"/>';
    } else if (this.type == 'tree') {
      this.doc.innerHTML = '<img src="../media/game2/objects/tree.png" width="60px" height="60px"/>';
    } else if (this.type == 'dropSpace') {
      this.doc.innerHTML = "";
    } else {
      this.doc.innerHTML = this.type;
    }
    this.doc.setAttribute("id", this.id);
    this.doc.setAttribute("class", this.type + " obstacle");

    // get map
    const map = document.querySelector("#map");
    map.appendChild(this.doc);
  }
}