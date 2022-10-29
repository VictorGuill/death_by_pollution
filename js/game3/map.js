export class Map{
    constructor(gp){
        this.gp = gp;
        this.id = "map";
        this.addMap();
    }
    addMap(){
        this.element = document.createElement("div");
        this.element.setAttribute("id", this.id);
        this.gp.element.appendChild(this.element);
    }
}