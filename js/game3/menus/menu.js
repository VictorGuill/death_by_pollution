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

  clickEvList(element){
    element.addEventListener("click", ()=>{this.keyEnterPressed = true; console.log("ENTER "+ this.keyEnterPressed);})
  }

  selectorUp() {
    this.selectorPos--;
    if (this.selectorPos < 0) {
      this.selectorPos = this.maxSelector;
    }
    this.keyUpPressed = true;

  }

  selectorDown() {
    this.selectorPos++;
    if (this.selectorPos > this.maxSelector) {
      this.selectorPos = 0;
    }
    this.keyDownPressed = true;

  }

  fadeOut(element, t){
    element.style.animation = "fade-out "+t+ "s forwards";
  }


  removeMenu(){
    this.element.remove();
    this.bgAdded = false;
}


/*   fadeOut(menuIn, menuOut, t) {
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
  } */

  checkKey() {
    if (this.gp.input["ArrowUp"] || this.gp.input["ArrowLeft"]) {
      if (!this.keyUpPressed) {
        console.log(this.selectorPos);
        this.selectorUp();
        console.log("UP: " + this.keyUpPressed);
        console.log(this.selectorPos);
      }
    } else {
      this.keyUpPressed = false;
    }

    if (this.gp.input["ArrowDown"] || this.gp.input["ArrowRight"]) {
      if (!this.keyDownPressed) {
        this.selectorDown();
        console.log("DOWN: " + this.keyDownPressed);
        console.log(this.selectorPos);  
      }
    } else {
      this.keyDownPressed = false;
    }

    if (this.gp.input["Enter"] || this.gp.input[" "]) {
      
      if (!this.keyEnterPressed) {
        this.keyEnterPressed = true;
        // console.log("ENTER" + this.keyEnterPressed);
      }
    } else {
      // console.log("ENTER" + this.keyEnterPressed);
      this.keyEnterPressed = false;
    }
    
  }
}
