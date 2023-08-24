package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import support.Utils;

public class HomePage extends Utils {

    WebDriver driver;

    public HomePage(WebDriver driver) {
        this.driver = driver;
    }

    public void acessarAplicacao() {
        driver.get("https://www.qazando.com.br/curso.html");
        waitElement(By.id("btn-ver-cursos"), 10);
        String textoBotao = driver.findElement(By.id("btn-ver-cursos")).getText();
        Assert.assertEquals("Não acessou a aplicação!", "VER CURSOS", textoBotao);
    }

    public void preencherEmail() {
        waitElement(By.id("email"), 10);
        driver.findElement(By.id("email")).sendKeys("thiago.lyon.passos@gmail.com");
    }

    public void clicarBotaoCupom() {
        waitElement(By.id("button"), 10);
        driver.findElement(By.id("button")).click();
    }

    public void cupomExibido() {
        String texto_cupom = driver.findElement((By.cssSelector("div#cupom span"))).getText();
        Assert.assertEquals("O cupom está errado!", "QAZANDO15OFF", texto_cupom);
    }
}