package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import runner.RunCucumberTest;
import support.Utils;

public class LoginPage extends RunCucumberTest {

    private By preencher_email = (By.id("user"));
    private By preencher_senha = (By.id("password"));

    public void acessarLogin() {
        getDriver().get("https://automationpratice.com.br/login");
        Utils.waitElement(By.id("btnLogin"), 10);
        WebElement mensagemElement = getDriver().findElement(By.id("btnLogin"));
        String mensagemText = mensagemElement.getText();
        String mensagemEsperada = "LOGIN";
        Assert.assertEquals("Mensagem de confirmação não corresponde ao esperado", mensagemText, mensagemEsperada);
    }

    public void preencherEmail() {
        getDriver().findElement(preencher_email).sendKeys(Utils.gerarEmailAleatorio());
        System.out.println(Utils.gerarEmailAleatorio());
    }

    public void preencherSenha() {
        getDriver().findElement(preencher_senha).sendKeys(Utils.minhaSenha());
        System.out.println(Utils.minhaSenha());
    }

    public void clicarBtnLogin() {
        getDriver().findElement(By.id("btnLogin")).click();
    }

    public void confirmarAcesso() {
        Utils.waitElement(By.id("swal2-title"), 10);
        WebElement mensagemElement = getDriver().findElement(By.id("swal2-title"));
        String mensagemText = mensagemElement.getText();
        String mensagemEsperada = "Login realizado";
        Assert.assertEquals("Mensagem de confirmação não corresponde ao esperado", mensagemText, mensagemEsperada);
    }
}
