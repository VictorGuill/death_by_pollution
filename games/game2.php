<?php require_once("../php_libraries/bd.php");

if (!isset($_SESSION)) {
  session_start();
}

switch ($_SESSION['phase']) {
  case 1:
    $_SESSION['phase'] = 2;
    changeUserPhase($_SESSION['id'], 2);
    break;
}

if (isset($_COOKIE['game2_score'])) {
  insertUserScore(1, $_SESSION['id'], $_COOKIE['game2_score']);
  unset($_COOKIE['game2_score']);
  setcookie('game2_score', null, -1, '/');
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>TRAIN TRACK</title>
  <link rel="stylesheet" href="../style/game2.css" />
  <link rel='shortcut icon' href='../media/game2/objects/house2.gif' type='image/x-icon'>
</head>

<body>
  <div id='game'>
    <div id="map"></div>
    <div id='tools'>
    <div id="exitGame"><a href='../pages/gamesMenu.php'>X</a></div>
      <div id="items_picker"></div>
      <div id="button">
        <button>
          <img src="../media/game2/reload.png" width="50px" height="50px">
        </button>
      </div>
      <div id="timer"></div>
      <div id='buttonCheckTrack' class="blocked">
        <button>CHECK TRACK</button>
      </div>
    </div>
  </div>

  <script src="../js/game2/main.js" type="module"></script>
  <script type="text/javascript">
    var timeoutHandle;

    function countdown(minutes, seconds) {
      function tick() {
        seconds--;
        var counter = document.getElementById("timer");
        counter.innerHTML = minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if (seconds > 0) {
          timeoutHandle = setTimeout(tick, 1000);
        } else {
          if (minutes >= 1) {
            setTimeout(function() {
              countdown(minutes - 1, 60);
            }, 1000);
          }
        }
        if (minutes === 0 && seconds === 0) {
          GameOver();
        }
      }
      tick();
    }

    countdown(3, 30);

    function GameOver() {
      const END_SCREEN = document.createElement("div");
      END_SCREEN.setAttribute("id", "endScreen");
      const game = document.querySelector("#game");
      game.appendChild(END_SCREEN);

      const END_TITLE = document.createElement("div");
      END_TITLE.setAttribute("id", "title");
      END_TITLE.innerHTML = "YOU LOSE";
      END_TITLE.style.color = "#c6333f";
      const end_screen = document.querySelector("#endScreen");
      end_screen.appendChild(END_TITLE);

      const SCORE = document.createElement("div");
      SCORE.setAttribute("id", "score");
      SCORE.innerHTML = "Your score is:<br><p>0</p>";
      end_screen.appendChild(SCORE);

      const PLAY_AGAIN = document.createElement("div");
      PLAY_AGAIN.setAttribute("id", "playAgain");
      end_screen.appendChild(PLAY_AGAIN);
      const LINK_PLAY_AGAIN = document.createElement("a");
      LINK_PLAY_AGAIN.href = "./game2.php"
      LINK_PLAY_AGAIN.innerHTML = "PLAY AGAIN";
      PLAY_AGAIN.appendChild(LINK_PLAY_AGAIN);

      const EXIT = document.createElement("div");
      EXIT.setAttribute("id", "exit");
      EXIT.style.marginTop = "0";
      end_screen.appendChild(EXIT);
      const LINK_EXIT = document.createElement("a");
      LINK_EXIT.href = "../pages/gamesMenu.php"
      LINK_EXIT.innerHTML = "EXIT";
      EXIT.appendChild(LINK_EXIT);

      clearInterval(timeoutHandle);
    }
  </script>
</body>

</html>