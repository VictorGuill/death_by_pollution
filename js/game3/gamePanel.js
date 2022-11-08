import Plane from './plane.js';
import Map from './map.js';
import UI from './UI.js';
import CollisionDetection from './collisionDetection.js'
import Phisics from './physics.js';
import input_codes from './keyHandler.js';

const gameWrapper = document.getElementById("game-wrapper");

export class GamePanel {
    constructor (){
        this.id = "gp";
        //game states
        this.playState = 0;
        this.pauseState = 1;
        this.gameState = this.playState;

        this.addGPelement(); //gp div on document
        this.input = input_codes;
        this.map = new Map(this);
        this.collisionDetection = new CollisionDetection(this);
        this.physics = new Phisics(this);
        this.plane = new Plane(this, 20, 40);
        this.ui = new UI (this);
        
    }

    addGPelement(){
        this.element = document.createElement("div");
        this.element.setAttribute("id", this.id);
        document.body.appendChild(this.element);
    }

    update() {
        if (this.gameState == this.playState){
            this.plane.update();
        } else if (this.gameState == this.pauseState){}
    }

    draw() {
        this.plane.draw();
        this.map.draw();
        this.ui.draw();
    }
}
