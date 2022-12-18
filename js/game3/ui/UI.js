import { PLAY_STATE } from "../main/gamePanel.js";

export default class UI {
    constructor(gp){
        this.gp = gp;

        this.elementsAdded = false;
        
        this.mssgOn = false;

        this.caution = false;
        this.airportNear = false;
        this.pullUp = false;
        this.slowDown = false;
        this.lowFuel = false;
        this.deployChute = false;
        this.endGame = false;
    }

    addUI(){
        this.element = document.createElement("div");
        this.element.setAttribute("id", "ui");
        this.gp.element.appendChild(this.element);
        this.addElements();
        this.elementsAdded = true;
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
        //SPEEDOMETER
        this.hud.speedometer = document.createElement("div");
        this.hud.speedometer.setAttribute("id", "speedometer");
            //img
            this.hud.speedometer.imgContainer = document.createElement("div");
            this.hud.speedometer.imgContainer.setAttribute("id", "speedometerImgContainer");
            this.hud.speedometer.imgContainer.style.height = "100%";
            const speedometerImg = document.createElement("img");
            speedometerImg.src = "/death_by_pollution/media/game3/hud/speedometer_hud.png";
            this.hud.speedometer.imgContainer.appendChild(speedometerImg);
            this.hud.speedometer.appendChild(this.hud.speedometer.imgContainer);
            //res
            const speedometerElements = document.createElement("div");
            speedometerElements.setAttribute("id", "speedometer-elements");
                //label
                const speedometerLabel = document.createElement("p");
                speedometerLabel.setAttribute("id", "speedometer-label");
                speedometerLabel.innerHTML = "SPEED";
                speedometerElements.appendChild(speedometerLabel);
                //value
                this.hud.speedometer.value = document.createElement("p");
                this.hud.speedometer.value.setAttribute("id", "speedometer-value");
                speedometerElements.appendChild(this.hud.speedometer.value);
                //metric
                this.hud.speedometer.metric = document.createElement("div");
                this.hud.speedometer.metric.setAttribute("id", "speedometer-metric");
                speedometerElements.appendChild(this.hud.speedometer.metric);

                this.hud.speedometer.appendChild(speedometerElements);

        //ALTIMETER
        this.hud.altimeter = document.createElement("div");
        this.hud.altimeter.setAttribute("id", "altimeter");
            //img
            const altimeterImg = document.createElement("img");
            altimeterImg.src = "/death_by_pollution/media/game3/hud/altimeter_hud.png";
            this.hud.altimeter.appendChild(altimeterImg);
            //res
            const altimeterElements = document.createElement("div");
            altimeterElements.setAttribute("id", "altimeter-elements");
                //label
                this.hud.altimeter.label = document.createElement("p");
                this.hud.altimeter.label.setAttribute("id", "altimeter-label");
                this.hud.altimeter.label.innerHTML = "ALT";
                altimeterElements.appendChild(this.hud.altimeter.label);
                //value
                this.hud.altimeter.value = document.createElement("p");
                this.hud.altimeter.value.setAttribute("id", "altimeter-value");
                this.hud.altimeter.value.innerHTML = "250";
                altimeterElements.appendChild(this.hud.altimeter.value);
                //metric
                this.hud.altimeter.metric = document.createElement("div");
                this.hud.altimeter.metric.setAttribute("id", "altimeter-metric");
                altimeterElements.appendChild(this.hud.altimeter.metric);

                this.hud.altimeter.appendChild(altimeterElements);


        this.hud.appendChild(this.hud.speedometer);
        this.hud.appendChild(this.hud.altimeter);
        this.element.appendChild(this.hud);

        this.power = document.querySelector("#imgContainer",":after");
    }

    addTimeScore(){
        const timeScore = document.createElement("div");
        timeScore.setAttribute("id", "time-score");

        this.timeLabel = document.createElement("p");
        this.scoreLabel = document.createElement("p");
        
        timeScore.appendChild(this.timeLabel);
        timeScore.appendChild(this.scoreLabel);

        this.element.appendChild(timeScore);
    }

    addProgressBar(){
        this.progressBar = document.createElement("div");
        this.progressBar.setAttribute("id", "progress-bar");
        this.progressBar.bar = document.createElement("div");
        this.progressBar.bar.setAttribute("id", "bar");
        this.progressBar.bar.style.width = "1px";
        this.progressBar.appendChild(this.progressBar.bar);
        const airport = document.createElement("img");
        airport.src = "/death_by_pollution/media/game3/hud/airport.png";
        airport.style.width = "40px";
        airport.style.marginLeft = "auto";
        this.progressBar.appendChild(airport);
        this.element.appendChild(this.progressBar);
    }

