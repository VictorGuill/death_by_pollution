import { MAIN_MENU, PLAY_STATE, TITLE_STATE, TUTORIAL_MENU } from "../main/gamePanel.js";
import Menu from "./menu.js";


export default class PauseMenu extends Menu{
    constructor(gp){
        super(gp);
        this.bgAdded = false;

        this.selectorPos = 1;
        this.maxSelector = 1;

        this.continueClick = false;
        this.exitMenuClick = false;

        this.action = false;
    }

    addElement() {
        this.element = document.createElement("div");
        this.element.setAttribute("id", "pauseMenu");
        this.element.style.position = "absolute";
        this.element.style.width = "35%";
        this.element.style.height = "150px"
        this.element.style.top = "52%";
        this.element.style.display = "flex";
        this.element.style.alignItems = "center";
        this.element.style.justifyContent = "space-around";
        this.element.classList.add("border-glow");
        this.element.style.borderWidth = "4px";
        this.element.style.backgroundColor = "rgba(20, 20, 20, .7)";
        this.gp.element.appendChild(this.element);
        this.bgAdded = true;
    }

    addContinue(){
        this.continueBttn = document.createElement("div");
        this.continueBttn.setAttribute("id", "continueBttn");
        this.continueBttn.style.cursor = "pointer";
        this.continueBttn.addEventListener("mouseover", ()=>{this.selectorPos = 0});
        this.continueBttn.addEventListener("mouseout", ()=>{});
        this.continueBttn.addEventListener("click", ()=>{this.continueClick = true; console.log("continue click;")})
        const inner = document.createElement("p");
        inner.style.fontSize = "40px";
        inner.style.padding = "4px 10px 0px 10px";
        inner.classList.add("text-glow");
        inner.classList.add("border-glow");
        inner.innerHTML ="CONTINUE";
        this.continueBttn.appendChild(inner);
        this.element.appendChild(this.continueBttn);
    }

    addExitMenu() {
        this.exitMenuBttn = document.createElement("div");
        this.exitMenuBttn.setAttribute("id", "exitMenuBttn");    
        this.exitMenuBttn.style.cursor = "pointer";
        this.exitMenuBttn.addEventListener("mouseover", ()=>{this.selectorPos = 1});
        this.exitMenuBttn.addEventListener("mouseout", ()=>{});
        this.exitMenuBttn.addEventListener("click", ()=>{this.exitMenuClick = true; console.log("exitMenu click;")})
        const inner = document.createElement("p");
        inner.style.fontSize = "40px";
        inner.style.padding = "4px 10px 0px 10px";
        inner.classList.add("text-glow");
        inner.classList.add("border-glow");
        inner.innerHTML ="MAIN MENU";
        this.exitMenuBttn.appendChild(inner);
        this.element.appendChild(this.exitMenuBttn);
    }



    checkKey() {
        super.checkKey();
        if(this.bgAdded){
            switch(this.selectorPos){
                case 0:
                    this.exitMenuBttn.style.transform = "scale(1)";
                    this.exitMenuBttn.style.filter = "brightness(0.8)";
                    this.continueBttn.style.transform = "scale(1.1)";
                    this.continueBttn.style.filter = "brightness(1)";
                    if (this.keyEnterPressed || this.continueClick) {
                        if (!this.action){
                            this.gp.gameState = PLAY_STATE;
                            console.log("Game state: " + this.gp.gameState);
                            this.removeMenu(this);
                            this.continueClick = false;
                            this.action = true;
                        }
                    } else {
                        this.action = false;
                    }
                    break;
                case 1:
                    this.exitMenuBttn.style.transform = "scale(1.1)";
                    this.exitMenuBttn.style.filter = "brightness(1)";
                    this.continueBttn.style.transform = "scale(1)";
                    this.continueBttn.style.filter = "brightness(0.8)";
                    if (this.keyEnterPressed || this.exitMenuClick) {
                        if (!this.action){
                            this.gp.gameState = TITLE_STATE;
                            console.log("Game state: " + this.gp.gameState);
                            this.exitMenuClick = false;
                            this.action = true;
                        }
                    } else {
                        this.action = false;
                    }
                    break;
            }
        }
        
    }

    draw(){
        if (!this.bgAdded) {
            this.addElement();
            this.addContinue();
            this.addExitMenu();
            
        }
    }
}