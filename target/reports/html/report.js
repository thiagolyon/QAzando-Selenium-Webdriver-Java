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
  "duration": 1921245700,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.preencho_o_formulário_de_cadastro_com_informações_válidas()"
});
formatter.result({
  "duration": 335439300,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.clico_no_botão_de_cadastro()"
});
formatter.result({
  "duration": 63622200,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.devo_receber_uma_mensagem_de_confirmação()"
});
formatter.result({
  "duration": 100694800,
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
  "duration": 636936600,
  "status": "passed"
});
formatter.match({
  "location": "AtualizaPerfilSteps.acesso_o_menu_ACCOUNT_DETAILS()"
});
formatter.result({
  "duration": 250001700,
  "status": "passed"
});
formatter.match({
  "location": "AtualizaPerfilSteps.acesso_o_menu_UPDATE_ACCOUNT()"
});
formatter.result({
  "duration": 67300,
  "status": "passed"
});
formatter.match({
  "location": "AtualizaPerfilSteps.preencho_os_dados_corretamente()"
});
formatter.result({
  "duration": 22300,
  "status": "passed"
});
formatter.match({
  "location": "AtualizaPerfilSteps.clico_no_botão_UPDATE_INFORMATION()"
});
formatter.result({
  "duration": 20400,
  "status": "passed"
});
formatter.match({
  "location": "AtualizaPerfilSteps.a_aplicacao_deve_ser_redirecionada_para_a_tela_PROFILE()"
});
formatter.result({
  "duration": 16000,
  "status": "passed"
});
});