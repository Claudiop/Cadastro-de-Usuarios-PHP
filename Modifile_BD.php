<?php

    include 'conexao.php';

$id = filter_input(INPUT_POST, 'SELEC_C', FILTER_SANITIZE_NUMBER_INT);
$nome = $_POST['NOME'];
$tt_c = $_POST['TT_C'];
$tt_p = $_POST['TT_P'];
$registro = $_POST['REGISTRO'];
$rz_social = $_POST['RZ_SOCIAL'];
$cep = $_POST['CEP'];
$ender =$_POST['ENDER'];
$cidade =$_POST['CIDADE'];
$municipio =$_POST['MUNICIPIO'];
$numero =$_POST['NUMERO'];
$complemento = $_POST['COMPLEMENTO'];
$email = $_POST['EMAIL'];
$telefone = $_POST['TELEFONE'];
$celular = $_POST['CELULAR'];
$exec_f = $_POST['EXEC_F'];


if($exec_f == 1){
$result_c = "UPDATE registro SET NOME='$nome', TIPO_CADASTRO='$tt_c', TIPO_PESSOA='$tt_p', CPF_CNPJ='$registro', RZ_SOCIAL='$rz_social', ENDERECO='$ender', NUMERO='$numero', COMPLEMENTO='$complemento', CEP='$cep', MUNICIPIO='$municipio', CIDADE='$cidade', EMAIL='$email', TELEFONE='$telefone', CELULAR='$celular' WHERE ID='$id'";
$resultado_c = mysqli_query($conexao, $result_c);

if(mysqli_affected_rows($conexao)){
    echo json_encode('Usuário editado com Sucesso!');
}else{
    echo json_encode('Usuário NÃO foi editado com Sucesso!');
}} elseif($exec_f == 2){
        $result_c = "DELETE FROM registro WHERE ID='$id'";
        $resultado_c = mysqli_query($conexao, $result_c);
        if(mysqli_affected_rows($conexao)){
            echo json_encode('Usuário Excluido com Sucesso!');
        }else{
            echo json_encode('Usuário não foi Excluido!');
        }
}else{
    echo json_encode('Erro ao realizar Alteração!');
}


?>
