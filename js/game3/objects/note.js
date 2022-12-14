import Object from "./object.js";

export default class Note extends Object{
    constructor(gp, y){
        super(gp);
        this.name = "note";
        this.w = 50;
        this.h = 50;

        this.hitboxX = this.x;
        this.hitboxY = this.y;
        this.hitboxW = this.w;
        this.hitboxH = this.h;

        this.index;
        this.createNote(y);
    }

    createNote(y){
        this.initialY = y;
        this.element.classList.add("note");
        this.element.style.bottom = y + "px";
        this.element.style.left = -this.w + "px";
        this.element.style.width = this.w + "px";
        this.element.style.height = this.h + "px";

        this.element.style.backgroundImage = "url(/media/game3/objects/note.gif)";
        this.element.style.backgroundSize = "cover";
    }

}