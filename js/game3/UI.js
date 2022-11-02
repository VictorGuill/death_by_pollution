export default class UI {
    constructor(gp){
        this.gp = gp;
        this.addUI();
        this.addElements();
    }

    addUI(){
        this.element = document.createElement("div");
        this.element.setAttribute("id", "ui");
        this.element.style.height = "100%";
        this.element.style.position = "relative";
        this.gp.map.element.appendChild(this.element);
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
    }

    addProgressBar(){
        this.createElement("progressBar", "progress-bar", "50%", "0", "300px", "50px");
        this.progressBar.bar = document.createElement("div");
        this.progressBar.bar.setAttribute("id", "bar");
        this.progressBar.bar.style.width = "1px";
        this.progressBar.appendChild(this.progressBar.bar);
    }

    progress () {
        this.progressBar.bar.style.width = this.gp.map.x/30 +"px";
    }

    draw() {
        this.progress();
    }
}