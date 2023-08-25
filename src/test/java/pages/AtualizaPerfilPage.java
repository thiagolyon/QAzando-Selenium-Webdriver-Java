package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import support.Utils;

public class AtualizaPerfilPage extends Utils {

    WebDriver driver;

    private By preencher_nome = (By.id("f_name"));
    private By preencher_sobrenome = (By.cssSelector("input.form-control[placeholder='Dhoe'][required]"));

    public AtualizaPerfilPage(WebDriver driver) {
        this.driver = driver;
    }

    public void confirmarPaginaPainel() {
        waitElement(By.cssSelector("a.active"), 10);
        WebElement mensagemElement = driver.findElement(By.cssSelector("a.active"));
        String mensagemText = mensagemElement.getText();
        String mensagemEsperada = "DASHBOARD";
        Assert.assertEquals("Mensagem de confirmação não corresponde ao esperado", mensagemText, mensagemEsperada);
        driver.findElement(By.cssSelector("button.swal2-confirm.swal2-styled")).click();
    }

    public void acessarAccountDetails() {
        driver.findElement(By.cssSelector("#my-account_area > div > div > div.col-sm-12.col-md-12.col-lg-3 > div > ul > li:nth-child(5) > a")).click();
    }

    public void accessarUpdateAccount() {
        waitElement(By.cssSelector("a.theme-btn-one.bg-black.btn_sm[href='/account-edit']"), 10);
        driver.findElement(By.cssSelector("a.theme-btn-one.bg-black.btn_sm[href='/account-edit']")).click();
    }

    public void preencherNome() {
        waitElement(By.id("f_name"),10);
        driver.findElement(preencher_nome).sendKeys("Thiago Lyon");
    }

    public void preencherSobrenome() {
        driver.findElement(preencher_sobrenome).sendKeys("Nascimento");
    }
}
