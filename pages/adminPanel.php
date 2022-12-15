<?php
require_once("../php_libraries/bd.php");

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
        <div class='container' style='width: 75%;'>
          <div class='row justify-content-center'>
            <div class='col-12'>
              <div class='card shadow-2-strong'>
                <div class='card-body'>
                  <div class='table-responsive'>
                    <table class='table table-borderless mb-0'>
                      <thead>
                        <tr>
                          <th scope='col'>NAME</th>
                          <th scope='col'>PHASE</th>
                          <th scope='col'>USER TYPE</th>
                          <th scope='col'>ACTIONS</th>
                        </tr>
                      </thead>
                      <tbody>";

    $users = selectAllUsers();

    foreach ($users as $user) {
      switch ($user['user_type_id']) {
        case 0:
          $user['user_type_id'] = "user";
          break;
        case 1:
          $user['user_type_id'] = "admin";
          break;
        case 2:
          $user['user_type_id'] = "super admin";
          break;
      }

      echo "<tr>
                          <td>" . $user['name'] . "</td>
                          <td>" . $user['phase'] . "</td>
                          <td>" . $user['user_type_id'] . "</td>
                          <td style='display: flex;'>
                            <button type='button' class='btn btn-primary btn-sm' style='margin: 0 10px;'>
                              <i>✏️</i>
                            </button>";

      if ($user['user_type_id'] !== "super admin") {
        echo "<form method='post' action='../php_controllers/controller.php' enctype='multipart/form-data'>
      <button type='submit'  class='btn btn-danger btn-sm' name='deleteUser' value='" . $user['id'] . "'>
        <i>❌</i>
      </button>
    </form>";
      }


      echo "</td>
          </tr>";
    }

    echo "</tbody>
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
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
  </button>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  <script src="../js/loginPanelLogic.js"></script>
</body>

</html>