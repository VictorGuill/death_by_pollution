<?php
require_once("../php_libraries/bd.php");

if (!isset($_SESSION)) {
  session_start();
}
?>

<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ADMIN</title>
  <link rel="icon" type="image/x-icon" href="/death_by_pollution/media/icons/favicon32.png">
  <link rel="stylesheet" href="/death_by_pollution/tercers/boostrap5/bootstrap.min.css" />
  <script src="/death_by_pollution/tercers/boostrap5/bootstrap.bundle.min.js"></script>
  <script src="/death_by_pollution/tercers/jquery/jquery.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
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
                <div class='card-body' style='padding: 0.25em;'>
                  <div class='table-responsive' style='max-height: 400px;'>
                    <table class='table table-borderless mb-0'>
                      <thead style='position: sticky; top:0;'>
                        <tr style='background: white;'>
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
                          <form method='post' action='../php_controllers/controller.php' enctype='multipart/form-data'>
                            <button type='submit' class='btn btn-primary btn-sm' name='editUserID' value=" . $user['id'] . " style='margin: 0 10px;'>
                              <i>✏️</i>
                            </button>
                          </form>";

      if ($user['user_type_id'] !== "super admin") {
        echo "<button type='button' class='btn btn-danger btn-sm btn-delete id:" . $user['id'] . "' data-bs-toggle='modal' data-bs-target='#deleteModal'>
        <i>❌</i>
      </button>";
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

  <!-- DELETE MODAL -->
  <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Borrar usuario</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          <form method='post' action='../php_controllers/controller.php' enctype='multipart/form-data'>
            <button id="deleteUserBtn" type='submit' class='btn btn-danger' name='deleteUser' value=''>
              <i>Borrar usuario</i>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- EDIT MODAL -->
  <div class="modal fade" id="editModal" tabindex="-1" role="form" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Editar usuario</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
          </button>
        </div>
        <div class="modal-body">
          <form method="POST" action='../php_controllers/controller.php' enctype="multipart/form-data">
            <div class="form-group">
              <label for="user-name" class="col-form-label">Name:</label>
              <input id="user-name" name="newName" type="text" class="form-control" value="<?php
                                                                                            if (isset($_SESSION["editUser"]) && $_SESSION["editUser"] != null) {
                                                                                              echo $_SESSION['editUser'][0]['name'];
                                                                                            }
                                                                                            ?>">
            </div>
            <div class="form-group">
              <label for="phaseSelect" class="col-form-label">Phase:</label>
              <select id="phaseSelect" class="form-select" name="newPhase" style="margin: 5px;">
                <option value='1' <?php
                                  if (isset($_SESSION["editUser"]) && $_SESSION["editUser"] != null) {
                                    if ($_SESSION['editUser'][0]['phase'] === 0) {
                                      echo "selected";
                                    }
                                  }
                                  ?>>1</option>
                <option value='2' <?php
                                  if (isset($_SESSION["editUser"]) && $_SESSION["editUser"] != null) {
                                    if ($_SESSION['editUser'][0]['phase'] === 1) {
                                      echo "selected";
                                    }
                                  }
                                  ?>>2</option>
                <option value='3' <?php
                                  if (isset($_SESSION["editUser"]) && $_SESSION["editUser"] != null) {
                                    if ($_SESSION['editUser'][0]['phase'] === 2) {
                                      echo "selected";
                                    }
                                  }
                                  ?>>3</option>

              </select>
            </div>
            <div class="form-group">
              <label for="typeSelect" class="col-form-label">User type</label>
              <select id="typeSelect" class="form-select" name="newType" aria-label="Default select example" style="margin: 5px;">
                <option value='0' <?php
                                  if (isset($_SESSION["editUser"]) && $_SESSION["editUser"] != null) {
                                    if ($_SESSION['editUser'][0]['user_type_id'] === 0) {
                                      echo "selected";
                                    }
                                  }
                                  ?>>User</option>
                <option value='1' <?php
                                  if (isset($_SESSION["editUser"]) && $_SESSION["editUser"] != null) {
                                    if ($_SESSION['editUser'][0]['user_type_id'] === 1) {
                                      echo "selected";
                                    }
                                  }
                                  ?>>Admin</option>
                <option value='2' <?php
                                  if (isset($_SESSION["editUser"]) && $_SESSION["editUser"] != null) {
                                    if ($_SESSION['editUser'][0]['user_type_id'] === 2) {
                                      echo "selected";
                                    }
                                  }
                                  ?>>Super Admin</option>

              </select>
            </div>
            <div class="form-group">
              <label for="user-password" class="col-form-label">New password:</label>
              <input id="user-password" type="password" name="newPass" class="form-control"></input>
            </div>
            <div class="modal-footer">
              <input type="submit" value="Update" class="btn btn-success" name="updateUser">
              <input type="submit" value="close" data-bs-target='#editModal' data-bs-dismiss="modal" class="btn btn-danger" name="closeEdit">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>


  <!--   <script>
    $(document).ready(function(){
    $('#editModal').modal("show");
  })
  </script>   -->
  <?php if (isset($_SESSION["editUser"]) && $_SESSION["editUser"] != null) {
    echo "<script>
    $(document).ready(function(){
    $('#editModal').modal('show');
    })
    </script>";
  } ?>

  <script src=" ../js/loginPanelLogic.js"></script>
  <script src="../js/adminPanel.js"></script>
</body>

</html>