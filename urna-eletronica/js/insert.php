<?php
    include 'dbConnect.php';

    $rawdata = file_get_contents("php://input");
    // Let's say we got JSON
    $decoded = json_decode($rawdata);
    $insert = "update candidatos set votos = votos +1 where id = ".$decoded->id;
    $result = DBExecute($insert);

?>