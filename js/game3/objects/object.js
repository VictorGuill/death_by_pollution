export default class Object{
    constructor(gp){
        this.gp = gp;
        this.initialX = this.gp.plane.worldX;
        this.initialY
        this.createObject();
    }
    createObject(){
        this.element = document.createElement("div");
        this.element.classList.add("object");
        this.gp.map.objects.appendChild(this.element);
    }

    update(){
        this.element.style.right =  (this.gp.plane.worldX - this.initialX) + "px";
        console.log("right: " +this.element.style.right);

        this.element.style.bottom = (this.initialY - this.gp.plane.worldY) +"px";
        console.log("bottom: " +this.element.style.bottom);
    }
}