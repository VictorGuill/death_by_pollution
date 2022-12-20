import Object from "./object.js";

export default class Diamond extends Object{
    constructor(gp, y){
        super(gp);
        this.name = "diamond";
        this.w = 50;
        this.h = 50;

        this.hitboxX = this.x;
        this.hitboxY = this.y;
        this.hitboxW = this.w;
        this.hitboxH = this.h;
        
        this.index;
        this.createDiamond(y);
    }

    createDiamond(y){
        this.initialY = y;
        this.element.classList.add("diamond");
        this.element.style.bottom = y + "px";
        this.element.style.left = -this.w + "px";
        this.element.style.width = this.w + "px";
        this.element.style.height = this.h + "px";

        this.element.style.backgroundImage = "url(/death_by_pollution/media/game3/objects/diamond.gif)";
        this.element.style.backgroundSize = "cover";
    }
    

}