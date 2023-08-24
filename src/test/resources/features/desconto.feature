# language: pt

  Funcionalidade: Receber o cupom desconto da QAzando
    Eu como usuário da QAzando
    Quero receber um cupom de desconto
    Para comprar um curso com valor reduzido

    @visualizar-cupom
    Cenario: Visualizar código de desconto
      Dado que estou no site da QAzando
      Quando eu preencho meu e-mail
      E clico no botão Ganhar cupom
      Então o código de desconto é exibido

