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

            const topDecelerationZone = this.gp.map.h - this.gp.map.h/4; 

            if (entityTopMapY >= (topDecelerationZone)) {
                /* let t = (this.gp.map.h - entity.worldY)/entity.speedY;
                let a = entity.speedY/(t**2);
                console.log("Time to max H: "+t );
                console.log("Deceleration: "+a);

                entity.speedY-= a; */
            } 
            if (entityTopMapY >= this.gp.map.h){
                entity.screenY = this.gp.map.h-entity.h;
                entity.speedY = this.gp.physics.gravity;
            } 


            if (entityBottomMapY  <= 0){
                entity.screenY = 0;
            } 

        

            if (entityLeftMapX <= 0) {
                entity.collision = true;
            }
        
                

            if (entityRightMapX >= this.gp.map.w){
                entity.collision = true;
            }
        
    }
}