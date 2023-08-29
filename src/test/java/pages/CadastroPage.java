package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import runner.RunCucumberTest;
import support.Utils;

import static support.Commands.clickElement;

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
        getDriver().findElement(preencher_nome).sendKeys("Thiago Lyon");
    }

    public void preencherEmail(String email) {
        getDriver().findElement(preencher_email).sendKeys(email);
    }

    public void preencherSenha(String senha) {
        getDriver().findElement(preencher_senha).sendKeys(senha);
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
