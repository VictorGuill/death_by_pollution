<?php
if (!isset($_SESSION)) {
  session_start();
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Games menu</title>
  <link rel="icon" type="image/x-icon" href="/death_by_pollution/media/icons/favicon32.png">
  <link rel="stylesheet" href="/death_by_pollution/tercers/boostrap5/bootstrap.min.css" />
  <script src="/death_by_pollution/tercers/boostrap5/bootstrap.bundle.min.js"></script>
  <link rel="stylesheet" href="../style/colores.css" />
  <link rel="stylesheet" href="../style/landing.css" />
  <link rel="stylesheet" href="../style/gamesMenu.css" />
  <link rel="stylesheet" href="../style/login.css" />
  <link rel="stylesheet" href="../style/adminPanel.css" />
</head>

<body>
  <!-- NAVBAR -->
  <?php require_once("../php_partials/navbar.php"); ?>

  <?php
  if (!isset($_SESSION["user_type"]) || $_SESSION["user_type"] === "user") {
    echo "<div id='errorAlert' class='alert alert-danger' role='alert'>
          <h4 class='alert-heading'>¡NO TIENES ACCESO A ESTA PÁGINA!</h4>
          <p>Entra como administrador para acceder a esta página.</p>
          <a href='/death_by_pollution/index.php' class='btn btn-danger mt-2'>Volver al main</a>
          </div>";
  } else {
    echo "<section class='intro'>
            <div class='bg-image h-100'>
              <div class='mask d-flex align-items-center h-100'>
                <div class='container'>
                  <div class='row justify-content-center'>
                    <div class='col-12'>
                      <div class='card shadow-2-strong'>
                        <div class='card-body'>
                          <div class='table-responsive'>
                            <table class='table table-borderless mb-0'>
                              <thead>
                                <tr>
                                  <th scope='col'>ID</th>
                                  <th scope='col'>NAME</th>
                                  <th scope='col'>PHASE</th>
                                  <th scope='col'>USER TYPE</th>
                                  <th scope='col'>ACTIONS</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>01</td>
                                  <td>Tiger Nixon</td>
                                  <td>2</td>
                                  <td>Admin</td>
                                  <td>
                                    <button type='button' class='btn btn-primary btn-sm'>
                                      <i>✏️</i>
                                    </button>
                                    <button type='button' class='btn btn-danger btn-sm'>
                                      <i>❌</i>
                                    </button>
                                  </td>
                                </tr>
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
          </section>";
  }
  ?>
  <script src="../js/loginPanelLogic.js"></script>
</body>

</html>