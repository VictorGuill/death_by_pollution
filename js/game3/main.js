import {GamePanel}  from './gamePanel.js';

const gp = new GamePanel("gp");

function loop(timestamp) {
    var progress = timestamp - lastRender;

    gp.update();
    gp.draw();
/*     console.log("TS: "+timestamp);
    console.log("LR: "+lastRender); */
    lastRender = timestamp
    window.requestAnimationFrame(loop);
}

var lastRender = 0;
window.requestAnimationFrame(loop);