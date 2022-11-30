export default class Piece {
    constructor(id) {
        this.id = id;

        this.doc = document.createElement("div");
        this.doc.setAttribute("draggable", true);
        this.id = "piece";
    }


    addPiece(id) {
        const imgPiece = this.randomPiece(); 
        let srcPiece = imgPiece.src;
        let classPiece = imgPiece.class;
        this.doc.innerHTML = `<img id ="p`+ id +`" class ="img`+ classPiece +`" src="` + srcPiece + `" width="60px" height="60px"/>`;
        this.doc.id = this.id;

        //items picker as the father of the pieces
        const pieces = document.querySelector("#items_picker");
        pieces.appendChild(this.doc);
    }

    randomPiece() {
        //image array route
        let rand_img = new Array();
        rand_img[0] = "../media/game2/tracks/tb.png";
        rand_img[1] = "../media/game2/tracks/br.png";
        rand_img[2] = "../media/game2/tracks/lb.png";
        rand_img[3] = "../media/game2/tracks/lr.png";
        rand_img[4] = "../media/game2/tracks/tr.png";
        rand_img[5] = "../media/game2/tracks/lt.png";
        rand_img[6] = "../media/game2/tracks/tb.png";
        rand_img[7] = "../media/game2/tracks/lr.png";
        rand_img[8] = "../media/game2/tracks/tb.png";
        rand_img[9] = "../media/game2/tracks/lr.png";
    
        let random = this.rand(rand_img.length);
        this.src = rand_img[random];
        
        return {
            src: this.src,
            class: random
          };
    }
    
    //creating a random num betweeen 0 and the number of img 
    rand(max) {
        return (Math.floor(Math.random() * max));
    }

}
