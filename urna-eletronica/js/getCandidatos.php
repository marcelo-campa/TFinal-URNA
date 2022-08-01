<?php
    include 'dbConnect.php';

/**
 * Query para retornar objeto JSON com resultado de query de todos os candidatos
 */  
    $sql = "SELECT * FROM candidatos order by id";
    $result = DBExecute($sql);
    if(!mysqli_num_rows($result))
    {
        return false;
    }
    else
    {
        while ($res = mysqli_fetch_assoc($result))
        {
            $data[] = $res;
        }
    }

    $json = json_encode($data,JSON_UNESCAPED_UNICODE);
/**
 * Result com objeto JSON com resultado de query de todos os candidatos
 */  

    header ('Content-Type: application/json');
    echo json_encode($data,JSON_UNESCAPED_UNICODE);

    exit();
?>