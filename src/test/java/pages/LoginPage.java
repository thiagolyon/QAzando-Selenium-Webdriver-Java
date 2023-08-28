package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import runner.RunCucumberTest;
import support.Utils;

public class LoginPage extends RunCucumberTest {

    private By preencher_email = (By.id("user"));
    private By preencher_senha = (By.id("password"));
    private String URL = "https://automationpratice.com.br/login";

    public void acessarLogin() {
        getDriver(System.getProperty("browser")).get(URL);
        WebElement mensagemElement = getDriver().findElement(By.id("btnLogin"));
        String mensagemText = mensagemElement.getText();
        String mensagemEsperada = "LOGIN";
        Assert.assertEquals("Mensagem de confirmação não corresponde ao esperado", mensagemText, mensagemEsperada);
    }

    public void preencherEmail() {
        getDriver().findElement(preencher_email).sendKeys(Utils.gerarEmailAleatorio());
    }

    public void preencherSenha() {
        getDriver().findElement(preencher_senha).sendKeys(Utils.minhaSenha());
    }

    public void clicarBtnLogin() {
        getDriver().findElement(By.id("btnLogin")).click();
    }

    public void confirmarAcesso() {
        WebElement mensagemElement = getDriver().findElement(By.id("swal2-title"));
        String mensagemText = mensagemElement.getText();
        String mensagemEsperada = "Login realizado";
        Assert.assertEquals("Mensagem de confirmação não corresponde ao esperado", mensagemText, mensagemEsperada);
    }

    public void emailInvalido() {
        getDriver().findElement(preencher_email).sendKeys("qualquercoisa");
    }

    public void validarMensagemErroEmail() {
        WebElement mensagemElement = getDriver().findElement(By.className("invalid_input"));
        String mensagem = mensagemElement.getText();

        Assert.assertEquals("A mensagem esperada não corresponde com a mensagem atual.","E-mail inválido.", mensagem);
    }

    public void senhaInvalida() {
        getDriver().findElement(preencher_senha).sendKeys("123");
    }

    public void validarMensagemErroSenha() {
        WebElement mensagemElement = getDriver().findElement(By.className("invalid_input"));
        String mensagem = mensagemElement.getText();
        System.out.println(mensagem);
        Assert.assertEquals("A mensagem esperada não corresponde com a mensagem atual.","Senha inválida.", mensagem);
    }
}
