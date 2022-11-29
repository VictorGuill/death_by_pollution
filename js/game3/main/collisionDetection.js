const screenZoneOffsetX = 30;
const screenZoneOffsetY = 20

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

    objectCheck(object){
        let planeLeft = this.gp.plane.screenX + screenZoneOffsetX;
        let planeRight = this.gp.plane.screenX + screenZoneOffsetX + this.gp.plane.w
        let planeBottom = this.gp.plane.screenY + screenZoneOffsetY;
        let planeTop = this.gp.plane.screenY + screenZoneOffsetY + this.gp.plane.h;
        
       if (planeRight >= object.x &&
           planeLeft <= object.x + object.w &&
           planeTop >= object.y &&
           planeBottom <= object.y + object.h) {
            object.collision = true;
            if(object.name != "toxic"){
                object.element.style.animation = "pick-up 1s linear";
                object.element.style.animationFillMode = "forwards";
            }
            
            return true;
        }
    }
}