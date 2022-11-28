import {GamePanel}  from './gamePanel.js';

const gp = new GamePanel("gp");
const liftCoef = document.getElementById("debug-lift");
const dragCoef = document.getElementById("debug-drag");
const mass = document.getElementById("debug-mass");

function loop(timestamp) {
    var dt = (timestamp - lastRender)/100;
    //console.log("progresstime: "+dt);
    //liftCoef.addEventListener('input', gp.plane.setLiftCoef(liftCoef.valueAsNumber));
    //dragCoef.addEventListener('input', gp.plane.setDragCoef(dragCoef.valueAsNumber));
    //mass.addEventListener('input', gp.plane.setMass(mass.valueAsNumber));
    gp.update(dt);
    gp.draw();
/*     console.log("TS: "+timestamp);
    console.log("LR: "+lastRender); */
    lastRender = timestamp
    window.requestAnimationFrame(loop);
}

var lastRender = 0;
window.requestAnimationFrame(loop);


