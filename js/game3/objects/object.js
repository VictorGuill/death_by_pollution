export default class Object{
    constructor(gp){
        this.gp = gp;

        this.name = "";

        this.initialX = this.gp.plane.worldX + this.gp.map.w;
        this.initialY;

        this.x = this.initialX;
        this.y;
        this.w;
        this.h;

        this.collision = false;
        
        this.ticked = false;

        this.createObject();
    }

    createObject(){
        this.element = document.createElement("div");
        this.element.classList.add("object");
        this.gp.map.objects.appendChild(this.element);
    }
    
    update(){
        this.x =  parseInt(this.initialX - this.gp.plane.worldX);
        this.y = parseInt(this.initialY - this.gp.plane.worldY);
    }
    
    draw(){
        this.element.style.left = this.x + "px";
        this.element.style.bottom = this.y + "px";
    }


    // GETTERS & SETTERS
    getName(){
        return this.name;
    }

    getX(){
        return this.x;
    }
    
    getWidth(){
        return this.w;
    }
}