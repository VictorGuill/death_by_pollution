import { gameHeight } from "../main/gamePanel.js";
import Menu from "./menu.js";


export default class MainMenu extends Menu{
    constructor(gp){
        super(gp);
        this.bgAdded = false;
    }

    addElement() {
        this.element = document.createElement("div");
        this.element.setAttribute("id", "mainMenu");
        this.element.style.height = gameHeight + "px";
        this.element.style.width = "100%";
        this.element.style.backgroundColor = "#838383";
        this.gp.element.appendChild(this.element);
        this.bgAdded = true;
    }

    addTitle() {
        const title = document.createElement("div");
        title.setAttribute("id", "title");
    }

    draw(){
        if (!this.bgAdded) {
            this.addElement();
        }
    }
}