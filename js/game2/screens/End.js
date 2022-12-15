export function Winner() {
    const END_SCREEN = document.createElement("div");
    END_SCREEN.setAttribute("id", "endSCREEN");
    END_SCREEN.style.position = "absolute";
    END_SCREEN.style.borderRadius = "0.5vmin";
    END_SCREEN.style.width = "60vw";
    END_SCREEN.style.height = "60vh";
    END_SCREEN.style.backgroundColor = "green";
    const game = document.querySelector("#game");
    game.appendChild(END_SCREEN);

    clearInterval(timeoutHandle);
}

export function GameOver() {
    const END_SCREEN= document.createElement("div");
    END_SCREEN.setAttribute("id", "endSCREEN");
    END_SCREEN.style.position = "absolute";
    END_SCREEN.style.borderRadius = "0.5vmin";
    END_SCREEN.style.width = "60vw";
    END_SCREEN.style.height = "60vh";
    END_SCREEN.style.backgroundColor = "red";
    const game = document.querySelector("#game");
    game.appendChild(END_SCREEN);

    const END_TITLE = document.createElement("div");
    END_TITLE.setAttribute("id", "title");
    END_TITLE.style.textAlign = "center";
    END_TITLE.style.justifyContent = "center";
    END_TITLE.style.fontSize = "70px";
    END_TITLE.innerHTML = "THE END";
    const end_screen = document.querySelector("#endSCREEN");
    end_screen.appendChild(END_TITLE);

    const SCORE = document.createElement("div");
    SCORE.setAttribute("id", "score");
    SCORE.innerHTML = "Your score is";
    end_screen.appendChild(SCORE);

    const PLAY_AGAIN = document.createElement("div");
    PLAY_AGAIN.setAttribute("id", "playAgain");
    PLAY_AGAIN.style.marginBottom = "0";
    PLAY_AGAIN.innerHTML = "PLAY AGAIN";
    end_screen.appendChild(PLAY_AGAIN);
    
    const EXIT = document.createElement("div");
    EXIT.setAttribute("id", "exit");
    EXIT.style.marginTop = "0";
    EXIT.innerHTML = "EXIT";
    end_screen.appendChild(EXIT);

    clearInterval(timeoutHandle);
}