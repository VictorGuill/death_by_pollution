import MainMenu from "../menus/mainMenu.js";
import Menu from "../menus/menu.js";
import OptionsMenu from "../menus/optionsMenu.js";
import TutorialMenu from "../menus/tutorialMenu.js";

import {titleState, playState, pauseState, endGameState, mainMenu, optionsMenu, tutorialMenu} from "./gamePanel.js";

export default class MenuHandler{
    constructor(gp){
        this.gp = gp;

        this.m = new Menu(gp);
        this.mainMenu = new MainMenu(gp);
        this.optionsMenu = new OptionsMenu(gp);
        this.tutorialMenu = new TutorialMenu(gp);
    }

    checkKey() {

    }

    draw() {
        if (this.gp.menuState == mainMenu) {
            this.mainMenu.draw();
        } else if (this.gp.menuState == optionsMenu) {
            this.optionsMenu.draw();
        } else if (this.gp.menuState == tutorialMenu) {
            this.tutorialMenu.draw();
        }
    }
}