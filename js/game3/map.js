export default class Map{
    constructor(gp){
        this.gp = gp;
        this.id = "map";
        this.addMap();
        this.getSize();
    }
    addMap(){
        this.element = document.createElement("div");
        this.element.setAttribute("id", this.id);
        this.gp.element.appendChild(this.element);
    }
    getSize() {
        this.width = parseInt(getComputedStyle(this.element).width);
        this.height = parseInt(getComputedStyle(this.element).height);
    }
}