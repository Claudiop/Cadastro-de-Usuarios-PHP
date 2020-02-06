<?php

include 'Conexao.php';

$Login = $_POST['Login'];
$Senha = $_POST['Senha'];
        $loginn = mysqli_escape_string($conexao, $Login);
        $senhaa = mysqli_escape_string($conexao, $Senha);
        $sql = "SELECT Login FROM adms WHERE Login = '$Login'";
        $result_n = mysqli_query($conexao, $sql);
            if(mysqli_num_rows($result_n) > 0){
                $sql = "SELECT * FROM adms WHERE Login = '$loginn' AND Senha = '$Senha'";
                $result = mysqli_query($conexao, $sql);
                    if(mysqli_num_rows($result) == 1){
                        $Validado_Us = "1";
                        echo "1";
                    }else{
                        $Validado_Us = "0";
                        echo "0";
                    }
                    } else {echo "2";}
?>