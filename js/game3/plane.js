import input from "./keyHandler.js";


export default class Plane {
    constructor(gp, mapX, mapY) {
        this.gp = gp;
        this.id = "plane";
    //----POSITIONS----
        this.mapX = mapX;
        this.mapY = mapY;
        this.worldX = this.gp.map.x +this.mapX;
        this.worldY = this.gp.map.y +this.mapY;
    //----ATRIBUTES----
        this.w = 50;
        this.h = 50;

        this.direction = "right";
        this.collision = false;

        this.speed = 0;
        this.maxSpeed = 5;
        this.pitch = 0;
        this.maxPitch = 45;
        this.power = 0;
        this.power
        this.torque = 10;

        this.addPlane();
    }

    addPlane() {
        this.element = document.createElement("img");
        this.element.setAttribute("id", this.id);
        this.element.setAttribute("src", "/media/game3/f22.png");
        this.gp.map.element.appendChild(this.element);
        this.element.style.width = this.w+"px";
        this.element.style.height = this.h+"px";
    }

    mapBounderiesCheck() {
        let canMove = true;

        let planeMapRight = this.mapX + this.w;
        let planeMapLeft = this.mapX;
        let planeMapTop = this.mapY + this.h;
        let planeMapBottom = this.mapY;

        console.log("plane map top: "+planeMapTop);
        

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

    rotate(deg){
        this.element.style.transform = "rotateZ("+deg+"deg)";
    }

    levelPitch(){
        if (this.pitch < 0) {
            this.pitch ++;
        }else if (this.pitch > 0){
            this.pitch --;
        } else if (this.pitch = 0){
            this.pitch = 0;
        }
        /* this.rotate(this.pitch); */
    }

    pitchUp(){
        if (this.pitch >= this.maxPitch){
            this.pitch = this.maxPitch;
        }
        this.pitch++;

        /* this.rotate(this.pitch); */

        this.mapY -= this.speed;
    }

    pitchDown(){
        if (this.pitch <= -this.maxPitch){
            this.pitch = -this.maxPitch;
        }
        this.pitch--;

        /* this.rotate(this.pitch); */
        this.mapY += this.speed;
    }

    accelerate(){
        this.worldX += this.speed;
        this.speed+=0.1;
    }

    decelerate(){
        this.levelPitch();
        this.speed-= 0.05;
    }

    move(){
        if (input["ArrowUp"] || input["ArrowDown"] || input["ArrowRight"] || input["ArrowLeft"]){


            if ( input["ArrowUp"] ) { this.setDirection("up"); }
            if ( input["ArrowDown"] ) { this.setDirection("down"); }
            if ( input["ArrowRight"] ) {this.setDirection("right"); }
            if ( input["ArrowLeft"] ) { this.setDirection("left"); }


            this.collision = false;
            this.gp.collisionDetection.mapBounderiesCheck(this);

            if (!this.collision) {
                if(input["ArrowUp"]){
                    this.pitchUp();
                }
                if(input["ArrowDown"]){
                    this.pitchDown();
                }
                if(input["ArrowRight"]){
                   this.accelerate();
                }else{
                    this.speed-= .01;
                }
                if (input["ArrowLeft"]) {
                    this.decelerate();
                    this.levelPitch();
                }
            }
        }
            
        if (this.speed <= 0) { this.speed = 0; }
        if (this.speed >= this.maxSpeed) { this.speed = this.maxSpeed; } 

    }

    fly(){
        /* this.getSpeed(); */
        this.move();
    }

    //---- GETTERS ----

    getWorldY() {
        return this.mapY;
    }

    getWorldX() {
        return this.worldX;
    }

    getMapX() {
        return this.mapX;
    }

    getMapY() {
        return this.mapY;
    }

    getSpeed() {
        return this.speed;
    }

    getDirection() {
        return this.direction;
    } 


    //---- SETTERS ----

    setDirection(direction){
        this.direction = direction;
    }
    update() {
        this.fly();
        
        this.gp.physics.apply(this);


    /*  ------------ DEBUG ----------  */
        /* console.log("P: "+this.power); */
        console.log("S: "+this.speed);
        console.log("World X: "+ this.getWorldX());
        console.log ("Map X: "+ this.mapY);
        /* console.log("Plane map Y: "+this.mapY); */
        console.log("Collison = " + this.collision);
    }


    draw() {
        this.element.style.bottom = this.mapY + "px";
        this.gp.map.x = -this.getWorldX() + "px";
        this.element.style.left = this.mapX + "px";
    }
}