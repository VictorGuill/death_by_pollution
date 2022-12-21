import EventsGenerator from "../events/eventsGenerator.js";
import { PAUSE_STATE, PLAY_STATE } from "./gamePanel.js";

export default class EventHandler{
    constructor(gp){
        this.gp = gp;
        this.evG = new EventsGenerator(gp);

        this.escPressed = false;
    }

    checkEscape(){
        if (this.gp.input["Escape"]){
            if (!this.escPressed) {
                if (this.gp.gameState === PLAY_STATE){
                    this.gp.gameState = PAUSE_STATE;
                } else if (this.gp.gameState === PAUSE_STATE){
                    this.gp.gameState = PLAY_STATE;
                }
                this.escPressed = true;
            }
        } else {
            this.escPressed = false;
        }
    }

    update(){
        this.evG.update();
    }
}