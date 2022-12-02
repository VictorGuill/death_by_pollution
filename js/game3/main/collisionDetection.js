const screenZoneOffsetX = 30;
const screenZoneOffsetY = 20;

export default class CollisionDetection {
  constructor(gp) {
    this.gp = gp;
  }

  mapBounderiesCheck(entity) {
    let entityLeftMapX = entity.getScreenX(),
      entityRightMapX = entity.getScreenX() + entity.w,
      entityTopMapY = entity.getScreenY() + entity.h,
      entityBottomMapY = entity.getScreenY();

    entity.collision = false;

    if (entityTopMapY > this.gp.map.screenPlaneZoneHeight) {
      entity.worldY = this.gp.map.screenPlaneZoneHeight - entity.h;
      entity.speedY = this.gp.physics.gravity;
    }

    if (entityBottomMapY < 0) {
      entity.worldY = 0;
    }

    if (entityLeftMapX < 0) {
      entity.collision = true;
    }

    if (entityRightMapX > this.gp.map.planeZoneHeight) {
      entity.collision = true;
    }
  }

  objectCheck(object) {

    object.collision = false;
    let planeLeft = this.gp.plane.screenX + screenZoneOffsetX, //plane x
      planeRight = this.gp.plane.screenX + screenZoneOffsetX + this.gp.plane.w, //plane x + width
      planeBottom = this.gp.plane.screenY + screenZoneOffsetY, //plane y
      planeTop = this.gp.plane.screenY + screenZoneOffsetY + this.gp.plane.h; //plane Y + height

    let objLeft = object.x,
      objRight = object.x + object.w,
      objBottom = object.y,
      objTop = object.y + object.h;

    if (object.name !== "toxic") {
      if (
        planeRight >= objLeft &&
        planeLeft <= objRight &&
        planeTop >= objBottom &&
        planeBottom <= objTop
      ) {
        object.collision = true;
        object.element.style.animation = "pick-up 1s linear forwards";
        setTimeout(() => {
          object.element.remove();
        }, 1000);
        return true;
      }
    } else {
      //toxic hitbox is circle wich have x, y and radius
      objLeft = object.hitboxX;
      objBottom = object.hitboxY;
      let radius = object.hitboxRadius;

      let testX = objLeft;
      let testY = objBottom;

      //check plane edges with center of toxic on X axis
      if (objLeft < planeLeft) {
        testX = planeLeft;
      } else if (objLeft > planeRight) {
        testX = planeRight;
      }
      //check plane edges with center of toxic on Y axis
      if (objBottom < planeBottom) {
        testY = planeBottom;
      } else if (objBottom > planeTop) {
        testY = planeTop;
      }
      let distX = objLeft - testX;
      let distY = objBottom - testY;
      let distance = Math.sqrt( (distX ** 2) + (distY ** 2));

      if (distance < radius) {
        object.collision = true;
        return true;
      }

    }
  }
}
