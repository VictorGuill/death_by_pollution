<?php require_once("../php_libraries/bd.php");

if (!isset($_SESSION)) {
  session_start();
}

switch ($_SESSION['phase']) {
  case 0:
    $_SESSION['phase'] = 1;
    changeUserPhase($_SESSION['id'], 1);
    break;
}

if (isset($_COOKIE['game1_score'])) {
  insertUserScore(0, $_SESSION['id'], $_COOKIE['game1_score']);
  unset($_COOKIE['game1_score']);
  setcookie('game1_score', null, -1, '/');
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SUPER SCUBA</title>
  <link rel="icon" type="image/x-icon" href="../media/game1_assets/favicon16.png" />
  <link rel="stylesheet" href="../style/animations.css" />
  <link rel="stylesheet" href="../style/juego1.css" />
</head>

<body>
  <!-- Chromatic aberration filter -->
  <svg width="0" height="0">
    <filter id="chromaticAberration">
      <feColorMatrix type="matrix" result="red_" values="1 0 0 0 0
              0 0 0 0 0 
              0 0 0 0 0 
              0 0 0 1 0" />
      <feOffset in="red_" dx="1" dy="1" result="red" />
      <feColorMatrix type="matrix" in="SourceGraphic" result="blue_" values="0 0 0 0 0
              0 1 0 0 0 
              0 0 1 0 0 
              0 0 0 1 0" />
      <feOffset in="blue_" dx="-1" dy="0" result="blue" />
      <feBlend mode="screen" in="red" in2="blue" />
    </filter>
  </svg>

  <!-- Old crt scanlines effect -->
  <div class="scanline"></div>

  <div id="tutorialModal">
    <p class="title">Tutorial</p>
    <p>Consigue recoger la mayor cantidad de basura en menos de <span> 60 </span> segundos.</p>
    <p>Cada basura recogida <br> te otorga <span> +1 </span> punto.</p>
    <img src="../media/game1_assets/tutorialTrash.png" alt="Tutorial trash example">
    <p>Las ventajas aleatorias te ayudan a recoger objetos <span> más rapido</span>.</p>
    <img src="../media/game1_assets/tutorialPerks.png" alt="Tutorial perks example">
  </div>
  <div id="creditsModal">
    <p class="title">Credits</p>
    <!-- <img src="../media/about/victor.jpg" alt="Tutorial trash example"> -->
    <div></div>
    <p>Juego realizado por <span> Victor Guillén</span></p>
    <a id="githubLogo" href="https://github.com/VictorGuill/" target="_blank"></a>
  </div>

  <!-- JavaScript link -->
  <script defer src="../js/game1/main.js" type="module"></script>
</body>

</html>