# language: pt

  @login-duplo
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

    @login-email-invalido
    Cenário: Tentativa de login mal sucedida com e-mail inválido
      Dado que estou na página de login
      Quando insiro minha senha válida sem um e-mail válido
      E clico no botão de login
      Então a aplicação deve exibir a mensagem de erro E-mail inválido

    @login-senha-invalida
    Cenário: Tentativa de login mal sucedida com senha invalida
      Dado que estou na página de login
      Quando insiro meu e-mail válido com uma senha inválida
      E clico no botão de login
      Então a aplicação deve exibir a mensagem de erro Senha inválida