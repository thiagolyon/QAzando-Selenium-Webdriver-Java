package steps;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import pages.LoginPage;
import runner.RunCucumberTest;
import support.ScreenshotUtils;

public class LoginSteps extends RunCucumberTest {

    LoginPage loginPage = new LoginPage();

    @Dado("^que estou na página de login$")
    public void que_estou_na_página_de_login() {
        loginPage.acessarLogin();
    }

    @Quando("^preencho o login \"([^\"]*)\" e a senha \"([^\"]*)\"$")
    public void preencho_o_login_e_a_senha(String email, String senha)  {
        loginPage.preencherEmail(email);
        loginPage.preencherSenha(senha);
    }

    @Quando("^clico no botão de login$")
    public void clico_no_botão_de_login() {
        loginPage.clicarBtnLogin();
    }

    @Então("^devo ser redirecionado para a página da minha conta$")
    public void devo_ser_redirecionado_para_a_página_da_minha_conta() {
        loginPage.confirmarAcesso();
    }

    @Então("^a aplicacao deve exibir a mensagem \"([^\"]*)\" na tela$")
    public void a_aplicacao_deve_exibir_a_mensagem_na_tela(String mensagem) {
        loginPage.mensagemErro(mensagem);
    }

    @After
    public static void afterScenario(Scenario scenario) {
            ScreenshotUtils.addScreenshotOnScenario(scenario);
    }
}
