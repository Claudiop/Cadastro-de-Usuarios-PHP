
var Menu_LL = window.document.getElementById('LL_Menu')
var B_Entrar = window.document.getElementById('Bt_logd')
var B_CadADM = window.document.getElementById('Cad_ADM')
var B_Cadastro = window.document.getElementById('Cadastrar_C')
var B_Cadastro_F = window.document.getElementById('Area_C')
var B_Cadastro_E = window.document.getElementById('Area_E')
var JMenu_LL = window.document.getElementsByClassName('Login')
var JArea_C = window.document.getElementsByClassName('C_Area_C')
var JArea_E = window.document.getElementsByClassName('C_Area_E')
var Ca__ADM = window.document.getElementsByClassName('Ca_ADM')
var CL_NOME = window.document.getElementById('email_L')
var CL_SENHA = window.document.getElementById('senha_L')
var Status_CX = window.document.getElementById('Status_BB')

var R_nome = window.document.getElementById('nome')
var R_registro_c = window.document.getElementById('cpf_cnpj')
var R_r_social = window.document.getElementById('r_social')
var R_cep = window.document.getElementById('cep')
var R_endereco = window.document.getElementById('endereco')
var R_municipio = window.document.getElementById('municipio')
var R_cidade = window.document.getElementById('cidade')
/////////////////////////////////////////////////////////////
var R_numero = window.document.getElementById('numero')
var R_comple = window.document.getElementById('comple')
var R_telefone = window.document.getElementById('telefone')
var R_celular = window.document.getElementById('celular')
var R_email = window.document.getElementById('email')


var R_escolha_T = window.document.getElementsByName('Escolha_T')
var R_escolha_P = window.document.getElementsByName('Escolha_P')

var BB_Pesquisar = window.document.getElementById('Botton_PP')
var Camp_Pesquisar = window.document.getElementById('C_Pesquisa')
var Camp_Dados_T = window.document.getElementById('dados')
var Obss = window.document.getElementsByClassName('OObsd')
var EXE_Fid = window.document.getElementById('exec_f')


var C = 0;
var Logg = 0;
var Validado_Us = 0;
var CPF_VV = 0;
var Enviar_R = 1;
var Status_L = 0;
var RR_registro_cm = '';
var RTPP = '';
var RTCC = '';


BB_Pesquisar.addEventListener('mouseenter', BBB_select)
BB_Pesquisar.addEventListener('mouseout', BBB_volta_m)
BB_Pesquisar.addEventListener('click', BB_Pescc)

Menu_LL.addEventListener('mouseenter', select)
Menu_LL.addEventListener('mouseout', volta_m)
Menu_LL.addEventListener('click', Clik)

B_Entrar.addEventListener('mouseenter', select2)
B_Entrar.addEventListener('mouseout', volta_m2)
B_Entrar.addEventListener('click', ClikE)

B_Cadastro.addEventListener('mouseenter', selectC)
B_Cadastro.addEventListener('mouseout', volta_mC)
B_Cadastro.addEventListener('click', ClikC)
    
function INICIO(){
    SetRegs();
    Pad_Mask();
    Ver_Conxx();
    CriaRequest();
}

function BB_Pescc(){
    BB_Pesquisar.style.color = 'darkblue'
    Buscar_cc();
}

function BBB_select(){
    BB_Pesquisar.style.backgroundColor = 'white'
    BB_Pesquisar.style.color = 'black'
}

function BBB_volta_m(){
    BB_Pesquisar.style.backgroundColor = 'rgb(21, 21, 197)'
    BB_Pesquisar.style.color = 'white'
}

function CriaRequest(){
    try{
        request = new XMLHttpRequest();        
    }catch (IEAtual){  
        try{
            request = new ActiveXObject("Msxml2.XMLHTTP");       
        }catch(IEAntigo){
            try{
                request = new ActiveXObject("Microsoft.XMLHTTP");          
            }catch(falha){
                request = false;
            }
        }
    }
    if (!request) 
        alert("Seu Navegador não suporta Ajax!");
    else
        return request;
}




function SetRegs(){
    if(R_escolha_P[0].checked){
        $("#cpf_cnpj").mask("000.000.000-00")
    } else if(R_escolha_P[1].checked){
        $("#cpf_cnpj").mask("00.000.000/0000-00")
    }

}

