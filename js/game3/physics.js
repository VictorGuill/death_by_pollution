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
        return Math.PI * this.toRadiants(entity.pitch);
    }

    // ------ LIFT ------
    applyLift(entity) {
        if (entity.speed < (.5 * entity.maxSpeed)) {
            this.lift = (entity.speed * entity.weight) / (.5 * entity.maxSpeed);
        } else {
            this.lift = entity.weight + ((entity.speed / 100) * (entity.cL * this.getAngleCoefficient(entity)));
        }
    }

    // ------ DRAG ------
    calcDrag(entity) {
        this.drag = (entity.cD * this.getAngleCoefficient(entity)) + Math.sqrt(entity.speed)/100;
        if (entity.worldY <= 20 && this.drag < 0) {
            this.drag = 0;
        }
    }

    // ------ SPEEDS ------
    calcSpeed(entity) {
        return entity.speed -= this.drag;
    }

    calcSpeedY(entity) {
        return entity.speed * Math.sin(this.toRadiants(entity.pitch)) - entity.weight + this.lift;
    }

    calcSpeedX(entity) {
        return entity.speed * Math.cos(this.toRadiants(entity.pitch));
    }


    update(entity){
        this.applyLift(entity);
        this.calcDrag(entity);
    }
}