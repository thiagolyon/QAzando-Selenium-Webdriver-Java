#language: pt

  @cadastro-completo
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

    @atualiza-perfil
    Cenário: Atualizar os dados da minha conta
      Dado que estou na pagina do painel
      Quando acesso o menu ACCOUNT DETAILS
      E acesso o menu UPDATE ACCOUNT
      E preencho os dados corretamente
      E clico no botão UPDATE INFORMATION
      Entao a aplicacao deve ser redirecionada para a tela PROFILE
