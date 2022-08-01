<?php
    include 'dbConnect.php';
    /**
     * Ao confirmar voto, essa função de insert é chamada para registrar o resultado na urna
     *
     */
    $rawdata = file_get_contents("php://input");

     /**
     * Se objeto de input for json, parsea-lo
     */   
    $decoded = json_decode($rawdata);
    $insert = "update candidatos set votos = votos +1 where id = ".$decoded->id;
    $result = DBExecute($insert);

?>