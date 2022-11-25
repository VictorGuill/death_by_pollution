import CurrencyGenerator from "./ev/currencyGenerator.js";

export default class EventHandler{
    constructor(gp){
        this.gp = gp;
        this.currencyGenerator = new CurrencyGenerator(this.gp);
    }



    update(){
        this.currencyGenerator.update();  
    }

    draw(){

    }

}