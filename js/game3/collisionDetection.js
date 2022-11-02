export default class CollisionDetection{
    constructor(gp){
        this.gp = gp;
    }

    mapBounderiesCheck(entity) {
        let entityLeftMapX = entity.getMapX();
        let entityRightMapX = entity.getMapX() + entity.w;
        let entiyTopMapY = entity.getMapY() + entity.h;
        let entityBottomMapY = entity.getMapY();

        switch (entity.getDirection()){
            case "down":
                if (entiyTopMapY + entity.getSpeed() >= this.gp.map.h){
                    entity.collision = true;
                }
                break;
            case "up":
                if (entityBottomMapY - entity.getSpeed() <= 0){
                    entity.collision = true;
                }
                break;
            case "left":
                if (entityLeftMapX - entity.getSpeed() <= 0) {
                    entity.collision = true;
                }
                break;
            case "right":
                if (entityRightMapX + entity.getSpeed() >= this.gp.map.w){
                    entity.collision = true;
                }
                break;
        }       
    }
}