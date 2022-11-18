const NUM_PIECES = 30;

function rand(n) {
    // creamos un numero al azar entre la cantidad de imágenes
    return (Math.floor(Math.random() * n + 1));
}

//guardas las imagenes en el array
var rand_img = new Array();
rand_img[0] = "../media/game2/br.jpg";
rand_img[1] = "../media/game2/lb.jpg";
rand_img[2] = "../media/game2/lr.jpg";
rand_img[3] = "../media/game2/lt.jpg";
rand_img[4] = "../media/game2/tb.jpg";
rand_img[5] = "../media/game2/tr.jpg";

function randomPiece() {
    document.getElementById("piece").src = rand_img[rand(rand_img.length) - 1];
    document.getElementById("piece2").src = rand_img[rand(rand_img.length) - 1];
    document.getElementById("piece3").src = rand_img[rand(rand_img.length) - 1];
}

var pieces = [];
for (let i = 0; i < NUM_PIECES; i++) {
    pieces.push("");
}
pieces.forEach(
    function () {
        var piece = document.createElement("div");
        piece.id = "piece";
        piece.innerHTML = `<img src="`+rand_img[rand(rand_img.length) - 1]+`" width="60px" height="60px"/>`;
        document.querySelector('#pieces').appendChild(piece);
        piece.style.width = '60px';
        piece.style.height = '60px';
    }
);

var pieces2 = [];
for (let i = 0; i < NUM_PIECES; i++) {
    pieces2.push("");
}
pieces2.forEach(
    function () {
        var piece2 = document.createElement("div");
        piece2.id = "piece2";
        piece2.innerHTML = `<img src="`+rand_img[rand(rand_img.length) - 1]+`" width="60px" height="60px"/>`;
        document.querySelector('#pieces').appendChild(piece2);
        piece2.style.width = '60px';
        piece2.style.height = '60px';
    }
);

var pieces3 = [];
for (let i = 0; i < NUM_PIECES; i++) {
    pieces3.push("");
}
pieces3.forEach(
    function () {
        var piece3 = document.createElement("div");
        piece3.id = "piece3";
        piece3.innerHTML = `<img src="`+rand_img[rand(rand_img.length) - 1]+`" width="60px" height="60px"/>`;
        document.querySelector('#pices').appendChild(piece3);
        piece3.style.width = '60px';
        piece3.style.height = '60px';
    }
);