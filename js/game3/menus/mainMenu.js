import { MAIN_MENU, PLAY_STATE, TUTORIAL_MENU } from "../main/gamePanel.js";
import Menu from "./menu.js";

const FADEOUT_TIME = 1;

export default class MainMenu extends Menu {
  constructor(gp) {
    super(gp);
    this.bgAdded = false;

    this.maxSelector = 1;

    this.playClick = false;
    this.exitClick = false;

    this.action = false;
  }

  addElement() {
    this.element = document.createElement("div");
    this.element.setAttribute("id", "mainMenu");
    this.gp.element.appendChild(this.element);
    this.bgAdded = true;
  }

  addTitle() {
    this.titleDiv = document.createElement("div");
    this.titleDiv.setAttribute("id", "title");
    const title = document.createElement("p");
    title.innerHTML = "SKY DIVE";
    this.titleDiv.appendChild(title);
    this.element.appendChild(this.titleDiv);
  }

  addOptions() {
    this.options = document.createElement("div");
    this.options.setAttribute("id", "mainMenuOptions");

    this.optionPlay = document.createElement("p");
    this.optionPlay.classList.add("optionPlay");
    this.optionPlay.style.cursor = "pointer";
    this.optionPlay.innerHTML = "PLAY";
    this.optionPlay.addEventListener("mouseover", ()=>{this.selectorPos = 0;})
    this.optionPlay.addEventListener("click", ()=>{this.playClick = true;})
    this.clickEvList(this.optionPlay);


    this.optionExit = document.createElement("p");
    this.optionExit.classList.add("optionExit");
    this.optionExit.style.cursor = "pointer";
    this.optionExit.innerHTML = "EXIT";
    this.optionExit.addEventListener("mouseover", ()=>{this.selectorPos = 1;})
    this.optionExit.addEventListener("click", ()=>{this.exitClick = true;})

    this.options.appendChild(this.optionPlay);
    this.options.appendChild(this.optionExit);
    this.element.appendChild(this.options);
  }

  addSelector() {
    this.selector = document.createElement("div");
    this.selector.setAttribute("id", "selector");
    this.selector.className = "selec1";
    this.options.appendChild(this.selector);
  }

  fadeOutMainMenu(){
    this.fadeOut(this.element, 4)
    this.fadeOut(this.titleDiv, 1);
    this.fadeOut(this.options, 1);
  }

  checkKey() {
    super.checkKey();
    switch (this.selectorPos) {
      //PLAY
      case 0:
        this.selector.className = "selec1";
        
        if (this.keyEnterPressed || this.playClick) {
          if (!this.action) {
            this.selector.style.animation = "stab-selector .4s forwards";
            setTimeout(()=>{
              this.fadeOutMainMenu();
              setTimeout(()=>{
                this.element.remove();
              }, (FADEOUT_TIME + 1) * 1000);
    
              this.gp.menuState = TUTORIAL_MENU;
              this.gp.input["Enter"] = false;
            }, 500);
            this.action = true;
          }

        }
        break;
      //EXIT
      case 1:
        this.selector.className = "selec2";
        if (this.keyEnterPressed || this.exitClick) {
          if(!this.action){
            this.selector.style.animation = "stab-selector .4s forwards";
            setTimeout(()=>{
              this.fadeOut(this.element, 1);
              setTimeout(()=>{
                window.location.href = "../pages/gamesMenu.php";
              }, 500);
            }, 500);
            this.action = true;
          }
    
        }
        break;
    }
  }

  draw() {
    if (!this.bgAdded) {
      this.addElement();
      this.addTitle();
      this.addOptions();
      this.addSelector();
    }
  }
}
