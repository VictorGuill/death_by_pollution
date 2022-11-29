export default class Object{
    constructor(gp){
        this.gp = gp;

        this.name = "";

        this.x;
        this.y;

        this.w;
        this.h;

        this.initialX = this.gp.plane.worldX + this.gp.map.w;
        this.initialY;

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
        this.element.style.left =  (this.initialX - this.gp.plane.worldX) + "px";
        this.x = parseInt(this.element.style.left);

        this.element.style.bottom = (this.initialY - this.gp.plane.worldY) +"px";
        this.y = parseInt(this.element.style.bottom);
    }
}