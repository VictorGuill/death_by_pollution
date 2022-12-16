// import {titleState, playState, pauseState, endGameState, mainMenu, optionsMenu, tutorialMenu} from "./gamePanel.js";

export default class Menu {
  constructor(gp) {
    this.gp = gp;

    this.selectorPos = 0;
    this.maxSelector = 2;

    this.keyUpPressed = false;
    this.keyDownPressed = false;
  }

  selectorUp() {
    this.selectorPos--;
    if (this.selectorPos < 0) {
        this.selectorPos = this.maxSelector;
    }
    this.keyUpPressed = true;
    console.log("UP: "+this.keyUpPressed);
    console.log(this.selectorPos);
  }

  selectorDown() {
    this.selectorPos++;
    if (this.selectorPos > this.maxSelector) {
      this.selectorPos = 0;
    }
    this.keyDownPressed = true;
    console.log("DOWN: "+this.keyDownPressed);
    console.log(this.selectorPos);
  }

  removeMenu(){
    this.element.remove();
  }

  checkKey() {
    if (this.gp.input["ArrowUp"] || this.gp.input["ArrowLeft"]) {
        if (!this.keyUpPressed) {
          this.selectorUp();
        } 
    } else  {
        this.keyUpPressed = false;
    }

    if (this.gp.input["ArrowDown"] || this.gp.input["ArrowRight"]) {
        if (!this.keyDownPressed) {
        this.selectorDown();
        }
    } else {
        this.keyDownPressed = false;
    }
  }
}
