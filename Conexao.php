<?php
$servidor = '127.0.0.1';
$usuario = 'root';
$senha = '';
$bancoDados = 'banco_tc';

$conexao = mysqli_connect($servidor, $usuario, $senha, $bancoDados);
if(mysqli_connect_errno( $conexao )){
    $SS_conex = "0";
} else {
    $SS_conex = "1";
}
?>
