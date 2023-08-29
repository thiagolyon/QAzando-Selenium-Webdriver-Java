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
  "duration": 3488582300,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.preencho_o_formulário_de_cadastro_com_informações_válidas()"
});
formatter.result({
  "duration": 301617300,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.clico_no_botão_de_cadastro()"
});
formatter.result({
  "duration": 80554100,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.devo_receber_uma_mensagem_de_confirmação()"
});
formatter.result({
  "duration": 18519200,
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
  "duration": 4699931000,
  "status": "passed"
});
formatter.match({
  "location": "AtualizaPerfilSteps.acesso_o_menu_ACCOUNT_DETAILS()"
});
formatter.result({
  "duration": 67721900,
  "status": "passed"
});
formatter.match({
  "location": "AtualizaPerfilSteps.acesso_o_menu_UPDATE_ACCOUNT()"
});
formatter.result({
  "duration": 83104000,
  "status": "passed"
});
formatter.match({
  "location": "AtualizaPerfilSteps.preencho_os_dados_corretamente()"
});
formatter.result({
  "duration": 762702700,
  "status": "passed"
});
formatter.match({
  "location": "AtualizaPerfilSteps.clico_no_botão_UPDATE_INFORMATION()"
});
formatter.result({
  "duration": 1102439800,
  "status": "passed"
});
formatter.match({
  "location": "AtualizaPerfilSteps.a_aplicacao_deve_ser_redirecionada_para_a_tela_PROFILE()"
});
formatter.result({
  "duration": 289311900,
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
  "duration": 3607881300,
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
  "duration": 195529600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clico_no_botão_de_login()"
});
formatter.result({
  "duration": 82460900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.devo_ser_redirecionado_para_a_página_da_minha_conta()"
});
formatter.result({
  "duration": 15382200,
  "status": "passed"
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
  "duration": 3234864200,
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
  "duration": 193182900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clico_no_botão_de_login()"
});
formatter.result({
  "duration": 71034400,
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
  "duration": 21712100,
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
  "duration": 2485409800,
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
  "duration": 194944300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clico_no_botão_de_login()"
});
formatter.result({
  "duration": 73942200,
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
  "duration": 20238600,
  "status": "passed"
});
});