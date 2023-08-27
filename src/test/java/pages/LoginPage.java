package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import support.Utils;

public class LoginPage extends Utils {

    private By preencher_email = (By.id("user"));
    private By preencher_senha = (By.id("password"));

    WebDriver driver;

    public LoginPage(WebDriver driver) {
        this.driver = driver;
    }

    public void acessarLogin() {
        driver.get("https://automationpratice.com.br/login");
        waitElement(By.id("btnLogin"), 10);
        WebElement mensagemElement = driver.findElement(By.id("btnLogin"));
        String mensagemText = mensagemElement.getText();
        String mensagemEsperada = "LOGIN";
        Assert.assertEquals("Mensagem de confirmação não corresponde ao esperado", mensagemText, mensagemEsperada);
    }

    public void preencherEmail() {
        driver.findElement(preencher_email).sendKeys(gerarEmailAleatorio());
        System.out.println(gerarEmailAleatorio());
    }

    public void preencherSenha() {
        driver.findElement(preencher_senha).sendKeys(minhaSenha());
        System.out.println(minhaSenha());
    }

    public void clicarBtnLogin() {
        driver.findElement(By.id("btnLogin")).click();
    }

    public void confirmarAcesso() {
        waitElement(By.id("swal2-title"), 10);
        WebElement mensagemElement = driver.findElement(By.id("swal2-title"));
        String mensagemText = mensagemElement.getText();
        String mensagemEsperada = "Login realizado";
        Assert.assertEquals("Mensagem de confirmação não corresponde ao esperado", mensagemText, mensagemEsperada);
    }
}
