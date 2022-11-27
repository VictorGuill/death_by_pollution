import Object from "./object.js";

export default class Diamond extends Object{
    constructor(gp, y){
        super(gp);
        this.w = 40;
        this.h = 40;
        this.index;
        this.createDiamond(y);
    }

    createDiamond(y){
        this.initialY = y;
        this.element.classList.add("diamond");
        this.element.style.bottom = y + "px";
        this.element.style.right = -this.w + "px";

        const diamondImg = document.createElement("img");
        diamondImg.width = this.w;
        diamondImg.height = this.h;
        diamondImg.src = "/media/game3/objects/diamond.gif";
        this.element.appendChild(diamondImg);
    }

    update(){
        return super.update();
    }

}