import { MAIN_MENU, PLAY_STATE, TUTORIAL_MENU } from "../main/gamePanel.js";
import Menu from "./menu.js";


export default class MainMenu extends Menu{
    constructor(gp){
        super(gp);
        this.bgAdded = false;

        this.maxSelector= 1;
    }

    addElement() {
        this.element = document.createElement("div");
        this.element.setAttribute("id", "mainMenu");
        this.gp.element.appendChild(this.element);
        this.bgAdded = true;
    }

    addTitle() {
        const titleDiv = document.createElement("div");
        titleDiv.setAttribute("id", "title");
        const title = document.createElement("p");
        title.innerHTML ="SKY DIVE";
        titleDiv.appendChild(title);
        this.element.appendChild(titleDiv);
    }

    addOptions() {
        this.options = document.createElement("div");
        this.options.setAttribute("id", "mainMenuOptions");

        this.optionPlay = document.createElement("p");
        this.optionPlay.classList.add("optionPlay")
        this.optionPlay.innerHTML = "PLAY";

        this.optionExit = document.createElement("p");
        this.optionExit.classList.add("optionExit");
        this.optionExit.innerHTML = "EXIT";    

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

    checkKey() {
        super.checkKey();
        switch(this.selectorPos){
            case 0:
                this.selector.className = "selec1";
                if (this.gp.input["Enter"]) {
                    this.gp.menuState = TUTORIAL_MENU;
                }
                break;
            case 1:
                this.selector.className = "selec2";
                if (this.gp.input["Enter"]) {
                    window.location.href = "../pages/gamesMenu.php";
                }
                break;
        }
    }

    draw(){
        if (!this.bgAdded) {
            this.addElement();
            this.addTitle();
            this.addOptions();
            this.addSelector();
        }
    }
}