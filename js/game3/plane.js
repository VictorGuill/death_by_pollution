export default class Plane{
    constructor(gp, inicialX, inicialY) {
        this.gp = gp;
        this.id = "plane";
    //----POSITIONS----
        // screen
        this.screenX = inicialX;
        this.screenY = inicialY;
        // world
        this.worldX = this.gp.map.x + inicialX;
        this.worldY = this.screenY;

    //----ATRIBUTES----
        this.w = 50;
        this.h = 50;

        this.collision = false;

        this.speed = 0;
        this.speedX = 0;
        this.speedY = 0;
        this.maxSpeed = 1500;

        this.state = "";

        this.pitch = 0;
        this.pitchRate = 1.3;
        this.maxPitch = 45;
        
        this.cL = 1; //Lift coeficient
        this.cD = 1; //Drag coeficient

        this.mass = 100;
        this.weight = this.gp.physics.getWeight(this);

        this.acceleration = 3;
        this.deceleration = 3;

        this.canPSM = false;
        this.cobraPitch = 0;
        this.inPSM = false;

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
        if (this.canPSM && this.inPSM) {
            this.cobraManeuver();
        } else {
            this.speed -= this.deceleration;
        }
    }

    cobraManeuver() {
        if (this.gp.physics.getPercentSpeed(this, this.speed) >= 45){
            this.inPSM = true;
            this.cobraPitch += 5;
            if (this.cobraPitch >= 60){
                this.cobraPitch = 60;
            }
            this.speed -= this.deceleration*8;
        } else {
            this.recoverCobra();
        }
        
    }

    recoverCobra() {
        if (this.cobraPitch > 0) {
            this.cobraPitch -= 2;
            if (this.cobraPitch <= 0){
                this.cobraPitch = 0;
                this.inPSM = false;
            }
        }  
    }

    levelPitch() {
        if (this.pitch == 0) {
            this.pitch = 0;
        } else if (this.pitch < 0) {
            this.pitch+= this.pitchRate/4;
        } else if (this.pitch > 0) {
            this.pitch-= this.pitchRate/4;
        }
    }

    pitchUp() {
        if (!this.inPSM) {
            this.pitch += this.pitchRate;
        }
    }

    pitchDown() {
        if ( this.screenY > this.w/2){
            if (!this.inPSM) {
                this.pitch -= this.pitchRate;
            }
        }
    }


    checkState() {
        //takeOff
    }

    rotate(deg){
        this.element.style.transform = "rotateZ("+(-deg)+"deg)";
    }


    updatePositions() {
        this.worldX += this.speed/100;
        this.worldY += this.speedY/100;
        this.screenX = ((7 * this.gp.map.w * (this.gp.physics.getPercentSpeed(this, this.speed))) * .001);
        // X = ( (7 * mapWidth * Vpercent) / 1000 )[when 100% speed --> maxScreenX = 70% of mapWidth]
        this.screenY = this.worldY;
        
        if (this.worldX < 0) {
            this.worldX = 0;
        }

        if (this.worldY < 0) {
            this.worldY = 0;
        }
    }

    updateSpeed() {
        this.speed = this.gp.physics.calcSpeed(this);
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

        if(this.canPSM && this.gp.physics.getPercentSpeed(this, this.speed) >= 80) {
            this.inPSM = true;
        }
    }

    updatePitch() {
        if (this.pitch <= -this.maxPitch){
            this.pitch = -this.maxPitch;
        } else if (this.pitch >= this.maxPitch) {
            this.pitch = this.maxPitch;
        }

        if (this.inPSM) {
            this.rotate(this.cobraPitch);
            this.recoverCobra();
        } else {
            this.rotate(this.pitch);
        }
    }

    move(){
        if (this.gp.input["ArrowUp"] || this.gp.input["ArrowDown"] ||
            this.gp.input["ArrowRight"] || this.gp.input["ArrowLeft"] ||
            this.gp.input[" "]){

            if (!this.collision) {
                if (this.gp.input[" "]) {
                    
                }
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
                }
            }
            
        }
    }

    fly() {
        this.move();
        this.updatePositions();
        this.updatePitch();
        this.updateSpeed();
        this.levelPitch();
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
    setLiftCoef(newCoef){
        this.cL = newCoef;
    }

    setDragCoef(newCoef) {
        this.cD = newCoef;
    }

    setMass(newMass) {
        this.mass = newMass;
        this.weight = this.gp.physics.getWeight(this);
    }

    update() {
        this.fly();
        this.gp.physics.update(this);
        this.gp.collisionDetection.mapBounderiesCheck(this);
        
    /*  ------------ DEBUG ----------  */
        console.log("-------SPEED-----");
        console.log("SPEED: "+ Math.round(this.speed));
        console.log("Speed %: " + this.gp.physics.getPercentSpeed(this, this.speed));
        console.log("SpeedX: "+ Math.round(this.speedX));
        console.log("SpeedY: "+ Math.round(this.speedY));
        console.log("LIFT COEF: " + this.cL);
        console.log("DRAG COEF: " +this.cD);
        console.log("Lift: "+ Math.round(this.gp.physics.lift));
        console.log("Drag: " + Math.round(this.gp.physics.drag));
        console.log("Weight: " + Math.round(this.weight));
        //console.log("Pitch: " +this.pitch);
        //console.log("pitch to rad: " +this.toRadiants(this.pitch));
        /* console.log("-------POSITION-----");
        console.log("World X: "+ this.worldX);
        console.log("World Y: "+this.worldY)
        console.log ("Screen X: "+ this.screenX);
        console.log("Screen Y: "+this.screenY); */
        /* console.log("Collison = " + this.collision); */
    }


    draw() {
        this.element.style.bottom = this.screenY +"px";
        this.element.style.left = this.screenX + "px";
    }
}