function TT_Registro(){
    if(R_escolha_P[0].checked){
    var RR_registro_c = String(R_registro_c.value)
    var cpf1 = RR_registro_c.substring(0, 3);
    var cpf2 = RR_registro_c.substring(4, 7);
    var cpf3 = RR_registro_c.substring(8, 11);
    var cpf4 = RR_registro_c.substring(12, 14);
    RR_registro_cm = cpf1 + cpf2 + cpf3 + cpf4;
    TestaCPF(RR_registro_cm);
        if(CPF_VV == '1' ){
            R_r_social.value = "CPF= VALIDO";
        }else{R_r_social.value = "CPF= INVALIDO";}
        }else if(R_escolha_P[1].checked){
            var RR_registro_c = String(R_registro_c.value)
            var cnpj1 = RR_registro_c.substring(0, 2);
            var cnpj2 = RR_registro_c.substring(3, 6);
            var cnpj3 = RR_registro_c.substring(7, 10);
            var cnpj4 = RR_registro_c.substring(11, 15);
            var cnpj5 = RR_registro_c.substring(16, 18);
            RR_registro_cm = cnpj1 + cnpj2 + cnpj3 + cnpj4 + cnpj5;
            Pesq_Regist(RR_registro_cm);
        }
}

function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000"){ CPF_VV = 0; return false;}
  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ){ CPF_VV = 0; }
  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ){ CPF_VV = 0;} else { CPF_VV = 1; }
}



function Pesq_Regist(val){
    var script = document.createElement('script');
    script.src = 'https://www.receitaws.com.br/v1/cnpj/'+ val + '/?callback=meu_callbackk';
    document.body.appendChild(script);
}


function meu_callbackk(conteudo) {
    if (!("erro" in conteudo)) {
        R_r_social.value=(conteudo.nome);
        R_endereco.value=(conteudo.logradouro);
        R_municipio.value=(conteudo.bairro);
        R_cidade.value=(conteudo.municipio);

        R_cep.value=(conteudo.cep);
        R_numero.value=(conteudo.numero);
        R_comple.value=(conteudo.complemento);
        R_telefone.value=(conteudo.telefone);
        R_email.value=(conteudo.email);
    }
    else {
        var MngErr = (conteudo.status);
        R_r_social.value="";
        alert(MngErr);
    }
}



function meu_callback(conteudo) {
        if (!("erro" in conteudo)) {
            R_endereco.value=(conteudo.logradouro.toUpperCase());
            R_municipio.value=(conteudo.bairro.toUpperCase());
            R_cidade.value=(conteudo.localidade.toUpperCase());
        }
        else {
            alert("CEP não encontrado.");
        }
}
        
function pesquisacep(valor) {
                R_endereco.value="";
                R_municipio.value="";
                R_cidade.value="";
                var script = document.createElement('script');
                script.src = 'https://viacep.com.br/ws/'+ valor + '/json/?callback=meu_callback';
                document.body.appendChild(script);
} 

function Ver_CEP(){
    var RR_cep = String(R_cep.value)
    var cep1 = RR_cep.substring(0, 2);
    var cep2 = RR_cep.substring(3, 6);
    var cep3 = RR_cep.substring(7, 10);
    RR_cep = cep1 + cep2 + cep3;
    pesquisacep(RR_cep);
}




function Pad_Mask(){
    $("#cep").mask("00.000-000")
    $("#numero").mask("99999999999999999999999999999")
    $("#telefone").mask("(00) 0000-0000")
    $("#celular").mask("(00) 0000-00009")
}


function Verificar(){
    Normal_TT();
    Enviar_R = 1;
    var RR_nome = String(R_nome.value)
    var RR_registro_c = String(R_registro_c.value)
    var RR_r_social = String(R_r_social.value)
    var RR_cep = String(R_cep.value)
    var RR_endereco = String(R_endereco.value)
    var RR_municipio = String(R_municipio.value)
    var RR_cidade = String(R_cidade.value)
    if(RR_nome == ''){
        alert('Por Favor informe o Nome!')
        R_nome.style.border = 'red 2px solid';
        Enviar_R = 0;
    } else if(RR_registro_c == ''){
        alert('Por Favor informe o CPF/CNPJ!')
        R_registro_c.style.border = 'red 2px solid';
        Enviar_R = 0;
    } else if(RR_r_social == ''){
        alert('Por Favor informe a Razão Social!')
        R_r_social.style.border = 'red 2px solid';
        Enviar_R = 0;
    } else if(RR_cep == ''){
        alert('Por Favor informe o CEP!')
        R_cep.style.border = 'red 2px solid';
        Enviar_R = 0;
    } else if(RR_endereco == ''){
        alert('Por Favor informe o Endereço!')
        R_endereco.style.border = 'red 2px solid';
        Enviar_R = 0;
    } else if(RR_municipio == ''){
        alert('Por Favor informe o Município!')
        R_municipio.style.border = 'red 2px solid';
        Enviar_R = 0;
    } else if(RR_cidade == ''){
        alert('Por Favor informe a Cidade!')
        R_cidade.style.border = 'red 2px solid';
        Enviar_R = 0;
    }
    if(Enviar_R == '1'){
        TT_Cadastro();
    if(R_escolha_P[0].checked){
        var RR_registro_c = String(R_registro_c.value)
        var cpf1 = RR_registro_c.substring(0, 3);
        var cpf2 = RR_registro_c.substring(4, 7);
        var cpf3 = RR_registro_c.substring(8, 11);
        var cpf4 = RR_registro_c.substring(12, 14);
        RR_registro_cm = cpf1 + cpf2 + cpf3 + cpf4;
        RTPP = 'PESSOA FISICA';
        B_Cadastro_F.submit();
        alert("Enviado");

    } else if(R_escolha_P[1].checked){
        var RR_registro_c = String(R_registro_c.value)
        var cnpj1 = RR_registro_c.substring(0, 2);
        var cnpj2 = RR_registro_c.substring(3, 6);
        var cnpj3 = RR_registro_c.substring(7, 10);
        var cnpj4 = RR_registro_c.substring(11, 15);
        var cnpj5 = RR_registro_c.substring(16, 18);
        RR_registro_cm = cnpj1 + cnpj2 + cnpj3 + cnpj4 + cnpj5;
        Pesq_Regist(RR_registro_cm);
        RTPP = 'PESSOA JURIDICA';
        B_Cadastro_F.submit();
        alert("Enviado");

    }
    }
}

