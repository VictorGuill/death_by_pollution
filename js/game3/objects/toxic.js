import Object from "./object.js";

export default class Toxic extends Object {
  constructor(gp, y, ) {
    super(gp);
    this.name = "toxic";

    this.initialY = y;
    this.y = this.initialY;

    this.maxSize = 200;
    this.minSize = 80;

    this.createToxic();
    // this.generateHitboxUI();

  }

  generateHitboxUI() {
    // HITBOX DEBUG UI
    this.hitbox = document.createElement("div");
    this.hitbox.style.backgroundColor = "red";
    this.hitbox.style.position = "absolute";
    this.hitbox.style.border = "2px red solid";
    this.hitbox.style.zIndex = "1000";
    this.hitbox.style.height = this.hitboxRadius + "px"; 
    this.hitbox.style.transformOrigin = "bottom";
    this.hitbox.style.animation = "rotate-hitbox 1s linear infinite";

    //CONSOLE LOG
/*     console.log("");
    console.log("element X = " + this.x);
    console.log("hitbox X = " + this.hitboxX);
    console.log("");
    console.log("element Y = " + this.y);
    console.log("hitbox Y = " + this.hitboxY);
 */
    this.gp.map.objects.appendChild(this.hitbox);
  }

  randomCloud() {
    if (this.gp.plane.worldX >= this.gp.map.worldWidth/1.8){
      this.maxSize = 500;
      this.minSize = 200;
    }else if (this.gp.plane.worldX >= this.gp.map.worldWidth/3){
      this.maxSize = 300;
      this.minSize = 150;
    }
    let size = Math.floor(Math.random() * (this.maxSize - this.minSize)) + this.minSize;
    this.w = size;
    this.h = size;
    const num = Math.floor(Math.random() * (5 - 1)) + 1;
    return "url(/death_by_pollution/media/game3/objects/toxic" + num + ".gif)";
  }

  createToxic() {
    this.element.classList.add("toxic");
    this.element.style.backgroundImage = this.randomCloud();
    this.element.style.backgroundSize = "cover";
    // this.element.style.animation = "toxic-pulse 4s infinite";

    this.element.style.bottom = this.y + "px";
    this.element.style.left = -this.w + "px";

    this.element.style.width = this.w + "px";
    this.element.style.height = this.h + "px";

    this.hitboxRadius = this.w/2.5;
  }

  updateHitbox(){
    this.hitboxX = this.x + this.w / 2;
    this.hitboxY = this.y + this.h / 2;

    //DEBUG
    /* this.hitbox.style.bottom = this.hitboxY + "px";
    this.hitbox.style.left = this.hitboxX + "px"; */
  }

  update() {
    this.updateHitbox();
    return super.update();
  }
}
