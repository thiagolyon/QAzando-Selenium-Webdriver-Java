$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
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
  "duration": 3294612000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.eu_insiro_meu_nome_de_usuário_e_senha_válidos()"
});
formatter.result({
  "duration": 122808000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clico_no_botão_de_login()"
});
formatter.result({
  "duration": 50403500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.devo_ser_redirecionado_para_a_página_da_minha_conta()"
});
formatter.result({
  "duration": 43304200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Login bem-sucedido com credenciais válidas2",
  "description": "",
  "id": "login-do-usuário;login-bem-sucedido-com-credenciais-válidas2",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 16,
      "name": "@login-sucesso2"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "que estou na página de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 19,
  "name": "eu insiro meu nome de usuário e senha válidos",
  "keyword": "Quando "
});
formatter.step({
  "line": 20,
  "name": "clico no botão de login",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "devo ser redirecionado para a página da minha conta",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginSteps.que_estou_na_página_de_login()"
});
formatter.result({
  "duration": 4252218400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.eu_insiro_meu_nome_de_usuário_e_senha_válidos()"
});
formatter.result({
  "duration": 121658500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clico_no_botão_de_login()"
});
formatter.result({
  "duration": 49202500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.devo_ser_redirecionado_para_a_página_da_minha_conta()"
});
formatter.result({
  "duration": 61563000,
  "status": "passed"
});
});