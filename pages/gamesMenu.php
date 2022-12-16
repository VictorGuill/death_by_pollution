<?php require_once("../php_libraries/bd.php");

if (!isset($_SESSION)) {
  session_start();
}

if (isset($_SESSION["name"])) {
  if (isset($_COOKIE['game1_score'])) {
    insertUserScore(0, $_SESSION['id'], $_COOKIE['game1_score']);
    unset($_COOKIE['game1_score']);
    setcookie('game1_score', null, -1, '/');
  }
  if (isset($_COOKIE['game2_score'])) {
    insertUserScore(1, $_SESSION['id'], $_COOKIE['game2_score']);
    unset($_COOKIE['game2_score']);
    setcookie('game2_score', null, -1, '/');
  }
  if (isset($_COOKIE["game3_score"])) {
    insertUserScore(2, $_SESSION['id'], $_COOKIE['game3_score']);
    unset($_COOKIE["game3_score"]);
    unset($_COOKIE["game3_time"]);
    setcookie('game3_score', null, -1, '/');
    setcookie('game3_time', null, -1, '/');
  }
}

?>

<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>GAMES</title>
  <link rel="icon" type="image/x-icon" href="/death_by_pollution/media/icons/favicon32.png">
  <link rel="stylesheet" href="/death_by_pollution/tercers/boostrap5/bootstrap.min.css" />
  <script src="/death_by_pollution/tercers/boostrap5/bootstrap.bundle.min.js"></script>
  <link rel="stylesheet" href="../style/colores.css" />
  <link rel="stylesheet" href="../style/landing.css" />
  <link rel="stylesheet" href="../style/gamesMenu.css" />
  <link rel="stylesheet" href="../style/login.css" />
</head>

<body>
  <!-- NAVBAR -->
  <?php require_once("../php_partials/navbar.php"); ?>

  <!-- <div id="infoContainer">
    <div id="infoPanel">
      <div id="infoTitle">
        <p>INFORMACIÓN</p>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam a
        veniam alias iusto, nemo asperiores ex, mollitia, sapiente tempore
        harum optio animi non exercitationem veritatis. Hic beatae veniam
        earum at!
      </p>
      <div id="okBtn" onclick="hideInfo()">ACEPTAR</div>
    </div>
  </div> -->

  <div id="gamesContainerWallpaper"></div>
  <div id="gamesContainer">
    <div id="headerContainer">
      <p id="title"><span id="yellowTittle">|</span><?= $Language["games_title"] ?></p>
    </div>
    <div id="games">
      <div id="game1" class="game <?php
                                  if (!isset($_SESSION['phase'])) {
                                    echo "blocked";
                                  }
                                  ?>">
        <p class="title_game">SUPER SCUBA</p>
      </div>
      <div id="game2" class="game <?php
                                  if (isset($_SESSION['phase'])) {
                                    if ($_SESSION['phase'] < 2) {
                                      echo "blocked";
                                    }
                                  } else {
                                    echo "blocked";
                                  }
                                  ?>">
        <p class="title_game"><?php
                              if (isset($_SESSION['phase'])) {
                                if ($_SESSION['phase'] >= 2) {
                                  echo "TRAIN TRACK";
                                }
                              } else {
                                echo "";
                              }
                              ?></p>
      </div>
      <div id="game3" class="game <?php
                                  if (isset($_SESSION['phase'])) {
                                    if ($_SESSION['phase'] < 3) {
                                      echo "blocked";
                                    }
                                  } else {
                                    echo "blocked";
                                  }
                                  ?>">
        <p class="title_game"><?php
                              if (isset($_SESSION['phase'])) {
                                if ($_SESSION['phase'] >= 3) {
                                  echo "SKY DIVE";
                                }
                              } else {
                                echo "";
                              }
                              ?></p>
      </div>
    </div>
    <div id="btnContainer">
      <div id="scoresBtn">
        <a href="./scores.php"><?= $Language["score_button"] ?></a>
        <!-- 🏆 -->
      </div>
    </div>
  </div>

  <!-- <div id="info" onclick="showInfo()">
    <p>i</p>
  </div> -->

  <script src="../js/gamesMenuLogic.js"></script>
  <script src="../js/loginPanelLogic.js"></script>
</body>

</html>