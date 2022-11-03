export default class Phisics {
    constructor(gamePanel){
        this.gp = gamePanel;

        this.gravity = -9.8;


    }

    calcWeight(entity){
        return entity.mass * this.gravity;
    }

    applyDrag(entity){
        if (entity.speed > 0){
            entity.speed -= entity.drag;
        }
    }

    applyLift() {
        
    }

    toRadiants (angle) {
        return angle * (Math.PI / 180);
    }

    calcSpeedY(entity) {
        return entity.speed * Math.sin(this.toRadiants(entity.pitch)) + entity.weight + entity.lift;
    }

    calcSpeedX(entity) {
        return entity.speed * Math.cos(this.toRadiants(entity.pitch)) + entity.lift;
    }

    update(entity){
        this.applyDrag(entity);
    }

}