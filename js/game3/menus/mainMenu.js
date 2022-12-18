import { playState } from "../main/gamePanel.js";
import Menu from "./menu.js";


export default class MainMenu extends Menu{
    constructor(gp){
        super(gp);
        this.bgAdded = false;
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

        this.optionSettings = document.createElement("p");
        this.optionSettings.classList.add("optionSettings");
        this.optionSettings.innerHTML = "SETTINGS";

        this.optionExit = document.createElement("p");
        this.optionExit.classList.add("optionExit");
        this.optionExit.innerHTML = "EXIT";    

        this.options.appendChild(this.optionPlay);
        this.options.appendChild(this.optionSettings);
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
                    this.element.style.animation = "mainTitle-fadeOut 4s forwards";
                    
                    this.gp.gameState = playState;
                }
                break;
            case 1:
                this.selector.className = "selec2";
                break;
            case 2:
                this.selector.className = "selec3";
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