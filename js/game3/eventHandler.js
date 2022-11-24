import Coin from "./objects/coin.js";

export default class EventHandler{
    constructor(gp){
        this.gp = gp;
        this.events = new Array();
        this.addObject("coin");
    }

    addObject(e){
        let obj;
        switch(e){
            case "coin":
                obj = new Coin(this.gp, 600);
                break;
        }
        if (obj != null){
            this.events.push(obj);
            obj.index = this.events.indexOf(obj);
        }
        
    }

    update(){
        this.events.forEach(e => {
            e.update();
            if (parseInt(e.element.style.right) >= this.gp.map.w){
                e.element.remove();
                this.events.splice(e.index, 1);
            }
        });
    }

    draw(){

    }

}