$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Login do Usuário",
  "description": "Eu como um novo usuário\r\nQuero realizar o login na minha conta\r\nPara poder concluir minhas compras",
  "id": "login-do-usuário",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 9,
  "name": "Login bem-sucedido com credenciais válidas",
  "description": "",
  "id": "login-do-usuário;login-bem-sucedido-com-credenciais-válidas",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 8,
      "name": "@login-sucesso"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "que estou na página de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "eu insiro meu nome de usuário e senha válidos",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "clico no botão de login",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "devo ser redirecionado para a página da minha conta",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginSteps.que_estou_na_página_de_login()"
});
formatter.result({
  "duration": 1935672900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.eu_insiro_meu_nome_de_usuário_e_senha_válidos()"
});
formatter.result({
  "duration": 5086144500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clico_no_botão_de_login()"
});
formatter.result({
  "duration": 17300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.devo_ser_redirecionado_para_a_página_da_minha_conta()"
});
formatter.result({
  "duration": 9500,
  "status": "passed"
});
});