package steps;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import pages.HomePage;
import runner.RunCucumberTest;

public class DescontosStep extends RunCucumberTest {

    HomePage homePage = new HomePage(driver);

    @Dado("^que estou no site da QAzando$")
    public void que_estou_no_site_da_QAzando() {
        homePage.acessarAplicacao();
    }

    @Quando("^eu preencho meu e-mail$")
    public void eu_preencho_meu_e_mail() {
        homePage.preencherEmail();
    }

    @Quando("^clico no botão Ganhar cupom$")
    public void clico_no_botão_Ganhar_cupom() {
        homePage.clicarBotaoCupom();
    }

    @Então("^o código de desconto é exibido$")
    public void o_código_de_desconto_é_exibido() {
        homePage.cupomExibido();
    }
}