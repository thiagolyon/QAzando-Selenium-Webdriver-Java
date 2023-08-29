package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import runner.RunCucumberTest;

import static support.Commands.clickElement;

public class LoginPage extends RunCucumberTest {

    private By preencher_email = (By.id("user"));
    private By preencher_senha = (By.id("password"));
    private By botao_login = (By.id("btnLogin"));
    private String URL = "https://automationpratice.com.br/login";

    public void acessarLogin() {
        getDriver(System.getProperty("browser")).get(URL);
        WebElement mensagemElement = getDriver().findElement(By.id("btnLogin"));
        String mensagemText = mensagemElement.getText();
        String mensagemEsperada = "LOGIN";
        Assert.assertEquals("Mensagem de confirmação não corresponde ao esperado", mensagemText, mensagemEsperada);
    }

    public void preencherEmail(String email) {
        getDriver().findElement(preencher_email).sendKeys(email);
    }

    public void preencherSenha(String senha) {
        getDriver().findElement(preencher_senha).sendKeys(senha);
    }

    public void clicarBtnLogin() {
        clickElement(botao_login);
    }

    public void confirmarAcesso() {
        WebElement mensagemElement = getDriver().findElement(By.id("swal2-title"));
        String mensagemText = mensagemElement.getText();
        String mensagemEsperada = "Login realizado";
        Assert.assertEquals("Mensagem de confirmação não corresponde ao esperado", mensagemText, mensagemEsperada);
    }

    public void mensagemErro(String mensagem) {
        String mensagemText = getDriver().findElement(By.className("invalid_input")).getText();
        Assert.assertEquals("As mensagens não correspondem", mensagemText, mensagem);
    }
}
