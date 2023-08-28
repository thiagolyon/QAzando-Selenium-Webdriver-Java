package steps;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import pages.LoginPage;
import runner.RunBase;
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
}
