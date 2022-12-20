<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>GREEN VIEWS</title>
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
      <div id="text1">SAME GREEN VIEWS</div>
      <div id="planeWindow">
        <!-- <img src="./media/landing/fotoVentanaAvion.png" alt="Plane window" /> -->
        <video autoplay loop muted>
          <source src="./media/landing/fotoVentanaAvion_editable.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <div id="text2">NEW TRAVELING MEANS</div>
      <div class="container my-auto">
        <div id="aboutBtnRow">
          <a id="aboutBtn" href="#about">
            <p><?= $Language["whatis"] ?></p>
            <svg width="30px" height="20px">
              <path stroke="#ffffff" stroke-width="2px" d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "></path>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- ABOUT -->
    <div id="about" class="scroll-area">
      <div class="container m-auto">
        <div class="slide-content">
          <div class="row justify-content-center ">
            <div class="col-6">
              <div class="about-card card">
                <div class="card-body text-center">
                  <p class="about-card-secondary">Eco-traveling</p>
                  <br>
                  <p class="about-card-body"><?= $Language["ecoTravelling"] ?></p>
                  <br>
                  <p class="about-card-secondary"><?= $Language["ecoTravellingforUs"] ?></p>
                  <p class="about-card-secondary"><?= $Language["ecoTravellingWayTravel"] ?></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- THE PROBLEM -->
    <div id="problem" class="scroll-area">
      <div class="container my-auto">
        <div class="slide-content">
          <div class="row justify-content-center">
            <div class="col-3">
              <h3 id="problem-title"><?= $Language["problemTitle"] ?></h3>
            </div>
          </div>
          <div class="row justify-content-center mb-5">
            <div class="col-1 d-flex justify-content-center">
      
              <svg width="30px" height="20px">
                <path stroke="#510087" stroke-width="4px" style="fill: none; transform: scale(.8)" d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "></path>
              </svg>
            </div>
          </div>

          <div class="row justify-content-around">
            <div class="problem-card card col-3">
              <div class="card-header">
                <h1 class="card-title"><?= $Language["oceanTitle"] ?></h1>
              </div>
              <div class="card-body">
                <p class="card-text"><?= $Language["oceanText"] ?></p>
              </div>
            </div>
            <div class="problem-card card col-3">
              <div class="card-header">
                <h1 class="card-title"><?= $Language["earthTitle"] ?></h1>
              </div>
              <div class="card-body">
                <p class="card-text"><?= $Language["earthText"] ?></p>
              </div>
            </div>
            <div class="problem-card card col-3">
              <div class="card-header">

                <h1 class="card-title"><?= $Language["airTitle"] ?></h1>
              </div>
              <div class="card-body">
                <p class="card-text"><?= $Language["airText"] ?></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- SERVICES -->
    <div id="services" class="scroll-area">
      <div class="container my-auto">
        <div class="slide-content">
          <div class="row justify-content-center">
            <div class="col">
              <h3 id="service-title"><?= $Language["servicesTitle"] ?></h3>
            </div>
          </div>

          <div class="row justify-content-center mb-5">
            <div class="col-1 d-flex justify-content-center">
              <svg width="30px" height="20px">
                <path stroke="#faffff" stroke-width="4px" style="fill: none; transform: scale(.8)" d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "></path>
              </svg>
            </div>
          </div>

          <div class="row justify-content-around mt-5">
            <div id="serviceCard1" class="card col-3">
              <div class="card-header">
                <h1 class="card-title"><?= $Language["service_card1_title"] ?></h1>
              </div>
              <div class="card-body" style="display: inherit;">
                <p class="card-text"><?= $Language["service_card1_body"] ?></p>
              </div>
              <a href="./pages/gamesMenu.php" class="btn gamesLink mb-2" style="display: none;">JUGAR</a>
            </div>
            <div id="serviceCard2" class="card col-3">
              <div class="card-header">
                <h1 class="card-title"><?= $Language["service_card2_title"] ?></h1>
              </div>
              <div class="card-body">
                <p class="card-text"><?= $Language["service_card2_body"] ?></p>
              </div>
              <a href="./pages/gamesMenu.php" class="btn gamesLink mb-2" style="display: none;">JUGAR</a>
            </div>
            <div id="serviceCard3" class="card col-3">
              <div class="card-header">
                <h1 class="card-title"><?= $Language["service_card3_title"] ?></h1>
              </div>
              <div class="card-body">
                <p class="card-text"><?= $Language["service_card3_body"] ?></p>
              </div>
              <a href="./pages/gamesMenu.php" class="btn gamesLink mb-2" style="display: none;">JUGAR</a>
            </div>
          </div>

          <div class="row justify-content-around mt-5">
            <div class="col-3 text-center">
              <a href="./pages/gamesMenu.php" style="text-decoration: none;">
                <p class="service-card-link" style="line-height: 30px;"><?= $Language["service_card1_link"] ?></p>
              </a>
            </div>
            <div class="col-3 text-center">
              <a href="./pages/gamesMenu.php" style="text-decoration: none;">
                <p class="service-card-link" style="line-height: 30px;"><?= $Language["service_card2_link"] ?></p>
              </a>
            </div>
            <div class="col-3 text-center">
              <a href="./pages/gamesMenu.php" style="text-decoration: none;">
                <p class="service-card-link" style="line-height: 30px;"><?= $Language["service_card3_link"] ?></p>
              </a>
            </div>
          </div>
          <div class="row justify-content-around">
            <div class="col-3 text-center">
              <a href="./pages/gamesMenu.php" style="text-decoration: none;">
                <svg width="30px" height="20px" class="mx-auto" style="transform: rotate(180deg);">
                  <path stroke="#FFFFFF" stroke-width="4px" style="fill: none; transform: scale(.5)" d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "></path>
                </svg>
              </a>
            </div>
            <div class="col-3 text-center">
              <a href="./pages/gamesMenu.php" style="text-decoration: none;">
                <svg width="30px" height="20px" class="mx-auto" style="transform: rotate(180deg);">
                  <path stroke="#FFFFFF" stroke-width="4px" style="fill: none; transform: scale(.5)" d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "></path>
                </svg>
              </a>
            </div>
            <div class="col-3 text-center">
              <a href="./pages/gamesMenu.php" style="text-decoration: none;">
                <svg width="30px" height="20px" class="mx-auto" style="transform: rotate(180deg);">
                  <path stroke="#FFFFFF" stroke-width="4px" style="fill: none; transform: scale(.5)" d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "></path>
                </svg>
              </a>
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


  <script src="./tercers/gsap/gsap.min.js"></script>
  <script src="./tercers/gsap/ScrollTrigger.min.js"></script>
  <script src="./js/landing.js"></script>
</body>

</html>