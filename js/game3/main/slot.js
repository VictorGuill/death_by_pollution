import { setCookie, getCookie, eraseCookie } from "../../cookiesFunctions.js";

export default class Slot{
    constructor(gp){
        this.gp = gp;
    }

    saveScore(){
        setCookie("game3_score", this.gp.score, 1);
        setCookie("game3_time", this.gp.time, 1);
    }

}