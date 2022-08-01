<?php
    include 'dbConnect.php';
/**
 * Função chamada para mostrar resultados na tela
 */  
    $rawdata = file_get_contents("php://input");
    // Let's say we got JSON
    $decoded = json_decode($rawdata);
/**
 * Ao ser chamada, realiza query no banco procurando os candidatos com mais votos, agrupando por cargo
 */  
    $sql = "select a.id as id, a.votos as total , a.nome as nome, a.cargo as cargo,
    a.partido as partido ,a.nome_vice as nome_vice,
    a.partido_vice as vice_partido
    from candidatos a
    inner join (
    select max(c.votos) as total, c.cargo as cargo from candidatos c
    group by c.cargo
    ) b
    on a.votos = b.total and a.cargo = b.cargo";
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
    //print_r(json_encode($data,JSON_UNESCAPED_UNICODE));
    header ('Content-Type: application/json');
/**
 * Resultado da query é mostrado na tela
 */ 
    echo json_encode($data,JSON_UNESCAPED_UNICODE);
    exit();
?>