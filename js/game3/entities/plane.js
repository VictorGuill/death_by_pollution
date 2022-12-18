import { ENDGAME_STATE, PLAY_STATE } from "../main/gamePanel.js";
import { airportWidth } from "../map/map.js";
import planeVfx from "./planeVFX.js";

const TAKEOFF = 0;
const FLYING = 1;
const OUTOFFUEL= 2;
const LANDING = 3;
const ENDGAME = 4;
const LANDED = 5;

const deviceWidth = window.innerWidth;

export default class Plane{
    constructor(gp, inicialX, inicialY) {
        this.gp = gp;
        this.id = "plane";
    //----POSITIONS----
        // screen
        this.initialX = inicialX;
        this.initialY = inicialY;
        // world
        this.worldX = 0;
        this.worldY = 0;

    //----ATRIBUTES----
        this.w = 50;
        this.h = 30;

        this.collision = false;

        this.speed = 0;
        this.speedX = 0;
        this.speedY = 0;
        

        this.hp = 4;

        this.state = "neat";
        this.status = TAKEOFF;
        /* status:
        -takeoff
        -flying
        -outoffuel
        -landing */

        this.pitch = 0;
        this.pitchRate = 4.5;
        this.maxPitch = 45;
        
        this.cL = 0.4; //Lift coeficient
        this.cD = 0.8; //Drag coeficient

        this.acceleration = 18;
        this.deceleration = 5;
        this.maxSpeed = 1000;

        this.canPSM = true;
        this.cobraRange = false;
        this.cobraPitch = 0;
        this.inPSM = false;

        this.mass = 60;
        this.weight = this.gp.physics.getWeight(this);

        this.fuel = 4000;
        this.fuelConsum = .1;

        this.chute = false;
        this.chuteDeployRange = false;
        this.chuteRotation = 0;

        this.ezModePitch = true;

        this.elementAdded = false;
    }

    addPlane() {
        this.element = document.createElement("div");
        this.element.setAttribute("id", this.id);
        this.planeImg = document.createElement("img");
        this.planeImg.setAttribute("src", "/death_by_pollution/media/game3/croped_plane.png");
        this.planeImg.style.width = "50px";
        this.planeImg.style.display = "block";
        this.element.appendChild(this.planeImg);
        this.gp.map.screenPlaneZone.appendChild(this.element);

        this.vfx = new planeVfx(this);
        
        this.elementAdded = true;
    }

