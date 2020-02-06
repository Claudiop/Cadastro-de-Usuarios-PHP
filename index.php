<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Cadastramento Empresarial</title>
    <link rel="icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS1u9Dgt36Wjxpj1zxnhAxmsL6XX-tzQUYjMGJDAJCwpMS9sZbdg&s" />
    <link rel="stylesheet" href="Conf_Style.css">
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
    <script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="js/jquery.mask.min.js"></script>
    <script type="text/php" src="Conexao.php"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <?php include 'Conexao.php'; ?>

</head>

<body onload="INICIO()">

            <script>
            var Status_CC = "<?php echo $SS_conex; ?>";
            </script>
            
        <div class="MMenu_L">
                <nav class="Login">
                        <li><a href="#"><input type="text" name="LLogin" id="email_L" size="25" placeholder="E-mail ou Nome"><input type="password" name="SSenha" id="senha_L" size="10" placeholder="Senha" style="margin-left: 10px;"><button type="submit" name="Bt_login" id="Bt_logd" style="margin-left: 8px; background-color: black; color:white;">Entrar</button></a></li>
                        
            
                    </nav>
            <div id="Cb_M"><input type="checkbox" name="Menu_Ln" id="Menu_L" style="display: none;"><label for="Menu_L" id="LL_Menu" style="margin: 3px; border: 2px solid; color: white; background: rgba(31, 30, 30, 0.87); border-radius: 1px; padding: 10px 10px; cursor: pointer;">LOGIN</label></div>
            
        </div>
    <div id="IMG">
     <img src="Imagens/TC2.png" alt="ERRO NA IMG" style="float:  center;">

    </div> 
    <h1>Cadastramento De Usuários</h1>
    <form class="C_Area_C" id="Area_C" method="POST" action="Salva_BD.php">
        <div id="Sp1">
                <h3>ESCOLHA  OQUE  DESEJA  CADASTRAR:</h3>
                <div id="Campo_Status">
                    <div id="Status_BB"><label id="L_Status_BB" onclick="Veri_Conex_L();">Status</label>
                    </div>
                </div>
             <p>
                <input type="radio" name="Escolha_T" value="CLIENTE" id="Client_R" checked>
                <label for="Client_R" style="font: normal 15pt Arial; margin-right: 10px; margin-left: -40px;">CLIENTE</label>
    
                <input type="radio" name="Escolha_T" value="FORNECEDOR" id="Fornecedor_R">
                <label for="Fornecedor_R" style="font: normal 15pt Arial; margin: 10px;">FORNECEDOR</label>

                <input type="radio" name="Escolha_T" value="FUNCIONARIO" id="Funcionario_R">
                <label for="Funcionario_R" style="font: normal 15pt Arial; margin: 10px;">FUNCIONÁRIO</label>
            </p>
        </div>
        <div Id="Sp2">
          <p>
            <div id="Obs">Campos Com '*' São Obrigatorios!</div>
            
            <input type="radio" name="Escolha_P" id="FISICO" value="PESSOA FISICA" checked onclick="SetRegs();">
            <label for="FISICO" style="margin-left: 12px; font-size: 18px; background: black; border-radius: 2px; padding: 2px 5px; cursor: pointer;">Pessoa Física</label>

            <input type="radio" name="Escolha_P" id="JURUDICO" value="PESSOA JURIDICA" onclick="SetRegs();">
            <label for="JURUDICO" style="margin-left: 3px; font-size: 18px; background: black; border-radius: 2px; padding: 2px 5px; cursor: pointer;">Pessoa Jurídica</label>
            

          </p>
        </div>
         <div id="Sp3" method="get" action=".">
                
                <h2 class="Camp_1">Nome*:<input type="text" name="NOME" id="nome" size="30" style="margin-left: 2px; margin-right: 10px;" onkeypress="style='border: none;'">
                CPF/CNPJ*: <input type="text" name="CPF/CNPJ" id="cpf_cnpj" size="15" style="margin-right: 10px;" onkeypress="style='border: none;'" onblur="TT_Registro();"> Razão Social*: <input type="text" name="R_social" id="r_social" size="66" onkeypress="style='border: none;'"></h2>
                
         </div>


         <div id="Sp3" method="get" action=".">
                
                <h2 class="Camp_1">CEP*: <input type="text" name="CEP" id="cep" size="15" style="margin-left: 2px; margin-right: 5px;" onkeypress="style='border: none;'" onblur="Ver_CEP();">
               Endereço*: <input type="text" name="ENCERECO" id="endereco" size="25" style="margin-right: 5px;" onkeypress="style='border: none;'"> Número: <input type="text" name="NUMERO" id="numero" size="10" style="margin-right: 5px;"> 
               Complemento: <input type="text" name="COMPLE" id="comple" size="44" ></h2>
                
         </div>

         <div id="Sp4">
                
                <h2 class="Camp_1">Município*: <input type="text" name="MUNICIPIO" id="municipio" size="15" style="margin-left: 2px; margin-right: 5px;" onkeypress="style='border: none;'">
               Cidade*: <input type="text" name="CIDADE" id="cidade" size="17" style="margin-right: 5px;" onkeypress="style='border: none;'"> Telefone: <input type="text" name="TELEFONE" id="telefone" size="11" style="margin-right: 5px;"> 
               Celular: <input type="text" name="CELULAR" id="celular" size="12" > E-mail: <input type="text" name="EMAIL" id="email" size="25" style="margin-left: 3px; margin-right: 1px;"></h2>
               
         </div>

         <div class="ButT_CC">

                
                <div id="Cadastrar_C"> CADASTRAR </div>
               
        </div>
    </form>
    <div id="Obs2" class="OObsd">Para Excluir ou Alterar, Busque Somente Um Usuário!</div>
    <form class="C_Area_E" id="Area_E" >
        <div id="Pesquisa">

            <input type="text" id="C_Pesquisa" size="70" onkeypress="Buscar_cc();" placeholder="Pesquisa por Nome, Tipo de Pessoa, CPF/CNPJ ou Especialização" style="float: left; text-align: left; margin-top: 6px; margin-left: 6px; font-size: 20px; font-family: 'Arial Black';"> <div class="C_Botton_PP" id="Botton_PP" style="float: left; padding: 8px; width: 86px; height: 12px; text-align: center; margin: 6px; font-size: 16px; background-color: darkblue; cursor: pointer;">BUSCAR</div><div class="B_MM_P" id="B_ALTERAR">ALTERAR</div><div class="B_MM_P" id="B_EXCLUIR">EXCLUIR</div>
        
        </div>
        <div class="Lista_BD" class="C_Lista_BD">

            <table id="Tab_Buscc" style="float: left;">
                <th><div id="dados"></div></th>
            </table>


        </div>
        <input type="hidden" id="exec_f" name="EXEC_F" value="">

    </form>
    
</header>

   

<footer>
</footer>

<script src="JS/Functions_JS.js"></script>

</body>
</html>