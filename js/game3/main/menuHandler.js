import MainMenu from "../menus/mainMenu.js";
import Menu from "../menus/menu.js";
import OptionsMenu from "../menus/optionsMenu.js";
import TutorialMenu from "../menus/tutorialMenu.js";

import {TITLE_STATE, PLAY_STATE, PAUSE_STATE, ENDGAME_STATE, MAIN_MENU, SETTINGS_MENU, TUTORIAL_MENU} from "./gamePanel.js";

export default class MenuHandler{
    constructor(gp){
        this.gp = gp;

        this.m = new Menu(gp);
        this.mainMenu = new MainMenu(gp);
        this.optionsMenu = new OptionsMenu(gp);
        this.tutorialMenu = new TutorialMenu(gp);
    }

    update(){
        if (this.gp.menuState == MAIN_MENU) {
            this.mainMenu.checkKey();
        } else if (this.gp.menuState == TUTORIAL_MENU) {
            this.tutorialMenu.checkKey();
        } else if (this.gp.menuState == SETTINGS_MENU) {
            this.optionsMenu.checkKey();
        }
    }

    draw() {
        if (this.gp.menuState == MAIN_MENU) {
            this.mainMenu.draw();
        }else if (this.gp.menuState == TUTORIAL_MENU) {
            this.tutorialMenu.draw();
        } else if (this.gp.menuState == SETTINGS_MENU) {
            this.optionsMenu.draw();
        } 
    }
}