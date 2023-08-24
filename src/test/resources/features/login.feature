# language: pt

  Funcionalidade: Login do Usuário
    Eu como um novo usuário
    Quero realizar o login na minha conta
    Para poder concluir minhas compras

    @login-sucesso
    Cenário: Login bem-sucedido com credenciais válidas
      Dado que estou na página de login
      Quando eu insiro meu nome de usuário e senha válidos
      E clico no botão de login
      Então devo ser redirecionado para a página da minha conta