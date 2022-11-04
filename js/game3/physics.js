export default class Phisics {
    constructor(gamePanel){
        this.gp = gamePanel;

        this.gravity = -9.8;


    }

    calcWeight(entity){
        return Math.abs(entity.mass * this.gravity);
    }

    applyLift(entity) {
        const speedXPercent = (100*entity.speedX)/entity.maxSpeed; 
        let ci = Math.PI * this.toRadiants(entity.pitch);//Lift Coefficient 

        if (entity.speed< (.5*entity.maxSpeed)) {
            entity.lift = (entity.speed*entity.weight) / (.5*entity.maxSpeed);
        } else {
            entity.lift = entity.weight + (.5 * entity.speed *ci);
        }  
    }

    applyDrag(entity) {
        entity.speedX -= entity.drag;
    }

    toRadiants (angle) {
        return angle * (Math.PI / 180);
    }

    calcSpeedY(entity) {
        return entity.speed * Math.sin(this.toRadiants(entity.pitch)) - entity.weight + entity.lift;
    }

    calcSpeedX(entity) {
        return entity.speed * Math.cos(this.toRadiants(entity.pitch));
    }

    update(entity){
        this.applyLift(entity);
        this.applyDrag(entity);
    }

}