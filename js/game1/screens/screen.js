export default class Screen {
  constructor(id) {
    this.id = id;
    this.screen; // DOM reference

    this.width;
    this.height;
  }

  // set div attributes and append to DOM
  add() {
    this.screen = document.createElement("div");

    this.screen.setAttribute("id", this.id);
    this.screen.setAttribute("class", "screen");
    document.body.appendChild(this.screen);

    this.updateValues();
  }

  // removes div from DOM
  remove() {
    this.screen.remove();
  }

  // updates new div height and width
  updateValues() {
    this.width = this.getDomWidth();
    this.height = this.getDomHeight();
  }

  // returns div width
  getDomWidth() {
    return this.screen.getBoundingClientRect().width;
  }

  // returns div height
  getDomHeight() {
    return this.screen.getBoundingClientRect().height;
  }
}
