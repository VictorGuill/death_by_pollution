import {input} from './keyHandler.js';


export class Plane {
    constructor(gp){
        this.gp = gp;
        this.id = "plane";
        this.speed = 10;
        this.addPlane();
        this.graphics = document.getElementById("plane");
    }

    addPlane(){
        const plane = document.createElement("div");
        plane.setAttribute("id", this.id);
        this.gp.map.element.appendChild(plane);
    }

    update () {
        if (input["ArrowDown"]){
            this.y += this.speed; 
        } else if (input["ArrowUp"]) {
            this.y -= this.speed;
        } else if (input["ArrowRight"]) {
            this.x += this.speed;
        } else if (input["ArrowLeft"]) {
            this.x -= this.speed;
        }
    }

    draw () {
        this.graphics.style.top = this.y +"px";
        this.graphics.style.left = this.x +"px";
    }


}

