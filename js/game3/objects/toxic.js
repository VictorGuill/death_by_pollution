import Object from "./object.js";

export default class Toxic extends Object{
    constructor(gp, y){
    super(gp);

    this.name = "toxic";

    this.createToxic(y);
    this.drawHitbox();


    // this.initialX = this.gp.plane.worldX*2 + this.gp.map.w;
    
    this.ticked = false;

    this.index;
    
    }

    drawHitbox(){
        this.hitbox = document.createElement("div");
        this.hitbox.style.backgroundColor = "red";
        this.hitbox.style.position = "absolute";

        const hitboxX = this.w/2;
        const hitboxY = this.h/2;
        const r = this.w/4;

        this.hitbox.style.top = hitboxY + "px";
        this.hitbox.style.left = hitboxX + "px";

        this.hitbox.style.width = "2px";
        this.hitbox.style.height = r + "px";
        this.hitbox.style.border = "4px red solid";
        this.hitbox.style.transformOrigin = "0% 0%";
        this.hitbox.style.animation = "rotate-hitbox 2s linear infinite";
        // this.hitbox.style.borderRadius = "50%";

        this.element.appendChild(this.hitbox);
    }

    randomCloud(){
        let size = Math.floor((Math.random()*(200 - 50)))+50;
        this.w = size;
        this.h = size;
        const num = Math.floor((Math.random()*(5 - 1)))+1;
        console.log(num);
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