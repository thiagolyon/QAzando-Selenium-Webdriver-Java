#language: pt

  Funcionalidade: Cadastro de Usuário
    Eu como um novo usuário
    Quero me cadastrar no site
    Para que eu possa fazer login posteriormente

    @cadastro-sucesso
    Cenário: Cadastro bem-sucedido com informações válidas
      Dado que estou na página de cadastro
      Quando preencho o formulário de cadastro com informações válidas
      E clico no botão de cadastro
      Então devo receber uma mensagem de confirmação


    Cenário: Atualizar os dados da minha conta
      Dado que estou logado