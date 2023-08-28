package steps;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import pages.LoginPage;
import runner.RunCucumberTest;

public class LoginSteps extends RunCucumberTest {

    LoginPage loginPage = new LoginPage();

    @Dado("^que estou na página de login$")
    public void que_estou_na_página_de_login() {
        loginPage.acessarLogin();
    }

    @Quando("^eu insiro meu nome de usuário e senha válidos$")
    public void eu_insiro_meu_nome_de_usuário_e_senha_válidos() {
        loginPage.preencherEmail();
        loginPage.preencherSenha();
    }

    @Quando("^clico no botão de login$")
    public void clico_no_botão_de_login() {
        loginPage.clicarBtnLogin();
    }

    @Então("^devo ser redirecionado para a página da minha conta$")
    public void devo_ser_redirecionado_para_a_página_da_minha_conta() {
        loginPage.confirmarAcesso();
    }

    @Quando("^insiro minha senha válida sem um e-mail válido$")
    public void insiro_minha_senha_válida_sem_um_e_mail_válido()  {
        loginPage.emailInvalido();
        loginPage.preencherSenha();
    }

    @Então("^a aplicação deve exibir a mensagem de erro E-mail inválido$")
    public void a_aplicação_deve_exibir_a_mensagem_de_erro() {
        loginPage.validarMensagemErroEmail();
    }

    @Quando("^insiro meu e-mail válido com uma senha inválida$")
    public void insiro_meu_e_mail_válido_com_uma_senha_inválida() {
        loginPage.preencherEmail();
        loginPage.senhaInvalida();
    }

    @Então("^a aplicação deve exibir a mensagem de erro Senha inválida$")
    public void a_aplicação_deve_exibir_a_mensagem_de_erro_Senha_inválida() {
        loginPage.validarMensagemErroSenha();
    }
}
