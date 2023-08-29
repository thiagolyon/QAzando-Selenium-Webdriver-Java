# language: pt

  @login
  Funcionalidade: Login do Usuário
    Eu como um novo usuário
    Quero realizar o login na minha conta
    Para poder concluir minhas compras

    Contexto: Acessar tela de login
      Dado que estou na página de login

    @login-sucesso
    Cenário: Login bem-sucedido com credenciais válidas
      Quando preencho o login "thiago@teste.com" e a senha "Lyon365"
      E clico no botão de login
      Então devo ser redirecionado para a página da minha conta

    @login-invalido
    Esquema do Cenario: Validar mensagem de login invalido
      Quando preencho o login "<user>" e a senha "<password>"
      E clico no botão de login
      Então a aplicacao deve exibir a mensagem "<message>" na tela

      Exemplos:
      | user               | password            | message          |
      | thiago.com         | Lyon365             | E-mail inválido. |
      | thiago@teste.com   | 365                 | Senha inválida.  |