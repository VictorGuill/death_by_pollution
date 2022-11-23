export default class CollisionDetection{
    constructor(gp){
        this.gp = gp;
    }

    mapBounderiesCheck(entity) {
        let entityLeftMapX = entity.getScreenX();
        let entityRightMapX = entity.getScreenX() + entity.w;
        let entityTopMapY = entity.getScreenY() + entity.h;
        let entityBottomMapY = entity.getScreenY();

        entity.collision = false;



            if (entityTopMapY > this.gp.map.screenPlaneZoneHeight){
                entity.worldY = this.gp.map.screenPlaneZoneHeight - entity.h;
                entity.speedY = this.gp.physics.gravity;
            } 


            if (entityBottomMapY  < 0){
                entity.worldY = 0;
            } 

        

            if (entityLeftMapX < 0) {
                entity.collision = true;
            }
        
                

            if (entityRightMapX > this.gp.map.planeZoneHeight){
                entity.collision = true;
            }
        
    }
}