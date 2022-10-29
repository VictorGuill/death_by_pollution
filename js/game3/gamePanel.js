import Plane from './plane.js';
import Map from './map.js';

export class GamePanel {
    constructor (){
        this.id = "gp";
        //game states
        this.playState = 0;
        this.pauseState = 1;
        this.gameSate = this.playState;

        this.addGPelement(); //gp div on document
        this.map = new Map(this);
        this.plane = new Plane(this, 5, 5 , 30, 30);
    }

    addGPelement(){
        this.element = document.createElement("div");
        this.element.setAttribute("id", this.id);
        document.body.appendChild(this.element);
    }

    update() {
        if (this.gameSate == this.playState){
            this.plane.update();
        } else if (this.gameSate == this.pauseState){}
    };

    draw() {
        this.plane.draw();
    }


}
