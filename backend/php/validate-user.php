<?php
    include('connection.php');

    

    if ( !empty($_POST['user_']) )
    {
        $user_ = $_POST['user_'];

        session_start();

        $query = "SELECT 
                u.NOMBRE,
                u.CORREO,
                u.CONTEO,
                u.FACULTAD_U,
                u.SEMESTRE_U,
                u.CARRERA_U,
                u.ESTADO_U
            FROM
                usuario AS u
            WHERE
                u.CORREO = '$user_';
        ";

        $result_set = mysqli_query($connection, $query);

        $rows = mysqli_num_rows($result_set);

        // print_r(get_defined_vars());

        if( $rows > 0 )
        {
            
            $row = mysqli_fetch_array($result_set);

            $_SESSION['name_user'] = $row['NOMBRE'];
            $_SESSION['email_user'] = $row['CORREO'];
            $_SESSION['total_score_user'] = $row['CONTEO'];
            $_SESSION['facu_user'] = $row['FACULTAD_U'];
            $_SESSION['sem_user'] = $row['SEMESTRE_U'];
            $_SESSION['carr_user'] = $row['CARRERA'];
            $_SESSION['state_user'] = $row['ESTADO'];

            echo $rows;
        }
        else
        {
            echo 0;
        }

        mysqli_free_result($result_set);
        mysqli_close($connection);
    }
    else
    {
        print -1;
    }
?>