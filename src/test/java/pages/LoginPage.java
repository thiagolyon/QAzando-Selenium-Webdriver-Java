package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import runner.RunCucumberTest;

import static support.Commands.clickElement;
import static support.Commands.fillField;

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
        fillField(preencher_email, email);
    }

    public void preencherSenha(String senha) {
        fillField(preencher_senha, senha);
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
