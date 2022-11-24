export default class Object{
    constructor(gp){
        this.gp = gp;
        this.initialX = this.gp.plane.worldX - this.gp.plane.w;
        this.initialY = -10;
        this.createObject();
    }
    createObject(){
        this.element = document.createElement("div");
        this.element.classList.add("object");
        this.gp.map.objects.appendChild(this.element);
    }

    update(){
        this.element.style.right = (this.initialX + this.gp.plane.worldX) + "px";
        this.element.style.bottom = (this.initialY - this.gp.plane.worldY) + "px";
    }
}