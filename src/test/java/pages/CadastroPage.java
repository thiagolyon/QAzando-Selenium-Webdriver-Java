package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import runner.RunCucumberTest;
import support.Utils;

import static support.Commands.clickElement;
import static support.Commands.fillField;

public class CadastroPage extends RunCucumberTest {

    private By preencher_email = (By.id("email"));
    private By preencher_nome = (By.id("user"));
    private By preencher_senha = (By.id("password"));
    private By botao_cadastro = (By.id("btnRegister"));
    private String URL = "https://automationpratice.com.br/register";

    public void acessarCadastro() {
        getDriver(System.getProperty("browser")).get(URL);
    }

    public void preencherNome() {
        fillField(preencher_nome, "Thiago Lyon");
    }

    public void preencherEmail(String email) {
        fillField(preencher_email, email);
    }

    public void preencherSenha(String senha) {
        fillField(preencher_senha, senha);
    }

    public void clicarBtnCadastar() {
        clickElement(botao_cadastro);
    }

    public void mensagemConfirmacao() {
        WebElement mensagemElement = getDriver().findElement(By.id("swal2-title"));
        String mensagemText = mensagemElement.getText();
        String mensagemEsperada = "Cadastro realizado!";
        Assert.assertEquals("Mensagem de confirmação não corresponde ao esperado", mensagemText, mensagemEsperada);
    }

}
