import Object from "./object.js";

export default class Coin extends Object{
    constructor(gp, y){
        super(gp);
        this.w = 40;
        this.h = 40;
        this.createCoin(y);
    }

    createCoin(y){
        this.element.classList.add("coin");
        this.initialY = y;
        this.element.style.right = 0 + "px";

        const coinImg = document.createElement("img");
        coinImg.src = "/media/game3/objects/coin.gif";
        this.element.appendChild(coinImg);
    }

    update(){
        return super.update();
    }

}