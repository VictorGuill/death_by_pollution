export default class Phisics {
    constructor(gamePanel){
        this.gp = gamePanel;

        this.gravity = -9.8;

        this.drag = 0;

        this.lift = 0;


    }

    // ------ UTILITY ------
    getWeight(entity){
        return Math.abs(entity.mass * this.gravity);
    }

    toRadiants (angle) {
        return angle * (Math.PI / 180);
    }

    getPercentSpeed(entity, speed) {
        let speedPerCent = (100*speed)/entity.maxSpeed;
        return speedPerCent;
    }

    getAngleCoefficient(entity) {
        return 2 * Math.PI * this.toRadiants(entity.pitch);
    }


    // ------ LIFT ------
    applyLift(entity) {
  
    }

    // ------ DRAG ------
    calcDrag(entity) {
        this.drag = 0;

        if (this.drag <= 0) {
            this.drag = 0;
        }
    }


    
    // ------ SPEEDS ------
    calcSpeed(entity) {
        return entity.speed - this.drag;
    }

    calcSpeedY(entity) {
        return entity.speed * Math.sin(this.toRadiants(entity.pitch));
    }

    calcSpeedX(entity) {
        return entity.speed * Math.cos(this.toRadiants(entity.pitch));
    }


    update(entity){
        this.applyLift(entity);
        this.calcDrag(entity);
    }
}