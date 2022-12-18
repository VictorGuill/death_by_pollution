import { setCookie, getCookie, eraseCookie } from "../../cookiesFunctions.js";

export default class Slot{
    constructor(gp){
        this.gp = gp;
        this.scoreSaved = false;
    }

    saveScore(){
        if (!this.scoreSaved){
            try {
                setCookie("game3_score", this.gp.score, 1);
                setCookie("game3_time", this.gp.time, 1);
                this.scoreSaved = true;
            } catch (e) {
                console.log(e);
            }
        }
    }
}