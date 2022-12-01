<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Landing</title>
  <link rel="icon" type="image/x-icon" href="/death_by_pollution/media/icons/favicon32.png">
  <link rel="stylesheet" href="./tercers/boostrap5/bootstrap.min.css" />
  <script src="./tercers/boostrap5/bootstrap.bundle.min.js"></script>
  <link rel="stylesheet" href="./style/colores.css" />
  <link rel="stylesheet" href="./style/landing.css" />
  <link rel="stylesheet" href="./style/login.css" />
</head>

<body>
  <!-- NAVBAR -->
  <?php require_once("./php_partials/navbar.php"); ?>

  <!-- CONTENT -->
  <div id="scroll-container">
    <!-- PRESENTATION -->
    <div id="start" class="scroll-area">
      <div class="container my-auto" >
        <div class="row align-items-center">
          <div class="col-8 text-start">
            <div id="claim">
              <p id="claim-text">
                TEXTO SUPER <br />
                <span> IMPACTANTE </span><br />MODERNO<br />
                OU YEASSS...
              </p>
              <div id="claim-btn"><a id="aboutBtn" href="#about">SABER MÁS ⬇</a></div>
            </div>
          </div>
          <div class="col-4">
            <img src="./media/landing/fotoVentanaAvion.png" alt="Ventana avion" />
          </div>
        </div>
      </div>
    </div>
    <!-- ABOUT -->
    <div id="about" class="scroll-area">
      <div class="container mt-5">
        <h1 class="slide-title contain-left">¿Que es eco-travelling?</h1>
        <div class="slide-content">
          <div class="row">
            <div class="col-6"><img class="img-fluid" src="./media/landing/eco_walk-removebg-preview.png" alt="eco_img"></div>
            <div class="col-6">
              <p>“Eco travel encompasses all the variants of ecotourism and green travel. So whether it’s responsible travel, sustainable tourism, ethical tourism or culturally aware travel, they all fall under the same umbrella of eco travel. In essence, anyone who prefers to travel the green way is an eco traveller.”</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- THE PROBLEM -->
    <div id="problem" class="scroll-area">
      <div class="container mt-6">
        <h3 class="slide-title contain-left">El problema</h3>
        <div class="slide-content">
          <div class="row justify-content-between">
            <div class="col-3 stat">
              <h1>Tierra<span><img src="./media/icons/train_white.png" alt="train"></span></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit eu mattis rutrum curae ultricies aptent, sociosqu tempor aliquam ridiculus litora.</p>
            </div>
            <div class="col-3 stat">
              <h1>Mar<span><img src="./media/icons/ship_white.png" alt="ship"></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit eu mattis rutrum curae ultricies aptent, sociosqu tempor aliquam ridiculus litora.</p>
            </div>
            <div class="col-3 stat">
              <h1>Aire<span><img src="./media/icons/plane_white.png" alt="airplane"></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit eu mattis rutrum curae ultricies aptent, sociosqu tempor aliquam ridiculus litora.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- SERVICES -->
    <div id="services" class="scroll-area">
      <div class="container mt-5">
        <h3 class="slide-title contain-left">Servicios</h3>
        <div class="slide-content">
          <p class="slide-text contain-center">Nuestra amplia flota de transportes <span style="color: var(--ACCENT);">eco</span> actuales.</p>
          <div class="row justify-content-between mt-6">
            <div class="col-4"><img class="services-img" src="./media/landing/eco_plane_stats.png" alt="eco_plane_stats"></div>
            <div class="col-4"><img class="services-img" src="./media/landing/eco_plane_stats.png" alt="eco_plane_stats"></div>
            <div class="col-4"><img class="services-img" src="./media/landing/eco_plane_stats.png" alt="eco_plane_stats"></div>
          </div>
          <div class="row justify-content-between mt-5">
            <div class="col-4">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed dignissim eros.</p>
            </div>
            <div class="col-4">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed dignissim eros.</p>
            </div>
            <div class="col-4">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed dignissim eros.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- FOOTER -->
    <?php require_once("./php_partials/footer.php"); ?>

  </div>

  <!-- UTILITIES -->
  <a id="goStartBtn" href="#start">
    <div>⬆</div>
  </a>

  <script src="./js/landing.js"></script>
</body>

</html>