    accelerate(dt) {
        this.speed += this.acceleration * dt;
        this.fuel -= this.fuelConsum;
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
            this.cobraPitch += 8;
            if (this.cobraPitch >= 60){
                this.cobraPitch = 60;
            }
            this.speed -= this.deceleration * this.speed *0.005 * dt;
        } else {
            this.recoverCobra();
        }
    }

    recoverCobra() {
        if (this.cobraPitch > 0) {
            this.cobraPitch -= 4;
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
        if (this.status === TAKEOFF || this.status === LANDING || this.status === LANDED){
            if (this.worldY <= 40){
                this.worldY = 40;
            }
        }

        if (this.status ===  TAKEOFF) {
            if (this.worldX >= airportWidth) {
                this.status = FLYING;
            }
        }
        //flying
        if (this.status === FLYING){
            //crash check
            if(this.screenY <= 0 && this.speedY <= -200 && this.gp.physics.getPercentSpeed(this, this.speedX) >= 30){
                console.log("CRASH!!!!!");
            }

            //pull up check
            if (this.gp.physics.lift < (this.weight - this.weight/3)) {
                this.gp.ui.drawCaution();
                this.gp.ui.drawPullUp();
            } else {
                this.gp.ui.alertMessageOff("caution");
                this.gp.ui.alertMessageOff("pullup");
            }

            //fuel checks
            if (this.fuel <= 0) {
                this.status = OUTOFFUEL;
                this.gp.ui.alertMessageOff("lowfuel");
            }else if (this.fuel <= 500) {
                this.gp.ui.drawLowFuel();
            } 

            if (this.worldX >= this.gp.map.worldWidth - airportWidth*2){
                console.log("AIRPORT");
                if (this.worldX )
                this.gp.ui.drawNearAirport();
       
                this.status = LANDING;
            }
        }

        if (this.status === OUTOFFUEL) {
            this.vfx.deployChuteVFX();
            this.speed -= (this.speed)/450;
            this.gp.physics.lift = this.weight-20;
            this.gp.ui.drawDeployChute();
            this.chuteDeployRange = true;
            this.fuel = 0;
            this.collision = true;
        }
        
        //landing
        if (this.status === LANDING) {
            this.gp.eH.evG.spawnOff();
            this.fuel = 9999;
            this.gp.ui.alertMessageOff("caution");
            this.gp.ui.alertMessageOff("pullup");
            if (this.speed >= 600){
                this.gp.ui.drawSlowDown();
            } else {
                this.gp.ui.alertMessageOff("slowdown");
            }
            if (this.worldX >= (this.gp.map.worldWidth - airportWidth + 1000) && this.worldY <= 75 && this.speed <= 400){
                this.gp.ui.alertMessageOff("airportnear");
                this.gp.ui.drawEndGame();
                this.status = LANDED;
            }
            if (this.worldX >= this.gp.map.worldWidth + 500){
                this.status = ENDGAME; 
            }

            //airport near check
        }

        if (this.status === LANDED) {
            this.gp.slot.saveScore();
            console.log("landing procedure");
            this.collision = true;
            this.worldY-= .2;
            this.speed-= 1;

            if (this.speed <= 0) {
                this.gp.gameState = ENDGAME_STATE;
            }
        }

        if (this.status === ENDGAME){
            if (this.state === "explosion"){
                if (this.speed <= 0) {
                    this.gp.gameState = ENDGAME_STATE;
                }
                this.collision = true;
            }else {
                this.gp.ui.drawGameOver();
                this.gp.ui.alertMessageOff("slowdown");
                this.gp.ui.alertMessageOff("airportnear");
                this.vfx.deployChuteVFX();
                this.speed -= (this.speed)/450;
                this.gp.physics.lift = this.weight-20;
                this.gp.ui.drawDeployChute();
                this.chuteDeployRange = true;
                this.fuel = 0;
                this.collision = true;
    
                if (this.speed <= 0) {
                    this.gp.gameState = ENDGAME_STATE;
                }
            } 
        }

    }

    rotate(deg){
        this.element.style.transform = "rotateZ("+(-deg)+"deg)";
    }


    updatePositions(dt) {
         if (this.worldX >= this.gp.map.worldWidth - deviceWidth*2){
            this.worldX += this.speedX * dt/10;
            this.worldY += this.speedY * dt/10;
            if (this.status != LANDED || this.status === ENDGAME){
                this.screenX = ((this.gp.map.screenPlaneZoneWidth-this.w) * (this.gp.physics.getPercentSpeed(this, this.speed)) * .01);
            }
            this.screenY = this.worldY;
        } else {
            this.worldX += this.speedX * dt/10;
            this.worldY += this.speedY * dt/10;
            this.screenX = ((this.gp.map.screenPlaneZoneWidth - this.w) * (this.gp.physics.getPercentSpeed(this, this.speed)) * .01);
            this.screenY = this.worldY;
            // X = ( (7 * mapWidth * Vpercent) / 1000 )[when 100% speed --> maxScreenX = 70% of mapWidth]
            if (this.worldX < 0) {
                this.worldX = 0;
            }
    
            /* if (this.worldY < 0) {
                this.worldY = 0;
            } */    
        }

    }

    updateSpeed(dt) {
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

        if(this.canPSM && this.speed >= 970) {
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
        } else if(this.chute) {
            this.chuteRotation -= .2;
            if (this.chuteRotation <= -90){
                this.chuteRotation = -90;
            }
            this.rotate(this.chuteRotation)
        }else {
            this.rotate(this.pitch);
        }
    }

    move(dt){
        if (this.fuel > 0){
            if (this.gp.input["ArrowUp"] || this.gp.input["ArrowDown"] ||
            this.gp.input["ArrowRight"] || this.gp.input["ArrowLeft"] ||
            this.gp.input[" "]){

            if (!this.collision) {
                if (this.gp.input[" "]) {
                    if(this.chuteDeployRange){
                        this.vfx.deployChuteVFX();
                    }
                    /* if (this.ezModePitch){
                        this.ezModePitch = false;
                    } else {
                        this.ezModePitch = true;
                    } */
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
        
    }

    fly(dt) {
        this.move(dt);
        this.updateSpeed(dt);
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
        this.gp.physics.update(this, dt);
        this.gp.collisionDetection.mapBounderiesCheck(this);
        this.checkState();
        
    /*  ------------ DEBUG ----------  */
        /* console.log("-------SPEED-----");
        console.log("SPEED: "+ Math.round(this.speed));
        console.log("Speed %: " + Math.round(this.gp.physics.getPercentSpeed(this, this.speed))); */
        //console.log("In PSM: "+ this.inPSM);
        //console.log("Cobra range: "+this.cobraRange);
        // console.log("SpeedX: "+ Math.round(this.speedX));
        // console.log("SpeedY: "+ Math.round(this.speedY));
        // console.log("This HP: " + this.hp);
        // console.log("fuel: "+this.fuel);
        //console.log("LIFT COEF: " + this.cL);
        //console.log("DRAG COEF: " +this.cD);
        // console.log("Lift: "+ Math.round(this.gp.physics.lift));
        // console.log("Drag: " + Math.round(this.gp.physics.drag));
        // console.log("Weight: " + Math.round(this.weight));
        //console.log("Pitch: " +this.pitch);
        //console.log("pitch to rad: " +this.toRadiants(this.pitch));
        // console.log("-------POSITION-----");
        // console.log("World   X: "+ Math.round(this.worldX));
        // console.log("World Y: " + Math.round(this.worldY))
        // console.log ("Screen X: "+ Math.round(this.screenX));
        // console.log("Screen Y: "+ Math.round(this.screenY));
        // console.log("Collison = " + this.collision); 
    }


    draw() {
        if (this.gp.gameState == PLAY_STATE) {
            if (!this.elementAdded) {
                this.addPlane();
            }
            this.element.style.bottom = this.worldY +"px";
            this.element.style.left = this.screenX + "px";
        }

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