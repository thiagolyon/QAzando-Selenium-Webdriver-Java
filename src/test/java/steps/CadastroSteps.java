package steps;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import pages.CadastroPage;
import support.ScreenshotUtils;
import support.Utils;

public class CadastroSteps extends Utils {

    CadastroPage cadastroPage = new CadastroPage();

    @Dado("^que estou na página de cadastro$")
    public void que_estou_na_página_de_cadastro() {
        cadastroPage.acessarCadastro();
    }

    @Quando("^preencho o formulário de cadastro com informações válidas$")
    public void preencho_o_formulário_de_cadastro_com_informações_válidas() {
        cadastroPage.preencherNome();
        cadastroPage.preencherEmail(gerarEmailAleatorio());
        cadastroPage.preencherSenha(minhaSenha());
    }

    @Quando("^clico no botão de cadastro$")
    public void clico_no_botão_de_cadastro() {
        cadastroPage.clicarBtnCadastar();
    }

    @Então("^devo receber uma mensagem de confirmação$")
    public void devo_receber_uma_mensagem_de_confirmação() {
        cadastroPage.mensagemConfirmacao();
    }

    @After
    public static void afterScenario(Scenario scenario) {
        ScreenshotUtils.addScreenshotOnScenario(scenario);
    }
}