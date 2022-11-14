export default class UI {
    constructor(gp){
        this.gp = gp;
        this.addUI();
        this.addElements();
    }

    addUI(){
        this.element = document.createElement("div");
        this.element.setAttribute("id", "ui");
        this.gp.element.appendChild(this.element);
    }

    addElements(){
        this.addProgressBar();
        this.addTimeScore();
        this.addHud();
       // this.addDebugControls();
    }

    addDebugControls(){
        const debugDiv = document.createElement("div");
        debugDiv.setAttribute("id", "debug-section");
        debugDiv.style.display = "flex";
        debugDiv.style.justifyContent = "center";
        this.element.appendChild(debugDiv);

        //MASS
        this.massRange = document.createElement("input");
            //label
        const massLabel = document.createElement("label");
        this.massRange.setAttribute("id", "debug-mass");
        massLabel.setAttribute("for", "debug-mass");
        
        massLabel.innerHTML = "MASS";
        this.massRange.setAttribute("type", "range");
        this.massRange.setAttribute("min", 0);
        this.massRange.setAttribute("max", 100);

        //LIFT
        this.liftCoef = document.createElement("input");
        //label
        const liftLabel = document.createElement("label");
        this.liftCoef.setAttribute("id", "debug-lift");
        this.liftCoef.setAttribute("type", "range");
        this.liftCoef.setAttribute("step", "0.01");
        this.liftCoef.setAttribute("min", "0");
        this.liftCoef.setAttribute("max", "1.5");
        liftLabel.setAttribute("for", "debug-lift");
        liftLabel.innerHTML = "LIFT";
       
        
        

        //DRAG
        this.dragCoef = document.createElement("input");
        //label
        const dragLabel = document.createElement("label");
        this.dragCoef.setAttribute("id", "debug-drag");
        this.dragCoef.setAttribute("type", "range");
        this.dragCoef.setAttribute("step", "0.01");
        this.dragCoef.setAttribute("min", "0");
        this.dragCoef.setAttribute("max", "1.5");
        dragLabel.setAttribute("for", "debug-drag");
        dragLabel.innerHTML = "DRAG";
        
        debugDiv.appendChild(massLabel);
        debugDiv.appendChild(this.massRange);
        
        debugDiv.appendChild(liftLabel);
        debugDiv.appendChild(this.liftCoef);

        debugDiv.appendChild(dragLabel);
        debugDiv.appendChild(this.dragCoef);

    }

    addHud(){
        this.hud = document.createElement("div");
        this.hud.setAttribute("id", "hud");
        //speedometer
        this.hud.speedometer = document.createElement("div");
        this.hud.speedometer.setAttribute("id", "speedometer");
            //label
        this.hud.speedometer.label = document.createElement("p");
        this.hud.speedometer.label.setAttribute("id", "speedometer-label");
        this.hud.speedometer.label.innerHTML = "SPEED";
        this.hud.speedometer.appendChild(this.hud.speedometer.label);
            //metric
        this.hud.speedometer.metric = document.createElement("div");
        this.hud.speedometer.metric.setAttribute("id", "speedometer-metric");
        this.hud.speedometer.appendChild(this.hud.speedometer.metric);

        //altimeter
        this.hud.altimeter = document.createElement("div");
        this.hud.altimeter.setAttribute("id", "altimeter");
            //label
        this.hud.altimeter.label = document.createElement("p");
        this.hud.altimeter.label.setAttribute("id", "altimeter-label");
        this.hud.altimeter.label.innerHTML = "ALT";
        this.hud.altimeter.appendChild(this.hud.altimeter.label);
            //metric
        this.hud.altimeter.metric = document.createElement("div");
        this.hud.altimeter.metric.setAttribute("id", "altimeter-metric");
        this.hud.altimeter.appendChild(this.hud.altimeter.metric);

        this.hud.appendChild(this.hud.speedometer);
        this.hud.appendChild(this.hud.altimeter);
        this.element.appendChild(this.hud);
    }

    addTimeScore(){
        this.timeScore = document.createElement("div");
        this.timeScore.setAttribute("id", "time-score");
        const timeLabel = document.createElement("p");
        timeLabel.innerHTML = "TIME 23:40:11";

        const scoreLabel = document.createElement("p");
        scoreLabel.innerHTML = "SCORE 000000";

        this.timeScore.appendChild(timeLabel);
        this.timeScore.appendChild(scoreLabel);

        this.element.appendChild(this.timeScore);

    }

    addProgressBar(){
        this.progressBar = document.createElement("div");
        this.progressBar.setAttribute("id", "progress-bar");
        this.progressBar.bar = document.createElement("div");
        this.progressBar.bar.setAttribute("id", "bar");
        this.progressBar.bar.style.width = "1px";
        this.progressBar.appendChild(this.progressBar.bar);
        this.element.appendChild(this.progressBar);
    }

    progress() {
        this.progressBar.bar.style.width = this.gp.plane.worldX/100 +"px";
    }

    draw() {
        this.progress();
    }
}