<?php

function openDB()
{
    $servername = "localhost";
    $username = "root";
    #region PASSWORD
    $password = "123";
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
    $query->bindParam(':name', $name);
    $query->bindParam(':password', $password);
    $query->bindParam(':phase', $phase);
    $query->bindParam(':userID', $userID);

    $query->execute();


    $conexion = closeDB();
}

function selectUser($name, $password)
{
    return selectQuery("SELECT * FROM users WHERE users.name = '" . $name . "' AND users.password = '" . $password . "';");
}
#endregion

// function for simple select querys
function selectQuery($queryText)
{
    $conexion = openDB();

    $query = $conexion->prepare($queryText);
    $query->execute();

    $result = $query->fetchAll(PDO::FETCH_ASSOC);

    $conexion = closeDB();

    return $result;
}