    drawProgressBar() {
        this.progressBar.bar.style.width = this.gp.plane.worldX/100 +"px";
    }

    drawTimeScore(t){
        this.gp.time = this.secondsToTime(t/1000);
        this.timeLabel.innerHTML = "TIME " + this.gp.time;
        this.scoreLabel.innerHTML = "SCORE " + this.gp.score;
    }

    drawHudMetrics(){
        //speedometer
        this.hud.speedometer.value.innerHTML = Math.round(this.gp.plane.speed);
        this.hud.speedometer.metric.style.backgroundPositionY = this.gp.plane.speed + "px";
        this.hud.speedometer.imgContainer.style.setProperty("--powerHeight", this.gp.physics.getPercentSpeed(this.gp.plane, this.gp.plane.speed)-8  + "%")

        //altimeter
        this.hud.altimeter.value.innerHTML = Math.round(this.gp.plane.worldY);
        this.hud.altimeter.metric.style.backgroundPositionY = this.gp.plane.worldY + "px";
    }


    drawAlertMessage(mssg, y, pulse){
            const mDiv = document.createElement("div");
            mDiv.setAttribute("id", "alert-"+mssg.replaceAll(" ", "").toLowerCase());
            mDiv.style.position = "absolute";
            mDiv.style.top = y + "px";
            if (pulse) {
                mDiv.style.animation = "pulse 1s infinite";
            }
            const m = document.createElement("span");
            m.innerHTML = mssg.toUpperCase();
            m.classList.add("alertMessage");
            mDiv.appendChild(m);
            this.element.appendChild(mDiv);
    }

    drawCaution(){
        if (!this.caution) {
            this.drawAlertMessage("CAUTION", this.gp.map.h/6.5, false);
            this.caution = true;
        }
    }

    drawPullUp(){
        if (!this.pullUp) {
            this.drawCaution();
            this.drawAlertMessage("PULL UP", this.gp.map.h/1.2, true);
            this.pullUp = true;
        }
    }
    drawLowFuel(){
        if (!this.lowFuel) {
            this.drawCaution();
            this.drawAlertMessage("LOW FUEL", this.gp.map.h/4, true);
            this.lowFuel = true
        }
    }
    drawSlowDown(){
        if (!this.slowDown) {
            this.drawAlertMessage("SLOW DOWN", this.gp.map.h/1.2, true);
            this.slowDown = true
        }
    }

    drawNearAirport(){
        if (!this.airportNear) {
            this.drawAlertMessage("AIRPORT NEAR", this.gp.map.h/6.5, false);
            this.airportNear = true;
        }
    }

    drawDeployChute(){
        if (!this.deployChute) {
            this.drawAlertMessage("CHUTE DEPLOYED", this.gp.map.h/3.6, false);
            this.deployChute = true;
        }

    }

    drawEndGame() {
        if (!this.endGame){
            const mDiv = document.createElement("div");
            mDiv.setAttribute("id", "alertEndGame");
            mDiv.style.position = "absolute";
            mDiv.style.top = this.gp.map.h/3.6 + "px";
            const m = document.createElement("span");
            m.innerHTML = "MISSION ACOMPLISHED!";
            mDiv.appendChild(m);
            this.element.appendChild(mDiv);
            this.endGame = true;
        }
    }

    alertMessageOff(mssg){
        const alert = document.querySelector("#alert-"+mssg);
        if(alert != null || alert != undefined){
            alert.style.animation = "fade-out 1s forwards";
            alert.remove();
            switch(mssg){
                case "caution":
                    this.caution = false;
                    break;
                case "pullup":
                    this.pullUp = false;
                    break;
                case "lowfuel":
                    this.lowFuel = false;
                    break;
                case "airportnear":
                    this.airportNear = false;
                    break;
                case "slowdown":
                    this.slowDown = false;
                    break;
                case "deploychute":
                    this.deployChute = false;
                    break;
            }
        }
        
    }


    secondsToTime(e) {
        const m = Math.floor((e % 3600) / 60)
            .toString()
            .padStart(2, "0"),
          s = Math.floor(e % 60)
            .toString()
            .padStart(2, "0");
      
        return m + ":" + s;
    }

    draw(timeElapsed) {
        if (this.gp.gameState == PLAY_STATE) {
            if (!this.elementsAdded) {
                this.addUI();
            }
        this.drawProgressBar();
        this.drawTimeScore(timeElapsed);
        this.drawHudMetrics();

/*         this.alertMessageOff("caution");
        this.drawNearAirport();
        this.drawSlowDown();
        this.drawLowFuel(); */
        }

    }
}
