function rand(n) {
    // creamos un numero al azar entre la cantidad de imágenes
    return (Math.floor(Math.random() * n + 1));
}
//guardas las imagenes en el array
var rand_img = new Array();
rand_img[0] = "../media/br.jpg";
rand_img[1] = "../media/lb.jpg";
rand_img[2] = "../media/lr.jpg";
rand_img[3] = "../media/lt.jpg";
rand_img[4] = "../media/tb.jpg";
rand_img[5] = "../media/tr.jpg";

function randomPiece() {
    document.getElementById("piece").src = rand_img[rand(rand_img.length) - 1];
    document.getElementById("piece2").src = rand_img[rand(rand_img.length) - 1];
    document.getElementById("piece3").src = rand_img[rand(rand_img.length) - 1];
}