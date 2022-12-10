import { screen_size } from "../config.js";

export default class Screen {
  constructor(id) {
    this.id = id;
    this.dom = document.createElement("div");

    // screen width height
    const size = this.calcSize();
    this.width = size;
    this.height = size;
  }

  // set div attributes and append to DOM
  add() {
    this.dom.setAttribute("id", this.id);
    this.dom.setAttribute("class", "crt_borders"); //add old monitor borders
    document.body.appendChild(this.dom);

    // tutorial & credits screens (hidden by default)
    // const tutorial = document.createElement("div");
    // tutorial.setAttribute("id", "tutorialModal");
    // const credits = document.createElement("div");
    // credits.setAttribute("id", "creditsModal");
    // this.dom.appendChild(tutorial);
    // this.dom.appendChild(credits);

    this.resize();
  }

  // change css visual values
  draw() {
    this.dom.style.width = this.width + "px";
    this.dom.style.height = this.height + "px";
  }

  // sets new height and width
  resize() {
    const new_size = this.calcSize();
    this.width = new_size;
    this.height = new_size;

    this.draw();
  }

  // removes div from DOM
  remove() {
    this.dom.remove();
  }

  // returns user viewport width
  calcSize() {
    const v_width = document.documentElement.clientWidth;
    const v_height = document.documentElement.clientHeight;
    const v_min = Math.min(v_width, v_height);

    return v_min * screen_size;
  }
}
