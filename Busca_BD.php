<?php   
    include 'conexao.php';

    $palavraR = $_POST['palavraa'];

    $palavra = mysqli_escape_string($conexao, $palavraR);

    $sql_t1 = "SELECT * FROM registro WHERE NOME LIKE '%$palavra%'";
    $query_t1 = mysqli_query($conexao, $sql_t1);
    $qtd_t1 = mysqli_num_rows($query_t1);

    $sql_t2 = "SELECT * FROM registro WHERE TIPO_PESSOA LIKE '%$palavra%'";
    $query_t2 = mysqli_query($conexao, $sql_t2);
    $qtd_t2 = mysqli_num_rows($query_t2);

    $sql_t3 = "SELECT * FROM registro WHERE CPF_CNPJ LIKE '%$palavra%'";
    $query_t3 = mysqli_query($conexao, $sql_t3);
    $qtd_t3 = mysqli_num_rows($query_t3);

    $sql_t4 = "SELECT * FROM registro WHERE TIPO_CADASTRO LIKE '%$palavra%'";
    $query_t4 = mysqli_query($conexao, $sql_t4);
    $qtd_t4 = mysqli_num_rows($query_t4);

    if($qtd_t1>0){

        $sql = "SELECT * FROM registro WHERE NOME LIKE '%$palavra%'";
        $query = mysqli_query($conexao, $sql);
        $qtd = mysqli_num_rows($query);

    }else if($qtd_t2>0){

        $sql = "SELECT * FROM registro WHERE TIPO_PESSOA LIKE '%$palavra%'";
        $query = mysqli_query($conexao, $sql);
        $qtd = mysqli_num_rows($query);

    }else if($qtd_t3>0){

        $sql = "SELECT * FROM registro WHERE CPF_CNPJ LIKE '%$palavra%'";
        $query = mysqli_query($conexao, $sql);
        $qtd = mysqli_num_rows($query);


    }else if($qtd_t4>0){

        $sql = "SELECT * FROM registro WHERE TIPO_CADASTRO LIKE '%$palavra%'";
        $query = mysqli_query($conexao, $sql);
        $qtd = mysqli_num_rows($query);
        $qtd2 = '0';
        $qtd3 = '0';

    }
    if(($qtd_t1 == 0) && ($qtd_t2 == 0) && ($qtd_t3 == 0) && ($qtd_t4 == 0)){
        $qtd = '0';
    }

?>

<style>
table tr td{
    background-color: rgb(73, 72, 72);
    border: 0.4px solid;
}
</style>


<section>

    <header class="panel-heading">
    </header>
    <?php
        if($qtd>0){
    ?>
    <table class="table table-striped table-advance table-hover">
        <tbody>
            <tr>
            <?php if($qtd<3){?><td><i class="icon_profile"></i>SELECT</td><?php } ?>
                    <td><i class="icon_profile"></i> NOME</td>
                    <td><i class="icon_profile"></i> TIPO DE PESSOA</td>
                    <td><i class="icon_mail_alt"></i> ESPECIALIZAÇÃO</td>
                    <td><i class="icon_mail_alt"></i> CPF/CNPJ</td>
                    <td><i class="icon_mail_alt"></i> RAZÃO SOCIAL</td>
                    <td><i class="icon_mail_alt"></i> CEP</td>
                    <td><i class="icon_mail_alt"></i> ENDEREÇO</td>
                    <td><i class="icon_mail_alt"></i> CIDADE</td>
                    <td><i class="icon_mail_alt"></i> MUNICÍPIO</td>
                    <td><i class="icon_mail_alt"></i> NÚMERO</td>
                    <td><i class="icon_mail_alt"></i> COMPLEMENTO</td>
                    <td><i class="icon_mail_alt"></i> EMAIL</td>
                    <td><i class="icon_mail_alt"></i> TELEFONE</td>
                    <td><i class="icon_mail_alt"></i> CELULAR</td>
            </tr>
            <?php 
            while($linha = mysqli_fetch_assoc($query)){
            ?>
            <tr>
            <?php if($qtd<3){?><th><i class="icon_profile"></i><input type="checkbox" name="SELEC_C" value="<?=$linha['ID'];?>"></th><?php } ?>
                <th><i class="icon_profile"></i><input style="text-align: center" name="NOME" type="text" value="<?=$linha['NOME'];?>"></th>
                <th><i class="icon_profile"></i><input style="text-align: center" name="TT_C" type="text" value="<?=$linha['TIPO_CADASTRO'];?>"></th>
                <th><i class="icon_profile"></i><input style="text-align: center" name="TT_P" type="text" value="<?=$linha['TIPO_PESSOA'];?>"></th>
                <th><i class="icon_profile"></i><input style="text-align: center" name="REGISTRO" type="text" value="<?=$linha['CPF_CNPJ'];?>"></th>
                <th><i class="icon_profile"></i><input style="text-align: center" name="RZ_SOCIAL" type="text" value="<?=$linha['RZ_SOCIAL'];?>"></th>
                <th><i class="icon_profile"></i><input style="text-align: center" name="CEP" type="text" value="<?=$linha['CEP'];?>"></th>
                <th><i class="icon_profile"></i><input style="text-align: center" name="ENDER" type="text" value="<?=$linha['ENDERECO'];?>"></th>
                <th><i class="icon_profile"></i><input style="text-align: center" name="CIDADE" type="text" value="<?=$linha['CIDADE'];?>"></th>
                <th><i class="icon_profile"></i><input style="text-align: center" name="MUNICIPIO" type="text" value="<?=$linha['MUNICIPIO'];?>"></th>
                <th><i class="icon_profile"></i><input style="text-align: center" name="NUMERO" type="text" value="<?=$linha['NUMERO'];?>"></th>
                <th><i class="icon_profile"></i><input style="text-align: center" name="COMPLEMENTO" type="text" value="<?=$linha['COMPLEMENTO'];?>"></th>
                <th><i class="icon_profile"></i><input style="text-align: center" name="EMAIL" type="text" value="<?=$linha['EMAIL'];?>"></th>
                <th><i class="icon_profile"></i><input style="text-align: center" name="TELEFONE" type="text" value="<?=$linha['TELEFONE'];?>"></th>
                <th><i class="icon_profile"></i><input style="text-align: center" name="CELULAR" type="text" value="<?=$linha['CELULAR'];?>"></th>
            </tr>
            <?php } ?>
        </tbody>
    </table>
    <?php }else{?>
    <h4>Nao foram encontrados registros com estes Dados.</h4>
    <?php }?>
</section>

