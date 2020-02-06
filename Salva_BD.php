<?php

include 'Conexao.php';

$nome = $_POST['NOME'];
$t_pp = $_POST['Escolha_P'];
$t_cc = $_POST['Escolha_T'];
$cpf_cnpj = $_POST['CPF/CNPJ'];
$r_social = $_POST['R_social'];
$cep = $_POST['CEP'];
$endereco = $_POST['ENCERECO'];
$numero = $_POST['NUMERO'];
$comple = $_POST['COMPLE'];
$municipio = $_POST['MUNICIPIO'];
$cidade = $_POST['CIDADE'];
$telefone = $_POST['TELEFONE'];
$celular = $_POST['CELULAR'];
$email = $_POST['EMAIL'];

$nnome = mysqli_escape_string($conexao, $nome);
$tt_pp = mysqli_escape_string($conexao, $t_pp);
$tt_cc = mysqli_escape_string($conexao, $t_cc);
$ccpf_cnpj = mysqli_escape_string($conexao, $cpf_cnpj);
$rr_social = mysqli_escape_string($conexao, $r_social);
$ccep = mysqli_escape_string($conexao, $cep);
$eendereco = mysqli_escape_string($conexao, $endereco);
$nnumero = mysqli_escape_string($conexao, $numero);
$ccomple = mysqli_escape_string($conexao, $comple);
$mmunicipio = mysqli_escape_string($conexao, $municipio);
$ccidade = mysqli_escape_string($conexao, $cidade);
$ttelefone = mysqli_escape_string($conexao, $telefone);
$ccelular = mysqli_escape_string($conexao, $celular);
$eemail = mysqli_escape_string($conexao, $email);

$sql = "INSERT INTO registro (NOME, TIPO_CADASTRO, TIPO_PESSOA, CPF_CNPJ, RZ_SOCIAL, ENDERECO, NUMERO, COMPLEMENTO, CEP, MUNICIPIO, CIDADE, EMAIL, TELEFONE, CELULAR) VALUES ('$nome', '$tt_cc', '$tt_pp', '$ccpf_cnpj', '$rr_social', '$eendereco', '$nnumero', '$ccomple', '$ccep', '$mmunicipio', '$ccidade', '$eemail', '$ttelefone', '$ccelular')";

$result = mysqli_query($conexao, $sql);
        if(mysqli_num_rows($result) == 1){
            $Validado_Us = "1";
            echo "1";
        }else{
            $Validado_Us = "0";
            echo "0";
        }

?>
<script>
location= './index.php';
</script>
