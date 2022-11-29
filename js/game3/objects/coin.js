import Object from "./object.js";

export default class Coin extends Object{
    constructor(gp, y){
        super(gp);
        this.name = "coin";
        this.w = 40;
        this.h = 40;
        this.index;
        this.createCoin(y);
    }

    createCoin(y){
        this.initialY = y;
        this.element.classList.add("coin");
        this.element.style.bottom = y + "px";
        this.element.style.left =  1000 + "px";

        const coinImg = document.createElement("img");
        coinImg.width = this.w;
        coinImg.height = this.h;
        coinImg.style.opacity = "0.8";
        coinImg.src = "/media/game3/objects/coin.gif";
        this.element.appendChild(coinImg);
    }


}