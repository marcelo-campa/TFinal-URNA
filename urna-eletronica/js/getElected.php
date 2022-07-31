<?php
define('DB_HOSTNAME', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', null);
define('DB_DATABASE', 'eleicoes');
define('DB_PREFIX', '');
define('DB_CHARSET', 'utf8');

  //Funcão para se conectar com o banco de dados
  function DBConnect()
  {   
      $link = mysqli_connect(DB_HOSTNAME, DB_USERNAME, DB_PASSWORD, DB_DATABASE) or die('Falhou a se conectar');
      mysqli_set_charset($link, DB_CHARSET) or die(mysqli_error($link));
      return $link;
  }

  //Funcão para fechar conexão com banco de dados
  function DBClose($link)
  {
      mysqli_close($link) or die(mysqli_error($link));
  }
  
      //Executa queries
  function DBExecute($query)
  {
      $link = DBConnect();
      $result = mysqli_query($link, $query) or die(mysqli_error($link));
      DBClose($link);
      return $result;
  }

$rawdata = file_get_contents("php://input");
// Let's say we got JSON
$decoded = json_decode($rawdata);
$sql = "select c.nome as nome, c.cargo as cargo ,c.partido as partido ,c.nome_vice as nome_vice, max(c.votos) as total from candidatos c group by c.cargo";
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
echo json_encode($data,JSON_UNESCAPED_UNICODE);
exit();
?>