function TT_Cadastro(){
    if(R_escolha_T[0].checked){RTCC = 'CLIENTE';}
    if(R_escolha_T[1].checked){RTCC = 'FORNECEDOR';}
    if(R_escolha_T[2].checked){RTCC = 'FUNCIONARIO';}
}




function Registrar_DD(){
    var RR_nome = String(R_nome.value);
    var RR_registro_c = String(R_registro_c.value);
    var RR_r_social = String(R_r_social.value);
    var RR_cep = String(R_cep.value);
    var RR_endereco = String(R_endereco.value);
    var RR_municipio = String(R_municipio.value);
    var RR_numero = String(R_numero.value);
    var RR_comple = String(R_comple.value);
    var RR_telefone = String(R_telefone.value);
    var RR_celular = String(R_celular.value);
    var RR_email = String(R_email.value);
    var RR_cidade = String(R_cidade.value);

    var data = {
        'nome': RR_nome,
        'cpf_cnpj': RR_registro_c,
        'r_social': RR_r_social,
        'cep': RR_cep,
        'endereco': RR_endereco,
        'municipio': RR_municipio,
        'numero': RR_numero,
        'comple': RR_comple,
        'telefone': RR_telefone,
        'celular': RR_celular,
        'email': RR_email,
        'cidade': RR_cidade,
        't_pp': RRTPP,
        't_cc': RRTCC
    }
    alert("passo1");
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("POST", "http://localhost/IN/Salva_BD.php", true);
    httpRequest.responseType = "json";
    httpRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    httpRequest.send(JSON.stringify(data));
    $.get("http://localhost/IN/Salva_BD.php"), data, function (retorno){
    alert(retorno);
}
}

function Normal_TT(){
    R_nome.style.boxShadow = 'none';
    R_registro_c.style.boxShadow = 'none';
    R_r_social.style.boxShadow = 'none';
    R_cep.style.boxShadow = 'none';
    R_endereco.style.boxShadow = 'none';
    R_municipio.style.boxShadow = 'none';
    R_cidade.style.boxShadow = 'none';
}




function Clik(){
    if (C == '1'){
        for (var i = 0; i < JMenu_LL.length; i++) {
           // JMenu_LL[i].style.display = 'none';
            JMenu_LL[i].style.marginTop = '-100%';
            C = 0;}
    } else if (C == '0'){
        for (var i = 0; i < JMenu_LL.length; i++) {
            //JMenu_LL[i].style.display = 'block';
            JMenu_LL[i].style.margin = '0';
            C = 1;}
    }
    if(Status_L == '1'){
    for (var i = 0; i < JArea_C.length; i++) {
        JArea_C[i].style.display = 'block';}
    for (var i = 0; i < Obss.length; i++) {
        Obss[i].style.display = 'none';}
    for (var i = 0; i < JArea_E.length; i++) {
        JArea_E[i].style.display = 'none';
        Menu_LL.innerText = "LOGIN";
        Camp_Pesquisar.value = null
        JMenu_LL[i].style.marginTop = '-100%';
        Status_L = 0;
        C = 0;
    }}
}

function select() {
    Menu_LL.style.backgroundColor = 'blue';
 }

function volta_m() {
    Menu_LL.style.backgroundColor = 'rgba(31, 30, 30, 0.87)';
}

function select2() {
    B_Entrar.style.backgroundColor = 'blue';
    B_Entrar.style.color = 'white';
 }

function volta_m2() {
    B_Entrar.style.backgroundColor = 'rgba(31, 30, 30, 0.87)';
    B_Entrar.style.color = 'white';
}

