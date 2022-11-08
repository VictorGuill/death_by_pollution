import {GamePanel}  from './gamePanel.js';

const gp = new GamePanel("gp");
const liftCoef = document.getElementById("debug-lift");
const dragCoef = document.getElementById("debug-drag");
const mass = document.getElementById("debug-mass");

function loop(timestamp) {
    var progress = timestamp - lastRender;
    //liftCoef.addEventListener('input', gp.plane.setLiftCoef(liftCoef.valueAsNumber));
    //dragCoef.addEventListener('input', gp.plane.setDragCoef(dragCoef.valueAsNumber));
    //mass.addEventListener('input', gp.plane.setMass(mass.valueAsNumber));
    gp.update();
    gp.draw();
/*     console.log("TS: "+timestamp);
    console.log("LR: "+lastRender); */
    lastRender = timestamp
    window.requestAnimationFrame(loop);
}

var lastRender = 0;
window.requestAnimationFrame(loop);


