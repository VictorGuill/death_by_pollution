import planeVfx from "./planeVFX.js";

export default class Plane{
    constructor(gp, inicialX, inicialY) {
        this.gp = gp;
        this.id = "plane";
    //----POSITIONS----
        // screen
        this.screenX = inicialX;
        this.screenY = inicialY;
        // world
        this.worldX = 0;
        this.worldY = 0;

    //----ATRIBUTES----
        this.w = 50;
        this.h = 50;

        this.collision = false;

        this.speed = 0;
        this.speedX = 0;
        this.speedY = 0;
        this.maxSpeed = 800;

        this.state = "";

        this.pitch = 0;
        this.pitchRate = 5;
        this.maxPitch = 45;
        
        this.cL = 1; //Lift coeficient
        this.cD = 0.2; //Drag coeficient

        this.acceleration = 15;
        this.deceleration = 4;

        this.canPSM = true;
        this.cobraRange = false;
        this.cobraPitch = 0;
        this.inPSM = false;

        this.mass = 100;
        this.weight = this.gp.physics.getWeight(this);

        this.thrust = 0;

        this.ezModePitch = true;

        this.addPlane();
        this.vfx = new planeVfx(this);
    }

    addPlane() {
        this.element = document.createElement("div");
        this.element.setAttribute("id", this.id);
        const planeImg = document.createElement("img");
        planeImg.setAttribute("src", "/media/game3/f22.png");
        planeImg.style.width = "50px";
        this.element.appendChild(planeImg);
        this.gp.map.element.appendChild(this.element);
        this.element.style.width = this.w+"px";
        this.element.style.height = this.h+"px";
        this.element.style.zIndex = "1000";
    }

    accelerate(dt) {
        this.speed += this.acceleration * dt;
    }

    decelerate(dt) {
        if (this.inPSM || this.cobraRange){
            this.cobraManeuver(dt);
        } else {
        this.speed -= this.deceleration * dt;
        }
    }

    cobraManeuver(dt) {
        if (this.speed >= 300){
            this.inPSM = true;
            this.vfx.thrust.style.opacity = "0";
            this.cobraPitch += 3;
            if (this.cobraPitch >= 60){
                this.cobraPitch = 60;
            }
            this.speed -= this.deceleration*10 * dt;
            this.worldY += this.deceleration * dt;
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
                this.vfx.thrust.style.opacity = "1";
            }
        }  
    }

    levelPitch(dt) {
        if (this.pitch == 0) {
            this.pitch = 0;
        } else if (this.pitch < 0) {
            this.pitch+= this.pitchRate/4 * dt;
        } else if (this.pitch > 0) {
            this.pitch-= this.pitchRate/4 * dt;
        }
    }

    pitchUp(dt) {
        if (!this.inPSM) {
            this.pitch += this.pitchRate * dt;
        }
    }

    pitchDown(dt) {
        if (!this.inPSM) {
            this.pitch -= this.pitchRate * dt;
        }
    }


    checkState() {
        //takeOff
    }

    rotate(deg){
        this.element.style.transform = "rotateZ("+(-deg)+"deg)";
    }


    updatePositions(dt) {
        this.worldX += this.speedX * dt/10;
        this.worldY += this.speedY * dt/10;
        if (this.gp.physics.lift >= this.weight) {
            
        }
        this.screenX = ((5 * this.gp.map.w * (this.gp.physics.getPercentSpeed(this, this.speed))) * .001);
        this.screenY = this.worldY;
        // X = ( (7 * mapWidth * Vpercent) / 1000 )[when 100% speed --> maxScreenX = 70% of mapWidth]
        
        if (this.worldX < 0) {
            this.worldX = 0;
        }

        /* if (this.worldY < 0) {
            this.worldY = 0;
        } */
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

        if(this.canPSM && this.speed >= 1300) {
            this.cobraRange = true;
        } else {
            this.cobraRange = false;
        }
    }

    updatePitch() {
        if (this.pitch <= -this.maxPitch){
            this.pitch = -this.maxPitch;
        } else if (this.pitch >= this.maxPitch) {
            this.pitch = this.maxPitch;
        }

        /* if ( this.screenY < this.w/2){
            this.levelPitch();
        } */

        if (this.inPSM) {
            this.rotate(this.cobraPitch);
            this.recoverCobra();
        } else {
            this.rotate(this.pitch);
        }
    }

    move(dt){
        if (this.gp.input["ArrowUp"] || this.gp.input["ArrowDown"] ||
            this.gp.input["ArrowRight"] || this.gp.input["ArrowLeft"] ||
            this.gp.input[" "]){

            if (!this.collision) {
                if (this.gp.input[" "]) {
                    if (this.ezModePitch){
                        this.ezModePitch = false;
                    } else {
                        this.ezModePitch = true;
                    }
                }
                if(this.gp.input["ArrowUp"]){
                    this.pitchDown(dt);
                }
                if(this.gp.input["ArrowDown"]){
                    this.pitchUp(dt);
                }
                if(this.gp.input["ArrowRight"]){
                   this.accelerate(dt);
                } 
                if (this.gp.input["ArrowLeft"]) {
                    this.decelerate(dt);
                }
            }
            
        }
    }

    fly(dt) {
        this.move(dt);
        this.updateSpeed();
        this.updatePitch(dt);
        this.updatePositions(dt);
        this.vfx.update();
        //toggle level pitch for ez mode
        if(this.ezModePitch){
            this.levelPitch(dt);
        }
        
    }

    update(dt) {
        this.fly(dt);
        this.gp.physics.update(this);
        this.gp.collisionDetection.mapBounderiesCheck(this);
        
    /*  ------------ DEBUG ----------  */
        /* console.log("-------SPEED-----");
        console.log("SPEED: "+ Math.round(this.speed));
        console.log("Speed %: " + Math.round(this.gp.physics.getPercentSpeed(this, this.speed))); */
        //console.log("In PSM: "+ this.inPSM);
        //console.log("Cobra range: "+this.cobraRange);
        // console.log("SpeedX: "+ Math.round(this.speedX));
        // console.log("SpeedY: "+ Math.round(this.speedY));
        //console.log("LIFT COEF: " + this.cL);
        //console.log("DRAG COEF: " +this.cD);
        //console.log("Lift: "+ Math.round(this.gp.physics.lift));
        //console.log("Drag: " + Math.round(this.gp.physics.drag));
        //console.log("Weight: " + Math.round(this.weight));
        //console.log("Pitch: " +this.pitch);
        //console.log("pitch to rad: " +this.toRadiants(this.pitch));
        console.log("-------POSITION-----");
        console.log("World X: "+ Math.round(this.worldX));
        console.log("World Y: " + Math.round(this.worldY))
        console.log ("Screen X: "+ Math.round(this.screenX));
        console.log("Screen Y: "+ Math.round(this.screenY));
        /* console.log("Collison = " + this.collision); */
    }


    draw() {
        this.element.style.bottom = this.screenY +"px";
        this.element.style.left = this.screenX + "px";
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
}