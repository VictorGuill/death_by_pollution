import Coin from "../objects/coin.js";
import Diamond from "../objects/diamond.js";
import Note from "../objects/note.js";
import Toxic from "../objects/toxic.js";

export default class EventsGenerator{
    constructor(gp){
        this.gp = gp;

        this.init = false;
        // this.generateToxicDebug(400, 200);

        this.coinGen = true;
        this.noteGen = true;
        this.diamondGen = true;
        this.toxicGen = true;
    }

    initGenerator() {
        this.fCoins = this.gp.map.w;
        this.fNotes = this.gp.map.w;
        this.fDiamonds = this.gp.map.w * 3;
        this.fToxic = this.gp.map.w/2;

        this.spawnCoin = this.fCoins;
        this.spawnNote = this.fNotes;
        this.spawnDiamond = this.fDiamonds;
        this.spawnToxic = this.fToxic;

        this.init = true;
    }

    generateToxicDebug(x, y){
        const toxic = new Toxic(this.gp, y);
        toxic.element.style.left = x + "px"; 
    }

    random(max, min){
        return Math.floor(Math.random() * (max - min)) + min;
    }
    

    generateCoin(){
        const coin = new Coin(this.gp, this.random(this.gp.map.h, 50));
        this.gp.objects.push(coin);
    }

    generateNote(){
        const note = new Note(this.gp, this.random(this.gp.map.h * 2 -20, this.gp.map.h/2-this.gp.plane.h));
        this.gp.objects.push(note);
    }

    generateDiamond(){
        const diamond = new Diamond(this.gp, this.random((this.gp.map.h * 2) - 20, this.gp.map.h-this.gp.plane.h));
        this.gp.objects.push(diamond);
    }

    generateToxic(){
        const toxic = new Toxic(this.gp, this.random(this.gp.map.h * 2 - 20, 50));
        this.gp.objects.push(toxic);
    }


    spawnCheck() {
        let planeX = this.gp.plane.worldX; 
        
        if  (this.coinGen){
            if (planeX >= this.spawnCoin){
                this.generateCoin();
                this.spawnCoin = planeX + this.random(this.fCoins, this.fCoins/4);
            }
        }
        
        if (this.noteGen){
            if (planeX >= this.spawnNote){
                this.generateNote();
                this.spawnNote = planeX + this.random(this.fNotes, this.fNotes/3);
            }
        }
        if (this.diamondGen) {
            if (planeX >= this.spawnDiamond){
                this.generateDiamond();
                this.spawnDiamond = planeX + this.random(this.fDiamonds, this.fDiamonds/2);
            }
        }
        if (this.toxicGen){
            if(planeX >= this.spawnToxic){
                this.generateToxic();
                this.spawnToxic = planeX + this.random(this.fToxic, this.fToxic/2);
            }
        }
        
    }


    update(){
        if (this.gp.map.elementsAdded) {
            if (!this.init) {
                this.initGenerator();
            }
        }
        
        this.spawnCheck();
        this.gp.objects.forEach((obj) => {
            obj.update();
            obj.draw();
            if (this.gp.plane.state != "explosion"){
                if(this.gp.collisionDetection.objectCheck(obj)){
                    switch(obj.name){
                        case "coin":
                            this.gp.score += 100;
                            break;
                        case "note":
                            this.gp.score += 200;
                            break
                        case "diamond":
                            this.gp.score += 500;
                            break;
                        case "toxic":
                            if (!obj.ticked){
                                // this.gp.plane.hp--;
                            }
                            obj.ticked = true;
                            break;
                    }
                }
            }

            if (parseInt(obj.getX()) <= -Math.abs(obj.getWidth()+200)){
                obj.element.remove();
                this.gp.objects.shift();
            }
        });
    }
}