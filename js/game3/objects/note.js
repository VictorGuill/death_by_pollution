import Object from "./object.js";

export default class Note extends Object{
    constructor(gp, y){
        super(gp);
        this.name = "note";
        this.w = 50;
        this.h = 50;
        this.index;
        this.createNote(y);
    }

    createNote(y){
        this.initialY = y;
        this.element.classList.add("note");
        this.element.style.bottom = y + "px";
        this.element.style.right = -this.w + "px";

        const noteImg = document.createElement("img");
        noteImg.width = this.w;
        noteImg.height = this.h;
        noteImg.src = "/media/game3/objects/note.gif";
        this.element.appendChild(noteImg);
    }

}