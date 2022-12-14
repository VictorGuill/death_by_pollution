import {GamePanel}  from './gamePanel.js';

const gp = new GamePanel("gp");

function loop(timestamp) {
    var dt = (timestamp - lastRender)/100;
    gp.update(dt);
    gp.draw(timestamp);

    lastRender = timestamp
    window.requestAnimationFrame(loop);
}

var lastRender = 0;
window.requestAnimationFrame(loop);