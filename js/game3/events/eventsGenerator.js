import Coin from "../objects/coin.js";
import Diamond from "../objects/diamond.js";
import Note from "../objects/note.js";
import Toxic from "../objects/toxic.js";

export default class EventsGenerator{
    constructor(gp){
        this.gp = gp;

        this.fCoins = this.gp.map.w * 1.5;
        this.fNotes = this.gp.map.w * 4;
        this.fDiamonds = this.gp.map.w * 5;

        this.fToxic = this.gp.map.w/4;

        
        this.spawnCoin = this.fCoins;
        this.spawnNote = this.fNotes;
        this.spawnDiamond = this.fDiamonds;
        this.spawnToxic = this.fToxic;
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

        if (planeX >= this.spawnCoin){
            this.generateCoin();
            this.spawnCoin = planeX + this.random(this.fCoins, this.fCoins/4);
        }
        if (planeX >= this.spawnNote){
            this.generateNote();
            this.spawnNote = planeX + this.random(this.fNotes, this.fNotes/3);
        }
        if (planeX >= this.spawnDiamond){
            this.generateDiamond();
            this.spawnDiamond = planeX + this.random(this.fDiamonds, this.fDiamonds/2);
        }
        if(planeX >= this.spawnToxic){
            this.generateToxic();
            this.spawnToxic = planeX + this.random(this.fToxic, this.fToxic/2);
        }
    }


    update(){
        this.spawnCheck();

        this.gp.objects.forEach((obj, ind) => {
            obj.update();
            obj.draw();

            this.gp.collisionDetection.objectCheck(obj)

            if(obj.collision){
                switch(obj.name){
                    case "coin":
                        this.gp.ui.score += 100;
                        this.gp.objects.splice(ind, 1);
                        break;
                    case "note":
                        this.gp.ui.score += 200;
                        this.gp.objects.splice(ind, 1);
                        break
                    case "diamond":
                        this.gp.ui.score += 500;
                        this.gp.objects.splice(ind, 1)
                        break;
                    case "toxic":
                        if (!obj.ticked){
                            this.gp.plane.hp -= 33;
                        }
                        obj.ticked = true;
                        break;
                }
            }

            if (parseInt(obj.getX()) <= -Math.abs(obj.getWidth()+200)){
                obj.element.remove();
                this.gp.objects.shift();
            }
        });
    }

}