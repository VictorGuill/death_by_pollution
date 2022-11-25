export default class Piece {
    constructor(id) {
        this.id = id;

        this.doc = document.createElement("div");
        this.doc.setAttribute("draggable", true);
        this.id = "piece";
    }


    addPiece() {
        const imgPiece = this.randomPiece();
        this.doc.innerHTML = `<img src="` + imgPiece + `" width="60px" height="60px"/>`;
        this.doc.id = this.id;

        //items picker as the father of the pieces
        const pieces = document.querySelector("#items_picker");
        pieces.appendChild(this.doc);
    }

    randomPiece() {
        var rand_img = new Array();
        rand_img[0] = "../media/game2/tracks/br.jpg";
        rand_img[1] = "../media/game2/tracks/lb.jpg";
        rand_img[2] = "../media/game2/tracks/lr.jpg";
        rand_img[3] = "../media/game2/tracks/lt.jpg";
        rand_img[4] = "../media/game2/tracks/tb.jpg";
        rand_img[5] = "../media/game2/tracks/tr.jpg";

        function rand(n) {
            // creamos un numero al azar entre la cantidad de imágenes
            return (Math.floor(Math.random() * n + 1));
        }
        
        this.src = rand_img[rand(rand_img.length) - 1];
        return this.src;
    }

}
