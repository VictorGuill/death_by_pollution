// import {titleState, playState, pauseState, endGameState, mainMenu, optionsMenu, tutorialMenu} from "./gamePanel.js";

export default class Menu {
  constructor(gp) {
    this.gp = gp;

    this.selectorPos = 0;
    this.maxSelector = 2;

    this.keyUpPressed = false;
    this.keyDownPressed = false;
    this.keyEnterPressed = false;

    this.bgAdded = false;
  }

  selectorUp() {
    this.selectorPos--;
    if (this.selectorPos < 0) {
      this.selectorPos = this.maxSelector;
    }
    this.keyUpPressed = true;
    console.log("UP: " + this.keyUpPressed);
    console.log(this.selectorPos);
  }

  selectorDown() {
    this.selectorPos++;
    if (this.selectorPos > this.maxSelector) {
      this.selectorPos = 0;
    }
    this.keyDownPressed = true;
    console.log("DOWN: " + this.keyDownPressed);
    console.log(this.selectorPos);
  }

  removeMenu() {
    this.element.remove();
  }

  resetBg() {
    this.bgAdded = false;
  }

  fadeOut(menuIn, menuOut, t) {
    const animOut = "fade-out " + t + "s ease-out forwards";
    const animIn = "fade-in " + t + "s ease-in forwards";
    menuIn.element.style.animation = animIn;
    //debug
    //ONLY HAPPENS WHEN STARTING IN DIFF MENU THAN MAIN
    if (menuOut != null || menuOut != undefined) {
      menuOut.element.style.animation = animOut;
      setTimeout(() => {
        menuOut.element.remove();
        menuOut.bgAdded = false;
      }, t * 1000);
    }
  }

  checkKey() {
    if (this.gp.input["ArrowUp"] || this.gp.input["ArrowLeft"]) {
      if (!this.keyUpPressed) {
        console.log(this.selectorPos);
        this.selectorUp();
      }
    } else {
      this.keyUpPressed = false;
    }

    if (this.gp.input["ArrowDown"] || this.gp.input["ArrowRight"]) {
      if (!this.keyDownPressed) {
        this.selectorDown();
      }
    } else {
      this.keyDownPressed = false;
    }

    if (this.gp.input["Enter"]) {
      if (!this.keyEnterPressed) {
        this.keyEnterPressed = true;
      }
    } else {
      this.keyEnterPressed = false;
    }
  }
}
