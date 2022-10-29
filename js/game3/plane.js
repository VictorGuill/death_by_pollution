import input from "./keyHandler.js";


export default class Plane {
    constructor(gp, x, y, w, h) {
        this.gp = gp;
        this.id = "plane";
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h
        this.speed = 10;
        this.addPlane();
    }

    addPlane() {
        this.graphics = document.createElement("div");
        this.graphics.setAttribute("id", this.id);
        this.gp.map.element.appendChild(this.graphics);
        this.graphics.style.width = this.w+"px";
        this.graphics.style.height = this.h+"px";
        
    }

    canMove() {
        let canMove = false;

        let planeMapRight = this.x + this.w;
        let planeMapLeft = this.x;
        let planeMapTop = this.y + this.h;
        let planeMapBottom = this.y;
        

        if ((planeMapLeft <= 0 + this.speed && input["ArrowLeft"]) || 
            (planeMapRight >= this.gp.map.width - this.speed && input["ArrowRight"]) ||
            (planeMapTop >= this.gp.map.height - this.speed && input["ArrowUp"]) ||
            (planeMapBottom <= 0 +this.speed&& input["ArrowDown"])){
            canMove = false;
        } else{
            canMove = true;
        }
        return canMove;
    }

    update() {
        if(this.canMove()) {
            if (input["ArrowDown"]) {
                this.y -= this.speed;
            }
            if (input["ArrowUp"]) {
                this.y += this.speed;
            }
            if (input["ArrowRight"]) {
                this.x += this.speed;
            }
            if (input["ArrowLeft"]) {
                this.x -= this.speed;
            }
        }
        
    }

    draw() {
        this.graphics.style.bottom = this.y + "px";
        this.graphics.style.left = this.x + "px";
    }


}

