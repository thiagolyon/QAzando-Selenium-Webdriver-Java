# language: pt

  @login
  Funcionalidade: Login do Usuário
    Eu como um novo usuário
    Quero realizar o login na minha conta
    Para poder concluir minhas compras

    @login-sucesso
    Cenário: Login bem-sucedido com credenciais válidas
      Dado que estou na página de login
      Quando preencho o login "thiago@teste.com" e a senha "Lyon365"
      E clico no botão de login
      Então devo ser redirecionado para a página da minha conta

    @login-email-invalido
    Cenário: Login mal-sucedido com email inválido
      Dado que estou na página de login
      Quando preencho o login "thiago.com" e a senha "Lyon365"
      E clico no botão de login
      Então a aplicacao deve exibir a mensagem "E-mail inválido." na tela

    @login-senha-invalida
    Cenário: Login mal-sucedido com senha inválida
      Dado que estou na página de login
      Quando preencho o login "thiago@teste.com" e a senha "365"
      E clico no botão de login
      Então a aplicacao deve exibir a mensagem "Senha inválida." na tela