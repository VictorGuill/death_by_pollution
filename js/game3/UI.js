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

    createElement(uiElement, id, x, y, w, h) {
        this[uiElement] = document.createElement("div");
        this[uiElement].setAttribute("id", id);
        this[uiElement].style.left = x;
        this[uiElement].style.top = y;
        this[uiElement].style.width = w;
        this[uiElement].style.height = h;
        this.element.appendChild(this[uiElement]);
    }

    addElements(){
        this.addProgressBar();
        this.addDebugControls();
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

    addProgressBar(){
        this.createElement("progressBar", "progress-bar", "50%", "40", "300px", "50px");
        this.progressBar.bar = document.createElement("div");
        this.progressBar.bar.setAttribute("id", "bar");
        this.progressBar.bar.style.width = "1px";
        this.progressBar.appendChild(this.progressBar.bar);
    }

    progress () {
        this.progressBar.bar.style.width = this.gp.plane.worldX/100 +"px";
    }

    draw() {
        this.progress();
    }
}