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
      <div id="text1">SAME GREEN VIEWS</div>
      <div id="planeWindow">
        <!-- <img src="./media/landing/fotoVentanaAvion.png" alt="Plane window" /> -->
        <video autoplay loop muted>
        <video autoplay loop muted>
          <source src="./media/landing/fotoVentanaAvion_editable.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <div id="text2">NEW TRAVELING MEANS</div>
      <div class="container my-auto">
        <div id="aboutBtnRow">
          <a id="aboutBtn" href="#about">
            <p>Qué es Eco Travelling?</p>
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
                  <p class="about-card-body">“Los viajes ecológicos engloban todas las variantes del ecoturismo y los
                    viajes verdes. Así que, ya sea un viaje responsable, un turismo sostenible, un turismo ético o un viaje
                    culturalmente consciente, todos ellos se engloban bajo el mismo paraguas de los viajes ecológicos. En
                    esencia, cualquiera que prefiera viajar de forma ecológica es un viajero ecológico.”</p>
                  <br>
                  <p class="about-card-secondary">Para nostros eco-travelling es la única </p>
                  <p class="about-card-secondary">manera de viajar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- THE PROBLEM -->
    <div id="problem" class="scroll-area">
      <div class="container mt-6">
        <div class="slide-content">
          <div class="row justify-content-center">
            <div class="col-3">
              <h3 id="problem-title">El problema</h3>
            </div>
          </div>
          <div class="row justify-content-center mb-5">
            <div class="col-1 d-flex justify-content-center">
              <svg width="30px" height="20px">
                <path stroke="#510087" stroke-width="2px" style="fill: none;" d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "></path>
              </svg>
            </div>
          </div>

          <div class="row justify-content-between">
            <div class="problem-card card col-3">
              <div class="card-header">
                <div>
                  <img class="card-title card-icon" src="./media/landing/ic-train.png" alt="train_ico">
                </div>
                <h1 class="card-title">TIERRA</h1>
              </div>
              <div class="card-body">
                <p class="card-text">Los vehículos por carretera suponen más del 70 % de las emisiones de gases de
                  efecto invernadero, frente a casi el 1 % del tren</p>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed dignissim eros.</p>
                <br>
                <h5>CO2 --> 19%</h5>
              </div>
            </div>
            <div class="problem-card card col-3">
              <div class="card-header">
                <div>
                  <img class="card-title card-icon" src="./media/landing/ic-ship.png" alt="ship_ico">
                </div>
                <h1 class="card-title">MAR</h1>
              </div>
              <div class="card-body">
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipiscing, elit eu mattis rutrum curae
                  ultricies aptent, sociosqu tempor aliquam ridiculus litora.</p>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed dignissim eros.</p>
                <br>
                <h5>CO2 --> 19%</h5>
              </div>
            </div>
            <div class="problem-card card col-3">
              <div class="card-header">
                <div>
                  <img class="card-title card-icon" src="./media/landing/ic-plane.png" alt="plane_ico">
                </div>
                <h1 class="card-title">AIRE</h1>
              </div>
              <div class="card-body">
                <p class="card-text">El avión es el medio de transporte que provoca una mayor cantidad de emisiones de
                  CO2. </p>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed dignissim eros.</p>
                <br>
                <h5>CO2 --> 19%</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- SERVICES -->
    <div id="services" class="scroll-area">
      <div class="container mt-6">
        <div class="slide-content">
          <div class="row justify-content-center">
            <div class="col-2">
              <h3 id="service-title">Servicios</h3>
            </div>
          </div>
          <div class="row justify-content-center mb-5">
            <div class="col-1 d-flex justify-content-center">
              <svg width="30px" height="20px">
                <path stroke="#faffff" stroke-width="2px" style="fill: none;" d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "></path>
              </svg>
            </div>
          </div>
          <p class="slide-text contain-center mx-auto">Nuestra flota de transportes <span
              style="color: var(--ACCENT);">eco</span></p>
              <div class="row justify-content-between mt-5" >
                <div id="serviceCard1" class="card col-3" onclick=rotateCard(this)>
                  <img src="/death_by_pollution/media/landing/new_ship.jpeg" class="img-fluid card-img-top" alt="..." >
                  <div class="card-body">
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed dignissim eros.</p>
                  </div>
                </div>
                <div id="serviceCard2" class="card col-3" onclick=rotateCard(this)>
                  <img src="/death_by_pollution/media/landing/new_train.jpeg" class="img-fluid card-img-top" alt="...">
                  <div class="card-body">
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed dignissim eros.</p>
                  </div>
                </div>
                <div id="serviceCard3" class="card col-3" onclick=rotateCard(this)>
                  <img src="/death_by_pollution/media/landing/new_plane.jpeg" class="img-fluid card-img-top" alt="...">
                  <div class="card-body">
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed dignissim eros.</p>
                  </div>
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