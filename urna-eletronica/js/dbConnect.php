<?php
/**
 * Definindo padrão de conexão com banco de dados mysql, com as constantes estabelecidas, será possível realizar queries no banco.
 *
 */
    define('DB_HOSTNAME', 'localhost');
    define('DB_USERNAME', 'root');
    define('DB_PASSWORD', null);
    define('DB_DATABASE', 'eleicoes');
    define('DB_PREFIX', '');
    define('DB_CHARSET', 'utf8');

/************************************************
 * Funcão para se conectar com o banco de dados, retorna a conexão com o MySql especificado.
 * @see DBConnect()
 * @return Retorna objeto de conexão
 ************************************************/
    function DBConnect()
    {   
        $link = mysqli_connect(DB_HOSTNAME, DB_USERNAME, DB_PASSWORD, DB_DATABASE) or die('Falhou a se conectar');
        mysqli_set_charset($link, DB_CHARSET) or die(mysqli_error($link));
        return $link;
    }

/************************************************
 * Funcão para fechar a conexão com o banco de dados criada na função DBConnect()
 * @see DBClose()
 ************************************************/
    function DBClose($link)
    {
        mysqli_close($link) or die(mysqli_error($link));
    }
    
/************************************************
 * Funcão para executar o SQL statement na conexão.
 * @see DBExecute()
 * @return Retorna resultado de query em um JSON
 ************************************************/
    function DBExecute($query)
    {
        $link = DBConnect();
        $result = mysqli_query($link, $query) or die(mysqli_error($link));
        DBClose($link);
        return $result;
    }
?>