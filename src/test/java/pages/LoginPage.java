package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import support.Utils;

public class LoginPage extends Utils {

    WebDriver driver;

    private By preencher_email = (By.id("user"));
    private By preencher_senha = (By.id("password"));

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
        driver.findElement(preencher_email).sendKeys(meuEmail());
    }

    public void preencherSenha() {
        driver.findElement(preencher_senha).sendKeys(minhaSenha());
    }

    public void clicarBtnLogin() {
        driver.findElement(By.id("btnLogin")).click();
    }
}
