import { MAIN_MENU, PLAY_STATE, TUTORIAL_MENU } from "../main/gamePanel.js";
import Menu from "./menu.js";


export default class ExitMenu extends Menu{
    constructor(gp){
        super(gp);
        this.bgAdded = false;
        this.selectorPos = 1;
        this.maxSelector = 1;

        this.tryAgainClick = false;
        this.exitClick = false;

        this.action = false;
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
        this.tryBttn.style.cursor = "pointer";
        this.tryBttn.addEventListener("mouseover", ()=>{this.selectorPos = 0});
        this.tryBttn.addEventListener("mouseout", ()=>{});
        this.tryBttn.addEventListener("click", ()=>{this.tryAgainClick = true; console.log("tryAgain click;")})
        const inner = document.createElement("p");
        inner.style.fontSize = "40px";
        inner.style.padding = "4px 10px 0px 10px";
        inner.classList.add("text-glow");
        inner.classList.add("border-glow");
        inner.innerHTML =" TRY AGAIN ";
        this.tryBttn.appendChild(inner);
        this.element.appendChild(this.tryBttn);
    }

    addExit() {
        this.exitBttn = document.createElement("div");
        this.exitBttn.setAttribute("id", "exitBtn");    
        this.exitBttn.style.cursor = "pointer";
        this.exitBttn.addEventListener("mouseover", ()=>{this.selectorPos = 1});
        this.exitBttn.addEventListener("mouseout", ()=>{});
        this.exitBttn.addEventListener("click", ()=>{this.exitClick = true; console.log("exit click;")})
        const inner = document.createElement("p");
        inner.style.fontSize = "40px";
        inner.style.padding = "4px 10px 0px 10px";
        inner.classList.add("text-glow");
        inner.classList.add("border-glow");
        inner.innerHTML =" EXIT ";
        this.exitBttn.appendChild(inner);
        this.element.appendChild(this.exitBttn);
    }

    higlightBtn(btn){

    }


    checkKey() {
        super.checkKey();
        if(this.bgAdded){
            switch(this.selectorPos){
                case 0:
                    this.exitBttn.style.transform = "scale(.9)";
                    this.exitBttn.style.filter = "brightness(0.8)";
                    this.tryBttn.style.transform = "scale(1.1)";
                    this.tryBttn.style.filter = "brightness(1)";
                    if (this.keyEnterPressed || this.tryAgainClick) {
                        if (!this.action){
                            this.gp.tryAgain();
                            if (!this.hasSaved){
    
                            }
                            this.action = true;
                        }
     
                        
                    }
                    break;
                case 1:
                    this.exitBttn.style.transform = "scale(1.1)";
                    this.exitBttn.style.filter = "brightness(1)";
                    this.tryBttn.style.transform = "scale(.9)";
                    this.tryBttn.style.filter = "brightness(0.8)";
                    if (this.keyEnterPressed || this.exitClick) {
                        console.log("redirect");
                        if (!this.action){
                            window.location.href = "../pages/gamesMenu.php";
                            this.action = true;
                        }
                        
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