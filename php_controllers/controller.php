<?php
require_once("../php_libraries/bd.php");

if (!isset($_SESSION)) {
    session_start();
}

if (isset($_POST["login"])) {

    $user = selectUser($_POST["name"], $_POST["password"]);

    if (empty($user)) {
        $_SESSION["error"] = "login";
        header('Location: ' . $_SERVER["HTTP_REFERER"]);
    } else {
        // foreach ($user as $key) {
        //     echo print_r($key);
        //     foreach ($key[0] as $key => $value) {
        //         echo $key . ": " . $value;
        //         echo "<br>";
        //     }
        // }
        $_SESSION["name"] = $user[0]["name"];
    }
    header('Location: ' . $_SERVER["HTTP_REFERER"]);
    die();
}

if (isset($_POST["register"])) {
    insertUser($_POST["name"], $_POST["password"], 0, 0);
    header('Location: ' . $_SERVER["HTTP_REFERER"]);
}
