import Object from "./object.js";

export default class Toxic extends Object{
    constructor(gp, y){
    super(gp);

    this.name = "toxic";
    this.w = 100;
    this.h = 100;

    // this.initialX = this.gp.plane.worldX*2 + this.gp.map.w;
    
    this.ticked = false;

    this.index;
    this.createToxic(y);
    }

    randomCloud(){
        let size = Math.floor((Math.random()*(250 - 100)))+50;
        this.w = size;
        this.h = size;
        const num = Math.floor((Math.random()*(4 - 1)))+1;
        return "/media/game3/objects/toxic"+num+".gif";
    }

    createToxic(y){
        this.initialY = y;
        this.element.classList.add("toxic");
        this.element.style.bottom = y + "px";
        this.element.style.right = -this.w + "px";
        const toxicImg = document.createElement("img");
        toxicImg.src = this.randomCloud();
        toxicImg.width = this.w;
        toxicImg.height = this.h;
        this.element.appendChild(toxicImg);
    }

    update(){
        return super.update();
    }

}