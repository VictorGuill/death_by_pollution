export default class Phisics {
    constructor(gamePanel){
        this.gp = gamePanel;
        this.gravity = 0.09;
        this.lift = 0;
    }

    apply(entity){
        if (entity.mapY > 0){
            entity.mapY -= this.gravity;
        }
        
    }
}