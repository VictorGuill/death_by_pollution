export default class EndScreen {
    constructor(id) {
        this.id = id;

        const END_SCREEN = document.createElement("div");
        END_SCREEN.setAttribute("id", "endScreen");
        const game = document.querySelector("#game");
        game.appendChild(END_SCREEN);

        const END_TITLE = document.createElement("div");
        END_TITLE.setAttribute("id", "title");
        const end_screen = document.querySelector("#endScreen");
        end_screen.appendChild(END_TITLE);

        const SCORE = document.createElement("div");
        SCORE.setAttribute("id", "score");
        end_screen.appendChild(SCORE);

        const PLAY_AGAIN = document.createElement("div");
        PLAY_AGAIN.setAttribute("id", "playAgain");
        end_screen.appendChild(PLAY_AGAIN);
        const LINK_PLAY_AGAIN = document.createElement("a");
        LINK_PLAY_AGAIN.href = "./game2.html"
        LINK_PLAY_AGAIN.innerHTML = "PLAY AGAIN";
        PLAY_AGAIN.appendChild(LINK_PLAY_AGAIN);

        const EXIT = document.createElement("div");
        EXIT.setAttribute("id", "exit");
        EXIT.style.marginTop = "20px";
        end_screen.appendChild(EXIT);
        const LINK_EXIT = document.createElement("a");
        LINK_EXIT.href = "./menu.html"
        LINK_EXIT.innerHTML = "EXIT";
        EXIT.appendChild(LINK_EXIT);

        clearInterval(timeoutHandle);
    }


    Winner(score) {
        const SCORE = document.getElementById("score");
        SCORE.innerHTML = "Your score is:<br><p>" + score + "</p>";
        const END_TITLE = document.querySelector("#endScreen #title");
        END_TITLE.innerHTML = "YOU WIN";
        END_TITLE.style.color = "#DAA520";
    }

    GameOver() {
        const SCORE = document.getElementById("score");
        SCORE.innerHTML = "Your score is:<br><p>0</p>";
        const END_TITLE = document.querySelector("#endScreen #title");
        END_TITLE.innerHTML = "YOU LOSE";
        END_TITLE.style.color = "#c6333f";
    }
}