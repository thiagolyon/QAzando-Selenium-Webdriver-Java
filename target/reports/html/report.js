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
formatter.scenarioOutline({
  "line": 19,
  "name": "Validar mensagem de login invalido",
  "description": "",
  "id": "login-do-usuário;validar-mensagem-de-login-invalido",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 18,
      "name": "@login-invalido"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "preencho o login \"\u003cuser\u003e\" e a senha \"\u003cpassword\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 21,
  "name": "clico no botão de login",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "a aplicacao deve exibir a mensagem \"\u003cmessage\u003e\" na tela",
  "keyword": "Então "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "login-do-usuário;validar-mensagem-de-login-invalido;",
  "rows": [
    {
      "cells": [
        "user",
        "password",
        "message"
      ],
      "line": 25,
      "id": "login-do-usuário;validar-mensagem-de-login-invalido;;1"
    },
    {
      "cells": [
        "thiago.com",
        "Lyon365",
        "E-mail inválido."
      ],
      "line": 26,
      "id": "login-do-usuário;validar-mensagem-de-login-invalido;;2"
    },
    {
      "cells": [
        "thiago@teste.com",
        "365",
        "Senha inválida."
      ],
      "line": 27,
      "id": "login-do-usuário;validar-mensagem-de-login-invalido;;3"
    }
  ],
  "keyword": "Exemplos"
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
  "duration": 4967068800,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Validar mensagem de login invalido",
  "description": "",
  "id": "login-do-usuário;validar-mensagem-de-login-invalido;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    },
    {
      "line": 18,
      "name": "@login-invalido"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "preencho o login \"thiago.com\" e a senha \"Lyon365\"",
  "matchedColumns": [
    0,
    1
  ],
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
  "matchedColumns": [
    2
  ],
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
  "duration": 113134500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clico_no_botão_de_login()"
});
formatter.result({
  "duration": 239404800,
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
  "duration": 13356400,
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
  "duration": 3871579500,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Validar mensagem de login invalido",
  "description": "",
  "id": "login-do-usuário;validar-mensagem-de-login-invalido;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    },
    {
      "line": 18,
      "name": "@login-invalido"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "preencho o login \"thiago@teste.com\" e a senha \"365\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 21,
  "name": "clico no botão de login",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "a aplicacao deve exibir a mensagem \"Senha inválida.\" na tela",
  "matchedColumns": [
    2
  ],
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
  "duration": 95103900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clico_no_botão_de_login()"
});
formatter.result({
  "duration": 231204100,
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
  "duration": 12474100,
  "status": "passed"
});
});