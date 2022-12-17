import Plane from '../entities/plane.js';
import Map from '../map/map.js';
import UI from '../ui/UI.js';
import CollisionDetection from './collisionDetection.js'
import Phisics from './physics.js';
import EventHandler from './eventHandler.js';
import Slot from './slot.js';
import MenuHandler from './menuHandler.js';

//KEY INPUTS
import input_codes from './keyHandler.js';


//GAME STATES
export const 
    titleState = 0, 
    playState = 1,
    pauseState = 2,
    endGameState = 3;
//MENU STATES
export const 
    mainMenu = 4,
    optionsMenu = 5,
    tutorialMenu = 6;


export class GamePanel {
    constructor (){
        this.id = "gp";
        
        this.gameState = playState;
        this.menuState = mainMenu;

        //game data
        this.time = 0;
        this.score = 0;

        this.addGPelement(); //gp div on document
        this.mH = new MenuHandler(this);
        this.map = new Map(this);
        this.objects = new Array();
        this.physics = new Phisics(this);
        this.plane = new Plane(this, 140, 0);
        this.ui = new UI (this);
        this.eH = new EventHandler(this);
        this.input = input_codes;
        this.collisionDetection = new CollisionDetection(this);
        this.slot = new Slot(this);
    }

    addGPelement(){
        this.element = document.createElement("div");
        this.element.setAttribute("id", this.id);
        document.body.appendChild(this.element);
    }

    update(dt) {
        if (this.gameState == titleState) {
            this.mH.update();
        }else if (this.gameState == playState){
            this.plane.update(dt);
            this.eH.update();
        } else if (this.gameState == pauseState){}
    }

    draw(timeElapsed) {
        if (this.gameState == titleState) {
            this.mH.draw();
        } else if (this.gameState == playState) {
            this.map.draw();
            this.plane.draw();
            this.ui.draw(timeElapsed);
        }

    }
}
