import { PLAY_STATE } from "../main/gamePanel.js";
import Menu from "./menu.js";

export default class TutorialMenu extends Menu {
    constructor(gp) {
        super(gp);
        this.bgAdded = false;
        this.maxSelector = 1;
    }

    addElement() {
        this.element = document.createElement("div");
        this.element.setAttribute("id", "tutorialMenu");
        this.gp.element.appendChild(this.element);
        this.addContainer();
        this.bgAdded = true;
    }

    addContainer() {
        const container = document.createElement("div");
        container.style.position = "absoulte";
        container.style.display = "flex";
        container.style.alignContent = "center";
        container.style.justifyContent = "space-around";
        container.style.width = "90%";
        container.style.height = "90%";
        container.style.margin = "auto";
        //tutorial cards
        const card1 = document.createElement("div");
        card1.classList.add("tutorial-card");
        card1.classList.add("border-glow");
        container.appendChild(card1);
        const card2 = document.createElement("div");
        card2.classList.add("tutorial-card");
        card2.classList.add("border-glow");
        container.appendChild(card2);
        const card3 = document.createElement("div");
        card3.style.position = "relative";
        card3.classList.add("tutorial-card");
        card3.classList.add("border-glow");
        container.appendChild(card3);
        //play Button
        this.playBttn = document.createElement("div");
        this.playBttn.innerHTML = "PLAY";
        this.playBttn.style.position = "absolute";
        this.playBttn.style.top = "115%";
        this.playBttn.style.right = "0";
        this.playBttn.style.width = "100px";
        this.playBttn.style.height = "40px";
        this.playBttn.classList.add("border-glow");
        this.playBttn.classList.add("text-glow");
        this.playBttn.style.fontSize = "30px";
        this.playBttn.style.fontWeight = "bolder";
        this.playBttn.style.textAlign = "center";
        this.playBttn.style.paddingTop = "3px";

        card3.appendChild(this.playBttn);
        this.element.appendChild(container);
    }
    /*  
        const playBtnInner = document.createElement("p");
        this.playBttn.appendChild(playBtnInner);       
        playBtnInner.style.fontSize = "30px";
        playBtnInner.innerHTML = "PLAY";
        playBtnInner.style.fontWeight = "bolder";
        playBtnInner.classList.add("text-glow"); */

    checkKey() {
        super.checkKey();
        switch(this.selectorPos){
            case 0:
                this.playBttn.style.transform = "scale(1)";
                break;
            case 1:
                this.playBttn.style.transform = "scale(1.2)";
                if (this.gp.input["Enter"]) {
                    this.element.style.animation = "titleState-fadeOut 3s forwards";
                    setTimeout(()=>{
                        this.gp.gameState = PLAY_STATE;
                        this.element.remove();
                    }, 2500);
                }
                break;
            default:

        }

    }

    draw(){
        if (!this.bgAdded) {
            this.addElement();
            this.fadeOut(this.element, this.gp.mH.mainMenu.element, 1.5);
        }
    }
}