<?php
    include('connection.php');

    $query = "";

    if( !empty($_POST['action_']) )
    {

        session_start();

        $action = $_POST['action_'];
        $level = $_POST['level_'];
        $mail_user = $_SESSION['email_user'];

        switch ($action)
        {
            case "searchGamersFacu":
                break;
            case "searchGamersCarr":
                break;
            case "searchGamersAsig":
                break;
            case "searchSubjects":
                $query = "SELECT
                        i.SEMESTRE_A, 
                        a.NOMBRE_A
                    FROM 
                    usuario u 
                        INNER JOIN carrera c
                    ON u.CARRERA_U = c.ID 
                        INNER JOIN info i
                    ON c.ID = i.CARRERA_A
                        INNER JOIN asignatura a
                    ON i.MATERIA_A = a.ID
                 	WHERE
                    	u.CORREO = '$mail_user'AND
                        i.SEMESTRE_A = $level
                    GROUP BY
                        i.MATERIA_A;
                ";
                break;
            default:
                $query = "";
        }

        $result_set = mysqli_query($connection, $query);

        $result_set = mysqli_query($connection, $query);

        $rows = mysqli_num_rows($result_set);

        $array_subjects = array();
        if( $rows > 0 )
        {
            while($row = mysqli_fetch_array($result_set)) { 
                $lvl_subject = $row['SEMESTRE_A'];
                $name_subject = $row['NOMBRE_A'];
                $array_subjects[] = array('SEMESTRE_A' => $lvl_subject, 'NOMBRE_A'=> $name_subject);
            }

            echo json_encode($array_subjects, JSON_UNESCAPED_UNICODE);
        }
        else
        {
            echo 0;
        }
    }
    else
    {
        echo $query;
    }
?>