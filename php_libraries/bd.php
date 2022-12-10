<?php

function openDB()
{
    $servername = "localhost";
    $username = "root";
    #region PASSWORD
    $password = "koritosano";
    #endregion

    $conexion = new PDO("mysql:host=$servername;dbname=death_by_p", $username, $password);
    // set the PDO error mode to exception
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conexion->exec("set names utf8");

    return $conexion;
}

function closeDB()
{
    return null;
}

#region DB ACTIONS

function insertUser($name, $password, $phase, $userID)
{
    $conexion = openDB();

    $queryText = "INSERT INTO users (name,password,phase,user_type_id) VALUES (:name,:password,:phase,:userID);";

    $query = $conexion->prepare($queryText);
    $query->bindParam(':name', strtolower($name));
    $query->bindParam(':password', $password);
    $query->bindParam(':phase', $phase);
    $query->bindParam(':userID', $userID);

    $query->execute();

    $conexion = closeDB();
}

function selectUser($name, $password)
{
    $conexion = openDB();

    $queryText = "SELECT * FROM users WHERE users.name = '" . strtolower($name) . "' AND users.password = '" . $password . "';";

    $query = $conexion->prepare($queryText);
    $query->execute();

    $result = $query->fetchAll(PDO::FETCH_ASSOC);

    $conexion = closeDB();

    return $result;
}

function getUserType($name)
{
    $conexion = openDB();

    $queryText = "SELECT user_type.name FROM users
    INNER JOIN user_type
    ON users.user_type_id = user_type.id
    WHERE users.name = " . strtolower($name) . "';";

    $query = $conexion->prepare($queryText);
    $query->execute();

    $result = $query->fetchAll(PDO::FETCH_ASSOC);

    $conexion = closeDB();

    return $result;
}

function insertUserScore($gameID, $userID, $score)
{
    $defaultTime = 60;
    $date = date('Y-m-d H:i:s');

    $conexion = openDB();

    $queryText = "INSERT INTO scores (games_id, users_id, score, game_time, date) VALUES (:games_id, :users_id, :score, :game_time, :date);";

    $query = $conexion->prepare($queryText);
    $query->bindParam(':games_id', $gameID);
    $query->bindParam(':users_id', $userID);
    $query->bindParam(':score', $score);
    $query->bindParam(':game_time', $defaultTime);
    $query->bindParam(':date', $date);

    $query->execute();

    $conexion = closeDB();
}

function changeUserPhase($userID, $newPhase)
{
    $conexion = openDB();

    $queryText = "UPDATE users SET users.phase = " . $newPhase . " WHERE users.id = " . $userID . ";";

    $query = $conexion->prepare($queryText);
    $query->execute();

    $result = $query->fetchAll(PDO::FETCH_ASSOC);

    $conexion = closeDB();

    return $result;
}
#endregion