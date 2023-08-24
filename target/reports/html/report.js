$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("desconto.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Receber o cupom desconto da QAzando",
  "description": "Eu como usuário da QAzando\r\nQuero receber um cupom de desconto\r\nPara comprar um curso com valor reduzido",
  "id": "receber-o-cupom-desconto-da-qazando",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 9,
  "name": "Visualizar código de desconto",
  "description": "",
  "id": "receber-o-cupom-desconto-da-qazando;visualizar-código-de-desconto",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 8,
      "name": "@visualizar-cupom"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "que estou no site da QAzando",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "eu preencho meu e-mail",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "clico no botão Ganhar cupom",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o código de desconto é exibido",
  "keyword": "Então "
});
formatter.match({
  "location": "DescontosStep.que_estou_no_site_da_QAzando()"
});
formatter.result({
  "duration": 7730729000,
  "status": "passed"
});
formatter.match({
  "location": "DescontosStep.eu_preencho_meu_e_mail()"
});
formatter.result({
  "duration": 85692500,
  "status": "passed"
});
formatter.match({
  "location": "DescontosStep.clico_no_botão_Ganhar_cupom()"
});
formatter.result({
  "duration": 3944790300,
  "status": "passed"
});
formatter.match({
  "location": "DescontosStep.o_código_de_desconto_é_exibido()"
});
formatter.result({
  "duration": 13772400,
  "status": "passed"
});
});