$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cadastro.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 4,
  "name": "Cadastro de Usuário",
  "description": "Eu como um novo usuário\r\nQuero me cadastrar no site\r\nPara que eu possa fazer login posteriormente",
  "id": "cadastro-de-usuário",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@cadastro-completo"
    }
  ]
});
formatter.scenario({
  "line": 10,
  "name": "Cadastro bem-sucedido com informações válidas",
  "description": "",
  "id": "cadastro-de-usuário;cadastro-bem-sucedido-com-informações-válidas",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 9,
      "name": "@cadastro-sucesso"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "que estou na página de cadastro",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "preencho o formulário de cadastro com informações válidas",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "clico no botão de cadastro",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "devo receber uma mensagem de confirmação",
  "keyword": "Então "
});
formatter.match({
  "location": "CadastroSteps.que_estou_na_página_de_cadastro()"
});
formatter.result({
  "duration": 2725636200,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.preencho_o_formulário_de_cadastro_com_informações_válidas()"
});
formatter.result({
  "duration": 303632900,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.clico_no_botão_de_cadastro()"
});
formatter.result({
  "duration": 61206800,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.devo_receber_uma_mensagem_de_confirmação()"
});
formatter.result({
  "duration": 69235200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Atualizar os dados da minha conta",
  "description": "",
  "id": "cadastro-de-usuário;atualizar-os-dados-da-minha-conta",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 16,
      "name": "@atualiza-perfil"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "que estou na pagina do painel",
  "keyword": "Dado "
});
formatter.step({
  "line": 19,
  "name": "acesso o menu ACCOUNT DETAILS",
  "keyword": "Quando "
});
formatter.step({
  "line": 20,
  "name": "acesso o menu UPDATE ACCOUNT",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "preencho os dados corretamente",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "clico no botão UPDATE INFORMATION",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "a aplicacao deve ser redirecionada para a tela PROFILE",
  "keyword": "Entao "
});
formatter.match({
  "location": "AtualizaPerfilSteps.que_estou_na_pagina_do_painel()"
});
formatter.result({
  "duration": 3865824400,
  "status": "passed"
});
formatter.match({
  "location": "AtualizaPerfilSteps.acesso_o_menu_ACCOUNT_DETAILS()"
});
formatter.result({
  "duration": 80645800,
  "status": "passed"
});
formatter.match({
  "location": "AtualizaPerfilSteps.acesso_o_menu_UPDATE_ACCOUNT()"
});
formatter.result({
  "duration": 89013800,
  "status": "passed"
});
formatter.match({
  "location": "AtualizaPerfilSteps.preencho_os_dados_corretamente()"
});
formatter.result({
  "duration": 934295800,
  "status": "passed"
});
formatter.match({
  "location": "AtualizaPerfilSteps.clico_no_botão_UPDATE_INFORMATION()"
});
formatter.result({
  "duration": 624693100,
  "status": "passed"
});
formatter.match({
  "location": "AtualizaPerfilSteps.a_aplicacao_deve_ser_redirecionada_para_a_tela_PROFILE()"
});
formatter.result({
  "duration": 585144600,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 4,
  "name": "Login do Usuário",
  "description": "Eu como um novo usuário\r\nQuero realizar o login na minha conta\r\nPara poder concluir minhas compras",
  "id": "login-do-usuário",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@login-duplo"
    }
  ]
});
formatter.scenario({
  "line": 10,
  "name": "Login bem-sucedido com credenciais válidas",
  "description": "",
  "id": "login-do-usuário;login-bem-sucedido-com-credenciais-válidas",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 9,
      "name": "@login-sucesso"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "que estou na página de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "eu insiro meu nome de usuário e senha válidos",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "clico no botão de login",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "devo ser redirecionado para a página da minha conta",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginSteps.que_estou_na_página_de_login()"
});
formatter.result({
  "duration": 3840964100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.eu_insiro_meu_nome_de_usuário_e_senha_válidos()"
});
formatter.result({
  "duration": 173341400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clico_no_botão_de_login()"
});
formatter.result({
  "duration": 75217500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.devo_ser_redirecionado_para_a_página_da_minha_conta()"
});
formatter.result({
  "duration": 74956500,
  "status": "passed"
});
});