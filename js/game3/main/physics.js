export default class Phisics {
    constructor(gamePanel){
        this.gp = gamePanel;

        this.gravity = -5;

        this.drag = 1;

        this.staticDrag = .5;

        this.lift = 0;
    }

    // ------ UTILITY ------
    getWeight(entity){
        this.staticDrag *= entity.cD;
        return Math.abs(entity.mass * this.gravity);
    }



    toRadiants (angle) {
        return angle * (Math.PI / 180);
    }

    getPercentSpeed(entity, speed) {
        let speedPerCent = (100*speed)/entity.maxSpeed;
        return speedPerCent;
    }

    getAngleCoefficient() {
        return Math.PI * this.toRadiants(this.gp.plane.pitch);
    }


    // ------ LIFT ------
    applyLift(entity, dt) {
        this.lift = ((entity.speed**2)/entity.weight*2) * entity.cL;
        if (this.lift >= entity.weight) {
            this.lift = entity.weight;
        }
    }

    // ------ DRAG ------
    applyDrag(entity, dt) {
        this.drag = (.01 * entity.speedX) * this.getAngleCoefficient() * entity.cD * dt;
    }


    
    // ------ SPEEDS ------
    calcSpeed(entity) {
        return entity.speed - this.drag - this.staticDrag;
    }

    calcSpeedY(entity) {
        return entity.speed * Math.sin(this.toRadiants(entity.pitch)) /* - entity.weight + this.lift */;
    }

    calcSpeedX(entity) {
        return (entity.speed * Math.cos(this.toRadiants(entity.pitch)));
    }


    update(entity, dt){
        this.applyLift(entity, dt);
        this.applyDrag(entity, dt);
    }
}