function ClikE(){
    Ver_Login();
}

function Ver_Login(){
    var CCL_NOME = String(CL_NOME.value)
    var CCL_SENHA = String(CL_SENHA.value)
        $.ajax
        ({
            type: 'POST',
            dataType: 'html',
            url: 'Login_BD.php',
            beforeSend: function () {
                Menu_LL.innerText = "...";
            },
            data: {Login: CCL_NOME, Senha: CCL_SENHA},
            success: function (msg)
            {
            Menu_LL.innerText = "LOGIN";
            Validado_Us = msg;
                if(Validado_Us == '1'){
                    for (var i = 0; i < JArea_C.length; i++) {
                    // JMenu_LL[i].style.display = 'none';
                        JArea_C[i].style.display = 'none';}
                    for (var i = 0; i < JArea_E.length; i++) {
                         JArea_E[i].style.display = 'block';}
                    for (var i = 0; i < Obss.length; i++) {
                         Obss[i].style.display = 'inherit';}
                     for (var i = 0; i < JMenu_LL.length; i++) {
                         JMenu_LL[i].style.marginTop = '-100%';
                         Menu_LL.innerText = "LOGOUT";
                         CL_NOME.value = null
                         CL_SENHA.value = null
                         C = 0;
                         Status_L = 1;
                         }
                }else if(Validado_Us == '0'){
                alert("Usuário ou Senha Invalidos!")
                CL_NOME.value = null
                CL_SENHA.value = null
            } else {
                alert("Usuário ou Senha Invalidos!")
                CL_NOME.value = null
                CL_SENHA.value = null
            }
        }
    });
}


function selectC(){
    B_Cadastro.style.backgroundColor = 'white'
    B_Cadastro.style.color = 'black'
}

function volta_mC() {
    B_Cadastro.style.backgroundColor = 'darkblue'
    B_Cadastro.style.color = 'white'
    B_Cadastro.innerText = 'CADASTRAR'
}

function ClikC(){
    TT_Cadastro();
    Verificar();
}


function Ver_Conxx(){
    if(Status_CC == '0'){
        Status_CX.style.backgroundColor = 'rgba(209, 0, 0, 0.795)'
    }else if(Status_CC == '1'){
        Status_CX.style.backgroundColor = 'rgb(21, 112, 21)'
    }
}










function Buscar_cc(){
    var CCamp_Pesquisar = String(Camp_Pesquisar.value);
//O método $.ajax(); é o responsável pela requisição
    $.ajax({
        //Configurações
        type: 'POST',//Método que está sendo utilizado.
        dataType: 'html',//É o tipo de dado que a página vai retornar.
        url: 'Busca_BD.php',//Indica a página que está sendo solicitada.
        //função que vai ser executada assim que a requisição for enviada
        beforeSend: function () {
        ///div do lugar onde sera carregado os dados
        },
        data: {palavraa: CCamp_Pesquisar},//Dados para consulta
        //função que será executada quando a solicitação for finalizada.
        success: function (msg)
        {
            Camp_Dados_T.innerHTML = msg
        }
        });
}



    var B_SS = window.document.getElementById('B_ALTERAR')
    var B_EX = window.document.getElementById('B_EXCLUIR')
    B_SS.addEventListener('mouseenter', B_select)
    B_SS.addEventListener('mouseout', B_volta_m)
    B_SS.addEventListener('click', B_Clik1)

    B_EX.addEventListener('mouseenter', B_select2)
    B_EX.addEventListener('mouseout', B_volta_m2)
    B_EX.addEventListener('click', B_Clik2)


    function B_select(){
        B_SS.style.backgroundColor = 'white'
        B_SS.style.color = 'black'
    }

    function B_volta_m(){
        B_SS.style.backgroundColor = 'rgb(21, 21, 197)'
        B_SS.style.color = 'white'
    }

    function B_Clik1(){
            B_SS.style.color = 'darkblue'
            EXE_Fid.value = '1';
            ENV_MODIFILE();
    }

    function B_select2(){
        B_EX.style.backgroundColor = 'white'
        B_EX.style.color = 'black'
    }

    function B_volta_m2(){
        B_EX.style.backgroundColor = 'rgb(21, 21, 197)'
        B_EX.style.color = 'white'
    }

    function B_Clik2(){
        B_EX.style.color = 'darkblue'
        EXE_Fid.value = '2';
        ENV_MODIFILE();
    }



    function ENV_MODIFILE(){
            var form = new FormData($("#Area_E")[0]);
        $.ajax({
            url: 'Modifile_BD.php', 
            type: 'POST',
            dataType: 'json',
            cache: false,
            processData: false,
            contentType: false,
            data: form,
            success: function(response) {
                alert(response);
            },
            error: function(xhr) {
                alert(xhr);
            }
        });
    }

