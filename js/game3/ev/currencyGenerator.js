import Coin from "../objects/coin.js";
import Diamond from "../objects/diamond.js";
import Note from "../objects/note.js";

export default class CurrencyGenerator{
    constructor(gp){
        this.gp = gp;

        this.currencyOnScreen = new Array();

        this.fCoins = this.gp.map.w/4;
        this.fNotes = this.gp.map.w/4;
        this.fDiamonds = this.gp.map.w/8;

        
        this.spawnCoin = this.fCoins;
        this.spawnNote = this.fNotes;
        this.spawnDiamond = this.fDiamonds;
        
    }

    randomY(max, min){
        return Math.floor(Math.random() * (max - min)) + min;
    }

    generateCoin(){
        const coin = new Coin(this.gp, this.randomY(this.gp.map.h * 2, 50));
        this.currencyOnScreen.push(coin);
    }

    generateNote(){
        const note = new Note(this.gp, this.randomY(this.gp.map.h * 2, 50));
        this.currencyOnScreen.push(note);
    }

    generateDiamond(){
        const diamond = new Diamond(this.gp, this.randomY(this.gp.map.h * 2, 50));
        this.currencyOnScreen.push(diamond);
    }


    spawnCheck() {
        let planeX = this.gp.plane.worldX; 

        if (planeX >= this.spawnCoin){
            this.generateCoin();
            this.spawnCoin = planeX + this.fCoins;
        }
        if (planeX >= this.spawnNote){
            this.generateNote();
            this.spawnNote = planeX + this.fNotes;
        }
        if (planeX >= this.spawnDiamond){
            this.generateDiamond();
            this.spawnDiamond = planeX + this.fDiamonds;
        }
    }


    update(){
        this.spawnCheck();

        this.currencyOnScreen.forEach(e => {
            e.update();
            if (parseInt(e.element.style.right) >= this.gp.map.w){
                e.element.remove();
                this.currencyOnScreen.shift();
            }
        });
    }

}