export default class planeVfx {
    constructor(plane){
        this.plane = plane;
        this.addVFX();
    }

    addVFX(){
        this.thrustVFX();
        this.windVFX();
        // this.explosionVFX();
    }

    thrustVFX(){
        this.thrust = document.createElement("img");
        this.thrust.style.position = "absolute";
        this.thrust.style.width = "20px";
        this.thrust.style.top = "0";
        this.thrust.style.left = "-14px";
        this.thrust.style.transformOrigin = "right";
        this.thrust.src = "/death_by_pollution/media/game3/vfx/thrust_blue.gif";
        this.plane.element.appendChild(this.thrust);
    }

    windVFX(){
        this.speed = document.createElement("img");
        this.speed.style.position = "absolute";
        this.speed.style.opacity = "0";
        this.speed.style.width = "100px";
        this.speed.style.height = "15px";
        this.speed.style.top = "0";
        this.speed.style.left = "-60px";
        this.speed.style.transformOrigin = "right";
        this.speed.src= "/death_by_pollution/media/game3/vfx/wind.gif";
        this.plane.element.appendChild(this.speed);
    }

    deployChuteVFX(){
        if (!this.plane.chute){
            this.chute = document.createElement("img");
            this.chute.style.position = "absolute";
            this.chute.style.opacity = "1";
            this.chute.style.left = "-80px";
            this.chute.src= "/death_by_pollution/media/game3/vfx/chute.gif";
            this.chute.style.animation = "deploy-chute 1s linear forwards"
            this.plane.element.appendChild(this.chute);
            
            this.plane.chute = true;
        }
    }

    smokeVFX(){
        this.smoke = document.createElement("img");
        this.smoke.classList.add("effectVFX");
        this.smoke.setAttribute("id", "smoke");
        this.smoke.style.position = "absolute";
        this.smoke.style.right = this.plane.w - this.plane.w/5 +"px";
        this.smoke.src = "/death_by_pollution/media/game3/vfx/smoke.gif";
        this.plane.element.appendChild(this.smoke);
    }
    smoke_fireVFX(){
        this.smoke_fire = document.createElement("img");
        this.smoke_fire.classList.add("effectVFX");
        this.smoke_fire.style.position = "absolute";
        this.smoke_fire.setAttribute("id", "smoke_fire");
        this.smoke_fire.style.right = this.plane.w - this.plane.w/4 +"px";
        this.smoke_fire.src = "/death_by_pollution/media/game3/vfx/smoke_fire.gif"; 
        this.plane.element.appendChild(this.smoke_fire);
    }

    fireVFX(){
        this.fire = document.createElement("img");
        this.fire.classList.add("effectVFX");

        this.fire.style.position = "absolute";
        this.fire.setAttribute("id", "fire");
        this.fire.style.right = this.plane.w - this.plane.w/2 +"px";
        this.fire.src = "/death_by_pollution/media/game3/vfx/fire.gif";
        this.plane.element.appendChild(this.fire);
    }

    explosionVFX(){
        this.explosion = document.createElement("img");
        this.explosion.style.position = "absolute";
        this.explosion.setAttribute("id", "explosion");
        this.explosion.style.margin = "auto";
        this.explosion.src = "/death_by_pollution/media/game3/vfx/explosion1.gif";
        this.plane.element.appendChild(this.explosion);
    }

    removeVFX(e){
        e.style.animation = "effect-out 4s linear forwards";
        setTimeout( function() {
            e.remove();
        }, 5000)
    }

    updateThrust(){
        const statusEffects = document.querySelectorAll(".effectVFX");
        this.thrust.style.transform = "scaleX(" + parseFloat((this.plane.speed) * .002) +") scaleY("+parseFloat((this.plane.speed) * .001)+") rotateZ("+(-this.plane.pitch*1.2)+"deg)";
        statusEffects.forEach(e=>{
            e.style.transform = "rotateZ("+(-this.plane.pitch/4)+"deg)";
        });
    }



    updateWind(){
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

    planeStateVFX(){
        const planeHp = this.plane.hp;
        if(planeHp == 3 && this.plane.state !== "smoke"){
            this.plane.state = "smoke";
            this.smokeVFX();
        } else if (planeHp == 2 && this.plane.state !== "smoke_fire"){
            this.plane.state = "smoke_fire";
            this.smoke_fireVFX();
            this.removeVFX(this.smoke);
        } else if (planeHp == 1 && this.plane.state !== "fire"){
            this.plane.state = "fire";
            this.fireVFX();
        } else if (planeHp == 0 && this.plane.state !== "explosion"){
            this.plane.state = "explosion";
            this.explosionVFX();
            this.removeVFX(this.smoke_fire);
            this.removeVFX(this.fire);
            this.plane.planeImg.style.opacity = 0;
        }

        if (this.plane.state === "explosion"){
            if (this.plane.screenY <= 10){
                this.plane.speed -= 4;
            } else {
                this.plane.speed -= .5;
            }
            this.plane.pitch = -10;
        }   
    }

    update(){
        this.updateThrust();
        this.updateWind();
        this.planeStateVFX();
    }
}