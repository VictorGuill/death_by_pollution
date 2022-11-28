export default class planeVfx {
    constructor(plane){
        this.plane = plane;
        this.addEffects();
    }

    addEffects(){
        this.thrustVfx();
        this.windVfx();
    }

    thrustVfx(){
        this.thrust = document.createElement("img");
        this.thrust.style.position = "absolute";
        this.thrust.style.width = "20px";
        this.thrust.style.top = "14px";
        this.thrust.style.left = "-14px";
        this.thrust.style.transformOrigin = "right";
        this.thrust.src = "/media/game3/thurst/blue.gif";
        this.plane.element.appendChild(this.thrust);
    }

    windVfx(){
        this.speed = document.createElement("img");
        this.speed.style.position = "absolute";
        this.speed.style.opacity = "0";
        this.speed.style.width = "100px";
        this.speed.style.height = "15px";
        this.speed.style.top = "14px";
        this.speed.style.left = "-60px";
        this.speed.style.transformOrigin = "right";
        this.speed.src= "/media/game3/speed/wind.gif";
        this.plane.element.appendChild(this.speed);
    }

    updateSpeed(){
        if (this.plane.gp.physics.getPercentSpeed(this.plane, this.plane.speed) < 40){
            this.speed.style.opacity = "0";
        }
        if (this.plane.gp.physics.getPercentSpeed(this.plane, this.plane.speed) >= 40){
            this.speed.style.opacity = ".5";
        }
        if (this.plane.gp.physics.getPercentSpeed(this.plane, this.plane.speed) >= 65){
            this.speed.style.opacity = "1";
        }
    }

    update(){
        this.thrust.style.transform = "scaleX(" + parseFloat((this.plane.speed) * .002) +") scaleY("+parseFloat((this.plane.speed) * .001)+")";
        this.updateSpeed();
        
    }
}