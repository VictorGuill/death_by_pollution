


export default class Plane {
    constructor(gp, inicialX, inicialY) {
        this.gp = gp;
        this.id = "plane";
    //----POSITIONS----
        // screen
        this.screenX = inicialX;
        this.screenY = inicialY;
        // world
        this.worldX = this.gp.map.x +this.screenX;
        this.worldY = this.screenY;

    //----ATRIBUTES----
        this.w = 50;
        this.h = 50;

        this.collision = false;

        this.speed = 0;
        this.speedX = 0;
        this.speedY = 0;
        this.maxSpeed = 700;

        this.state = "";

        this.pitch = 0;
        this.maxPitch = 45;

        this.lift = 0;
        this.cL = 1; //Lift coeficient

        this.drag = 0;
        this.cD = 0.7; //Drag coeficient

        this.mass = 80;
        this.weight = this.gp.physics.calcWeight(this);

        this.acceleration = 2;

        this.thrust = 0;

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

    accelerate() {        
        this.speed += this.acceleration;
    }

    decelerate() {
        this.speed -= this.acceleration;
    }

    levelPitch() {}

    pitchUp() {
        this.pitch++;
        this.rotate(this.pitch);
    }

    pitchDown() {
        this.pitch--;
        this.rotate(this.pitch);
    }


    checkState() {
        //takeOff
    }

    rotate(deg){
        this.element.style.transform = "rotateZ("+(-deg)+"deg)";
    }

    


    updatePositions() {
        this.worldX += this.speedX/100;
        this.screenY += this.speedY/100;
        this.worldY = this.screenY;
    }

    updateSpeed() {
        this.speedX = this.gp.physics.calcSpeedX(this);
        this.speedY = this.gp.physics.calcSpeedY(this);

        if (this.speed >= this.maxSpeed) {
            this.speed = this.maxSpeed;
        }

        if (this.speed < 0 ){
            this.speed = 0;
        } 

        if (this.speedX <= 0) {
            this.speedX = 0;
        }
    }

    updatePitch() {
        if (this.pitch <= -this.maxPitch){
            this.pitch = -this.maxPitch;
        } else if (this.pitch >= this.maxPitch) {
            this.pitch = this.maxPitch;
        }
    }

    move(){
        if (this.gp.input["ArrowUp"] || this.gp.input["ArrowDown"] || this.gp.input["ArrowRight"] || this.gp.input["ArrowLeft"]){

            if (!this.collision) {
                if(this.gp.input["ArrowUp"]){
                    this.pitchDown();
                }
                if(this.gp.input["ArrowDown"]){
                    this.pitchUp();
                }
                if(this.gp.input["ArrowRight"]){
                   this.accelerate();
                } 
                if (this.gp.input["ArrowLeft"]) {
                    this.decelerate();
                    this.levelPitch();
                }
            }
            
        } else {
            this.levelPitch();
        }
    }

    fly() {
        this.move();
        this.updatePositions();
        this.updatePitch();
        this.updateSpeed();
    }


    //---- GETTERS ----
        // world position
    getWorldX() {
        return this.worldX;
    }
    getWorldY() {
        return this.worldY;
    }

        // screen position
    getScreenX() {
        return this.screenX;
    }
    getScreenY() {
        return this.screenY;
    }

        // speed
    getSpeedX() {
        return this.speedX;
    }
    getSpeedY() {
        return this.speedY;
    }


    //---- SETTERS ----


    update() {
        this.fly();
        this.gp.physics.update(this);
        this.gp.collisionDetection.mapBounderiesCheck(this);
        
    /*  ------------ DEBUG ----------  */
        console.log("-------SPEED-----");
        console.log("SPEED: "+ Math.round(this.speed));
        console.log("SpeedX: "+ Math.round(this.speedX));
        console.log("SpeedY: "+ Math.round(this.speedY));
        console.log("Lift: "+ this.lift);
        console.log("Drag: " + this.drag);
        console.log("Weight: "+this.weight);
/*         console.log("Pitch: " +this.pitch);
        console.log("pitch to rad: " +this.toRadiants(this.pitch)); */
        /* console.log("-------POSITION-----");
        console.log("World X: "+ this.worldY);
        console.log("World Y: "+this.worldY)
        console.log ("Map X: "+ this.mapY);
        console.log("Mapp Y: "+this.mapY); */
        /* console.log("Collison = " + this.collision); */
    }


    draw() {
        this.element.style.bottom = this.screenY +"px";
        this.element.style.left = this.screenX + "px";
    }
}