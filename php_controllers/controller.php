<?php
require_once("../php_libraries/bd.php");

if (!isset($_SESSION)) {
    session_start();
}

if (isset($_POST["login"])) {

    $hashedPassword = hash("sha512", $_POST["password"]);

    $user = selectUser(strtolower($_POST["name"]), $hashedPassword);

    if (empty($user)) {
        $_SESSION["error"] = "El usuario " . $_POST["name"] . " no existe o la contraseña es errónea.";
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
        $_SESSION["user_type"] = setUserType($user[0]["user_type_id"]);
    }
    header('Location: ' . $_SERVER["HTTP_REFERER"]);
    die();
}

if (isset($_POST["register"])) {

    $hashedPassword = hash("sha512", $_POST["password"]);

    insertUser(strtolower($_POST["name"]), $hashedPassword, 0, 0);

    $user = selectUser(strtolower($_POST["name"]), $hashedPassword);
    $_SESSION["name"] = $user[0]["name"];
    $_SESSION["user_type"] = setUserType($user[0]["user_type_id"]);
    header('Location: ' . $_SERVER["HTTP_REFERER"]);
    die();
}

if (isset($_POST["logout"])) {
    unset($_SESSION["name"]);
    unset($_SESSION["user_type"]);
    header('Location: ' . $_SERVER["HTTP_REFERER"]);
    die();
}

function setUserType($type)
{
    switch ($type) {
        case 0:
            $type = "user";
            break;
        case 1:
            $type =  "admin";
            break;
        case 2:
            $type =  "superadmin";
            break;
    }
    return $type;
}
