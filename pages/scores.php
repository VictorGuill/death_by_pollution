<?php require_once("../php_libraries/bd.php");

if (isset($_COOKIE['dropdownGame'])) {
  $selection = $_COOKIE['dropdownGame'];
  unset($_COOKIE['dropdownGame']);
  setcookie('dropdownGame', null, -1, '/');
} else {
  $selection = "0";
}

if ($selection === "") {
  $selection = "0";
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Scoreboard</title>
  <link rel="icon" type="image/x-icon" href="/death_by_pollution/media/icons/favicon32.png">
  <link rel="stylesheet" href="/death_by_pollution/tercers/boostrap5/bootstrap.min.css" />
  <script src="/death_by_pollution/tercers/boostrap5/bootstrap.bundle.min.js"></script>
  <link rel="stylesheet" href="../style/colores.css" />
  <link rel="stylesheet" href="../style/landing.css" />
  <link rel="stylesheet" href="../style/about.css" />
  <link rel="stylesheet" href="../style/scores.css" />
  <link rel="stylesheet" href="../style/login.css" />
</head>

<body>
  <!-- NAVBAR -->
  <?php require_once("../php_partials/navbar.php"); ?>

  <div id="mainContainer" class="container-fluid">
    <div class="row align-items-center">
      <div class="col-1"></div>
      <div class="col text-start">
        <div id="title">
          <h1>RANKINGS</h1>
        </div>
      </div>
      <div class="col"></div>
      <div id="gameSelector" class="col text-center">
        <img src="<?php echo '../media/games_menu/game' . number_format($selection) + 1 . '_screenshot.png'; ?>" />
        <select class="form-select" aria-label="Default select example">
          <option value="1" <?php
                            if ($selection === "0") {
                              echo "selected";
                            } ?>>Game 1</option>
          <option value="2" <?php
                            if ($selection === "1") {
                              echo "selected";
                            } ?>>Game 2</option>
          <option value="3" <?php
                            if ($selection === "2") {
                              echo "selected";
                            } ?>>Game 3</option>
        </select>
      </div>
      <div class="col-1"></div>
    </div>

    <div id="top3Container" class="container">
      <div id="top3" class="row align-items-end">
        <div id="rank3" class="col">
          <p><?php
              $scores = selectSpecificScore($selection, 2);
              foreach ($scores as $value) {
                echo $value["name"];
                echo " <span>" . $value["score"] . "</span>";
              }
              ?></p>
          <div>
            <p>3</p>
          </div>
        </div>
        <div id="rank1" class="col">
          <p><?php
              $scores = selectSpecificScore($selection, 0);
              foreach ($scores as $value) {
                echo $value["name"];
                echo " <span>" . $value["score"] . "</span>";
              }
              ?></p>
          <div>
            <p>1</p>
          </div>
        </div>
        <div id="rank2" class="col">
          <p><?php
              $scores = selectSpecificScore($selection, 1);
              foreach ($scores as $value) {
                echo $value["name"];
                echo " <span>" . $value["score"] . "</span>";
              }
              ?></p>
          <div>
            <p>2</p>
          </div>
        </div>
      </div>
    </div>

    <div id="scoresTable" class="container">
      <section class="intro">
        <div class="bg-image h-100">
          <div class="mask d-flex align-items-center h-100">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-12">
                  <div class="card">
                    <div class="card-body p-0">
                      <div class="table-responsive table-scroll" data-mdb-perfect-scrollbar="true" style="max-height: 350px">
                        <table class="table mb-0 text-center">
                          <thead>
                            <tr>
                              <th scope="col">POSITION</th>
                              <th scope="col">USER</th>
                              <th scope="col">SCORE</th>
                            </tr>
                          </thead>
                          <tbody>
                            <?php
                            $scores = selectGameScores($selection);
                            $counter = 3;

                            foreach ($scores as $value) {
                              echo "<tr>
                                      <td>" . $counter . "</td>
                                      <td style='text-transform: capitalize;'>" . $value["name"] . "</td>
                                      <td>" . $value["score"] . "</td>
                                    </tr>";
                              $counter++;
                            }
                            ?>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <script src="../js/scores.js" type="module"></script>
</body>

</html>