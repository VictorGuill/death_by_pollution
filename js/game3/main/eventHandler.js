import EventsGenerator from "../events/eventsGenerator.js";

export default class EventHandler{
    constructor(gp){
        this.gp = gp;
        this.evG = new EventsGenerator(gp);
    }

    update(){
        this.evG.update();  
    }
}