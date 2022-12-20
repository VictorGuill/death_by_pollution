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
    TITLE_STATE = 0, 
    PLAY_STATE = 1,
    PAUSE_STATE = 2,
    ENDGAME_STATE = 3;
//MENU STATES
export const 
    MAIN_MENU = 4,
    SETTINGS_MENU = 5,
    TUTORIAL_MENU = 6,
    EXIT_MENU = 7;


export class GamePanel {
    constructor (){
        this.id = "gp";
        
        this.gameState = TITLE_STATE;
        this.menuState = MAIN_MENU;

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

    tryAgain(){
        this.map.element.remove();
        this.ui.element.remove();
        this.mH.exitMenu.element.remove();
        this.eH.evG.spawnOn();

        this.score = 0;
        this.mH = new MenuHandler(this);
        this.map = new Map(this);
        this.objects = new Array();
        this.plane = new Plane(this, 140, 0);
        this.ui = new UI (this);
        this.slot = new Slot(this);
        this.gameState = PLAY_STATE;
    }

    update(dt) {
        if (this.gameState == TITLE_STATE) {
            this.mH.update();
        }else if (this.gameState == PLAY_STATE){
            this.plane.update(dt);
            this.eH.update();
        } else if (this.gameState == PAUSE_STATE){

        } else if (this.gameState == ENDGAME_STATE){
            this.menuState = EXIT_MENU;
            this.mH.update();
        }
    }

    draw(timeElapsed) {
        if (this.gameState == TITLE_STATE) {
            this.mH.draw();
        } else if (this.gameState == PLAY_STATE) {
            this.map.draw();
            this.plane.draw();
            this.ui.draw(timeElapsed);
        } else if (this.gameState === ENDGAME_STATE){
            this.mH.draw();
        }
    }
}