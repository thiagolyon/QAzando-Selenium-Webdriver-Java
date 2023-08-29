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
      "name": "@login"
    }
  ]
});
formatter.background({
  "line": 9,
  "name": "Acessar tela de login",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 10,
  "name": "que estou na página de login",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_estou_na_página_de_login()"
});
formatter.result({
  "duration": 3829213000,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login bem-sucedido com credenciais válidas",
  "description": "",
  "id": "login-do-usuário;login-bem-sucedido-com-credenciais-válidas",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 12,
      "name": "@login-sucesso"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "preencho o login \"thiago@teste.com\" e a senha \"Lyon365\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "clico no botão de login",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "devo ser redirecionado para a página da minha conta",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "thiago@teste.com",
      "offset": 18
    },
    {
      "val": "Lyon365",
      "offset": 47
    }
  ],
  "location": "LoginSteps.preencho_o_login_e_a_senha(String,String)"
});
formatter.result({
  "duration": 100601800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clico_no_botão_de_login()"
});
formatter.result({
  "duration": 249058200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.devo_ser_redirecionado_para_a_página_da_minha_conta()"
});
formatter.result({
  "duration": 9429200,
  "status": "passed"
});
formatter.background({
  "line": 9,
  "name": "Acessar tela de login",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 10,
  "name": "que estou na página de login",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_estou_na_página_de_login()"
});
formatter.result({
  "duration": 3949557900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Login mal-sucedido com email inválido",
  "description": "",
  "id": "login-do-usuário;login-mal-sucedido-com-email-inválido",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 18,
      "name": "@login-email-invalido"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "preencho o login \"thiago.com\" e a senha \"Lyon365\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 21,
  "name": "clico no botão de login",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "a aplicacao deve exibir a mensagem \"E-mail inválido.\" na tela",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "thiago.com",
      "offset": 18
    },
    {
      "val": "Lyon365",
      "offset": 41
    }
  ],
  "location": "LoginSteps.preencho_o_login_e_a_senha(String,String)"
});
formatter.result({
  "duration": 89172700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clico_no_botão_de_login()"
});
formatter.result({
  "duration": 238089100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "E-mail inválido.",
      "offset": 36
    }
  ],
  "location": "LoginSteps.a_aplicacao_deve_exibir_a_mensagem_na_tela(String)"
});
formatter.result({
  "duration": 16267300,
  "status": "passed"
});
formatter.background({
  "line": 9,
  "name": "Acessar tela de login",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 10,
  "name": "que estou na página de login",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_estou_na_página_de_login()"
});
formatter.result({
  "duration": 6147786900,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Login mal-sucedido com senha inválida",
  "description": "",
  "id": "login-do-usuário;login-mal-sucedido-com-senha-inválida",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 24,
      "name": "@login-senha-invalida"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "preencho o login \"thiago@teste.com\" e a senha \"365\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 27,
  "name": "clico no botão de login",
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "a aplicacao deve exibir a mensagem \"Senha inválida.\" na tela",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "thiago@teste.com",
      "offset": 18
    },
    {
      "val": "365",
      "offset": 47
    }
  ],
  "location": "LoginSteps.preencho_o_login_e_a_senha(String,String)"
});
formatter.result({
  "duration": 83863200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clico_no_botão_de_login()"
});
formatter.result({
  "duration": 226880900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Senha inválida.",
      "offset": 36
    }
  ],
  "location": "LoginSteps.a_aplicacao_deve_exibir_a_mensagem_na_tela(String)"
});
formatter.result({
  "duration": 14383900,
  "status": "passed"
});
});