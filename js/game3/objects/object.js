export default class Object{
    constructor(gp){
        this.gp = gp;

        this.name = "";

        this.x;
        this.y;

        this.w;
        this.h;

        this.hitboxX;
        this.hitboxY;
        this.hitboxW;
        this.hitboxH;

        this.initialX = this.gp.plane.worldX + this.gp.map.w;
        this.initialY;

        this.vel = 0;

        this.collision = false;
        
        this.createObject();
    }
    createObject(){
        this.element = document.createElement("div");
        this.element.classList.add("object");
        this.gp.map.objects.appendChild(this.element);
    }

    getName(){
        return this.name;
    }

    getX(){
        return this.x;
    }
    
    getWidth(){
        return this.w;
    }
    
    update(){
        this.x =  parseInt(this.initialX - this.gp.plane.worldX - this.vel);
        this.y = parseInt(this.initialY - this.gp.plane.worldY);
    }
    
    draw(){
        this.element.style.left = this.x + "px";
        this.element.style.bottom = this.y + "px";
    }
}