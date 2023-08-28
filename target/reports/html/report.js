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
  "line": 24,
  "name": "Tentativa de login mal sucedida com senha invalida",
  "description": "",
  "id": "login-do-usuário;tentativa-de-login-mal-sucedida-com-senha-invalida",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 23,
      "name": "@login-senha-invalida"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "que estou na página de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 26,
  "name": "insiro meu e-mail válido com uma senha inválida",
  "keyword": "Quando "
});
formatter.step({
  "line": 27,
  "name": "clico no botão de login",
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "a aplicação deve exibir a mensagem de erro Senha inválida",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginSteps.que_estou_na_página_de_login()"
});
formatter.result({
  "duration": 3384166100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.insiro_meu_e_mail_válido_com_uma_senha_inválida()"
});
formatter.result({
  "duration": 132533500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clico_no_botão_de_login()"
});
formatter.result({
  "duration": 41386500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.a_aplicação_deve_exibir_a_mensagem_de_erro_Senha_inválida()"
});
formatter.result({
  "duration": 23239401,
  "status": "passed"
});
});