<?php
    include 'dbConnect.php';
    $sql2 = "SELECT count(distinct cargo) as count FROM candidatos";
    $result2 = DBExecute($sql2);
    if(!mysqli_num_rows($result2))
    {
        return false;
    }
    else
    {
        $res2 = mysqli_fetch_assoc($result2);    
    }

    header ('Content-Type: application/json');
    echo json_encode($res2,JSON_UNESCAPED_UNICODE);
    exit();
?>