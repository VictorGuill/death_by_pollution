<?php
require_once("../php_libraries/bd.php");

if (!isset($_SESSION)) {
    session_start();
}

if (isset($_POST["login"])) {

    $user = selectUser($_POST["name"], $_POST["password"]);

    if (empty($user)) {
        echo "Este usuario no existe";
    } else {
        foreach ($user as $key) {
            foreach ($key as $key => $value) {
                echo $key . ": " . $value;
                echo "<br>";
            }
        }
    }
}

if (isset($_POST["register"])) {
    insertUser($_POST["name"], $_POST["password"], 0, 0);
    echo "Usuario " . $_POST["name"] . " añadido.";
}
