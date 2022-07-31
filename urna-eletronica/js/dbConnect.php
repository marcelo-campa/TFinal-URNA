<?php
    define('DB_HOSTNAME', 'host.docker.internal');
    define('DB_USERNAME', 'root');
    define('DB_PASSWORD', '');
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
?>