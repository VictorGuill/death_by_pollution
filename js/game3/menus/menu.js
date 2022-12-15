// import {titleState, playState, pauseState, endGameState, mainMenu, optionsMenu, tutorialMenu} from "./gamePanel.js";

export default class Menu{
    constructor(gp){
        this.gp = gp;

        this.selector = 0;
        this.maxSelector = 3;
    }

    selectorUp(){
        this.selector++;
        if (this.selector < 0) {
            this.selector = this.maxSelector;
        }
    }

    selectorDown(){
        this.selector--;
        if (this.selector > this.maxSelector) {
            this.selector = 0;
        }
    }

    checkKey(){
        if(this.gp.input("ArrowUp") || this.gp.input["ArrowLeft"]) {
            selectorUp();
        }
        if(this.gp.input["ArrowDown"] || this.gp.input["ArrowRight"]){
            selectorDown();
        }
    }
}