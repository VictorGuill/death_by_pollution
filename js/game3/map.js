export default class Map {
    constructor(gp) {
        this.gp = gp;
        this.id = "map";
        this.x = 0;
        this.y = 0;
        this.addElement();
        this.setBg();
        this.getSize();
    }

    addElement() {
        this.element = document.createElement("div");
        this.element.setAttribute("id", this.id);
        this.gp.element.appendChild(this.element);
    }

    setBg() {
        this.element.style.backgroundImage = "url('/media/game3/bg-2.jpeg')";
    }

    getSize() {
        this.w = parseInt(getComputedStyle(this.element).width);
        this.h = parseInt(getComputedStyle(this.element).height);
    }


    draw(){
        this.element.style.backgroundPositionX = this.x;
    }
}