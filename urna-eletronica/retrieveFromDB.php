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
    $json = json_encode($data,JSON_UNESCAPED_UNICODE);
    
    echo '<script type="text/javascript">
    IniciaUrna('.$json.','.$res2['count'].');
    </script>';
  ?>