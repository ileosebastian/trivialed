<?php

    include('connection.php');



    session_start();

    $user_mail = $_SESSION['email_user'];

    $query = "SELECT 
            COUNT(a.NOMBRE_A) as CANT_SEM
        FROM 
        usuario u 
            INNER JOIN carrera c
        ON u.CARRERA_U = c.ID 
            INNER JOIN info i
        ON c.ID = i.CARRERA_A
            INNER JOIN asignatura a
        ON i.MATERIA_A = a.ID
        WHERE
            u.CORREO = '$user_mail'
        GROUP BY
            u.CORREO;
    ";

    $result_set = mysqli_query($connection, $query);

    $rows = mysqli_num_rows($result_set);

    if( $rows > 0 )
    {
        $row = mysqli_fetch_array($result_set);
        
        $cant_sem = $row['CANT_SEM'];

        echo $cant_sem;
    }
    else
    {
        echo 0;
    }

    



?>