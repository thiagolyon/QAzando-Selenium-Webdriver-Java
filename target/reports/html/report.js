$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cadastro.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Cadastro de Usuário",
  "description": "Eu como um novo usuário\r\nQuero me cadastrar no site\r\nPara que eu possa fazer login posteriormente",
  "id": "cadastro-de-usuário",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 9,
  "name": "Cadastro bem-sucedido com informações válidas",
  "description": "",
  "id": "cadastro-de-usuário;cadastro-bem-sucedido-com-informações-válidas",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 8,
      "name": "@cadastro-sucesso"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "que estou na página de cadastro",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "preencho o formulário de cadastro com informações válidas",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "clico no botão de cadastro",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "devo receber uma mensagem de confirmação",
  "keyword": "Então "
});
formatter.step({
  "line": 14,
  "name": "devo ser redirecionado para a página da minha conta",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroSteps.que_estou_na_página_de_cadastro()"
});
formatter.result({
  "duration": 1858996400,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.preencho_o_formulário_de_cadastro_com_informações_válidas()"
});
formatter.result({
  "duration": 289522900,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.clico_no_botão_de_cadastro()"
});
formatter.result({
  "duration": 2414317100,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.devo_receber_uma_mensagem_de_confirmação()"
});
formatter.result({
  "duration": 2141139100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.devo_ser_redirecionado_para_a_página_da_minha_conta()"
});
formatter.result({
  "duration": 28300,
  "status": "passed"
});
});