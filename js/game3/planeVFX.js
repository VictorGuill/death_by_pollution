export default class planeVfx {
    constructor(plane){
        this.plane = plane;
        this.thrustVfx();
    }

    thrustVfx(){
        this.thrust = document.createElement("img");
        this.thrust.style.position = "absolute";
        this.thrust.style.width = "20px";
        this.thrust.style.top = "14px";
        this.thrust.style.left = "-14px";
        this.thrust.style.transformOrigin = "right";
        this.thrust.setAttribute("src", "/media/game3/thurst/fire.gif");
        this.plane.element.appendChild(this.thrust);
    }

    update(){
        this.thrust.style.transform = "scaleX(" + parseFloat((this.plane.speed) * .002) +") scaleY("+parseFloat((this.plane.speed) * .001)+")";
    }
}