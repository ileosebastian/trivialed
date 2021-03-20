<?php

    try {

        $connection = mysqli_connect('localhost', 'root', '', 'trivia', 3308);

    } catch (mysqli_sql_exception $e) {

        throw $e;
        
    }

?>

