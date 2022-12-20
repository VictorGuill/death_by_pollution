import {GamePanel}  from './gamePanel.js';

const gp = new GamePanel("gp");

function loop(timestamp) {
    var dt = (timestamp - lastRender)/100;
    
    gp.draw(timestamp);
    gp.update(dt);

    lastRender = timestamp
    window.requestAnimationFrame(loop);
}

var lastRender = 0;
window.requestAnimationFrame(loop);