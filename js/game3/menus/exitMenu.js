import { MAIN_MENU, PLAY_STATE, TUTORIAL_MENU } from "../main/gamePanel.js";
import Menu from "./menu.js";


export default class ExitMenu extends Menu{
    constructor(gp){
        super(gp);
        this.bgAdded = false;
        this.selectorPos = 1;
        this.maxSelector = 1;
    }

    addElement() {
        this.element = document.createElement("div");
        this.element.setAttribute("id", "exitMenu");
        this.element.style.position = "absolute";
        this.element.style.width = "30%";
        this.element.style.top = "65%";
        this.element.style.display = "flex";
        this.element.style.justifyContent = "space-around";
        this.gp.element.appendChild(this.element);
        this.bgAdded = true;
    }

    addTryAgain(){
        this.tryBttn = document.createElement("div");
        this.tryBttn.setAttribute("id", "tryBtn");    
        const inner = document.createElement("p");
        inner.style.fontSize = "40px";
        inner.classList.add("text-glow");
        inner.classList.add("border-glow");
        inner.innerHTML =" TRY AGAIN ";
        this.tryBttn.appendChild(inner);
        this.element.appendChild(this.tryBttn);
    }

    addExit() {
        this.exitBttn = document.createElement("div");
        this.exitBttn.setAttribute("id", "exitBtn");    
        const inner = document.createElement("p");
        inner.style.fontSize = "40px";
        inner.classList.add("text-glow");
        inner.classList.add("border-glow");
        inner.innerHTML =" EXIT ";
        this.exitBttn.appendChild(inner);
        this.element.appendChild(this.exitBttn);
    }


    checkKey() {
        super.checkKey();
        if(this.bgAdded){
            switch(this.selectorPos){
                case 0:
                    this.exitBttn.style.transform = "scale(.9)";
                    this.exitBttn.style.filter = "brightness(0.8)";
                    this.tryBttn.style.transform = "scale(1.3)";
                    this.tryBttn.style.filter = "brightness(1)";
                    if (this.gp.input["Enter"]) {
                        this.gp.tryAgain();
                    }
                    break;
                case 1:
                    this.exitBttn.style.transform = "scale(1.3)";
                    this.exitBttn.style.filter = "brightness(1)";
                    this.tryBttn.style.transform = "scale(.9)";
                    this.tryBttn.style.filter = "brightness(0.8)";
                    if (this.gp.input["Enter"]) {
                        window.location.href = "../pages/gamesMenu.php";
                    }
                    break;
            }
        }
        
    }

    draw(){
        if (!this.bgAdded) {
            this.addElement();
            this.addTryAgain();
            this.addExit();
            
        }
    }
}