<!DOCTYPE html>
<html lang="ca">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ABOUT US</title>
  <link rel="icon" type="image/x-icon" href="/death_by_pollution/media/icons/favicon32.png">
  <link rel="stylesheet" href="/death_by_pollution/tercers/boostrap5/bootstrap.min.css" />
  <script src="/death_by_pollution/tercers/boostrap5/bootstrap.bundle.min.js"></script>
  <link rel="stylesheet" href="../style/colores.css" />
  <link rel="stylesheet" href="../style/landing.css" />
  <link rel="stylesheet" href="../style/about.css" />
  <link rel="stylesheet" href="../style/login.css" />
</head>

<body>
  <?php
  $lang = "en";
  if (isset($_GET["lang"])) {
    $lang = $_GET["lang"];
  }
  $Language = parse_ini_file(("lang/$lang.ini"));
  ?>
  <!-- NAVBAR -->
  <?php require_once("../php_partials/navbar.php"); ?>

  <div class="aboutus">
    <div class="aboutus-header">
      <div id="title">
        <h1><?= $Language["aboutus"] ?></h1>
      </div>
    </div>

    <div class="info-group">
      <div class="photo">
        <img src="../media/about/equipo.png" alt="GROUP5" />
      </div>
      <div class="info">
        <p>
        <?= $Language["about_info"] ?>
        </p>
      </div>
    </div>

    <div id="title">
      <h1><?= $Language["about_team"] ?></h1>
    </div>
    <div class="info-indiv">
      <div class="person1">
        <div class="img">
          <img src="../media/about/guillem.jpg" alt="" />
        </div>
        <div class="name">Guillem Turró</div>
        <div class="info">Junior Programmer</div>
        <div class="rrss">
          <a href="https://es.linkedin.com/" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" /></a>
          <a href="https://github.com/" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" /></a>
          <a href="https://twitter.com/home" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="Twitter" /></a>
        </div>
      </div>
      <div class="person2">
        <div class="img">
          <img src="../media/about/maria.jpg" alt="" />
        </div>
        <div class="name">Maria Garriga</div>
        <div class="info">Junior Programmer</div>
        <div class="rrss">
          <a href="https://es.linkedin.com/" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" /></a>
          <a href="https://github.com/merygarriga" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" /></a>
          <a href="https://twitter.com/home" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="Twitter" /></a>
        </div>
      </div>
      <div class="person3">
        <div class="img">
          <img src="../media/about/victor.jpg" alt="victor foto" />
        </div>
        <div class="name">Victor Guillén</div>
        <div class="info">Junior Programmer</div>
        <div class="rrss">
          <a href="https://es.linkedin.com/" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" /></a>
          <a href="https://github.com/VictorGuill/" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" /></a>
          <a href="https://twitter.com/home" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="Twitter" /></a>
        </div>
      </div>
    </div>
  </div>

  <!-- FOOTER -->
  <hr style="margin: 0; transform: translateY(31.5437356px);">
  <?php require_once("../php_partials/footer.php"); ?>
</body>

</html>