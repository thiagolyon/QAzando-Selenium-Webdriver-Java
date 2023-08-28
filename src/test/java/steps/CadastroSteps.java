package steps;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import pages.CadastroPage;
import runner.RunBase;
import runner.RunCucumberTest;

public class CadastroSteps extends RunCucumberTest {

    CadastroPage cadastroPage = new CadastroPage();

    @Dado("^que estou na página de cadastro$")
    public void que_estou_na_página_de_cadastro() {
        getDriver(RunBase.Browser.CHROME);
        cadastroPage.acessarCadastro();
    }

    @Quando("^preencho o formulário de cadastro com informações válidas$")
    public void preencho_o_formulário_de_cadastro_com_informações_válidas() {
        cadastroPage.preencherNome();
        cadastroPage.preencherEmail();
        cadastroPage.preencherSenha();
    }

    @Quando("^clico no botão de cadastro$")
    public void clico_no_botão_de_cadastro() {
        cadastroPage.clicarBtnCadastar();
    }

    @Então("^devo receber uma mensagem de confirmação$")
    public void devo_receber_uma_mensagem_de_confirmação() {
        cadastroPage.mensagemConfirmacao();
    }
}
