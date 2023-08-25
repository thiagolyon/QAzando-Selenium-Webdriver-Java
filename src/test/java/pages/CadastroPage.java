package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import support.Utils;

public class CadastroPage extends Utils {

    WebDriver driver;

    private By preencher_email = (By.id("email"));
    private By preencher_nome = (By.id("user"));
    private By preencher_senha = (By.id("password"));

    public CadastroPage(WebDriver driver) {
        this.driver = driver;
    }

    public void acessarCadastro() {
        driver.get("https://automationpratice.com.br/register");
        waitElement(preencher_email, 10);
    }

    public void preencherNome() {
        driver.findElement(preencher_nome).sendKeys("Thiago Lyon");
        waitElement(preencher_nome, 10);
    }

    public void preencherEmail() {
        driver.findElement(preencher_email).sendKeys(gerarEmailAleatorio());
        waitElement(preencher_email, 10);
    }

    public void preencherSenha() {
        driver.findElement(preencher_senha).sendKeys("Teste102030");
        waitElement(preencher_senha, 10);
    }

    public void clicarBtnCadastar() {
        driver.findElement(By.id("btnRegister")).click();
    }

    public void mensagemConfirmacao() {
        waitElement(By.id("swal2-title"), 10);
        WebElement mensagemElement = driver.findElement(By.id("swal2-title"));
        String mensagemText = mensagemElement.getText();
        String mensagemEsperada = "Cadastro realizado!";
        Assert.assertEquals("Mensagem de confirmação não corresponde ao esperado", mensagemText, mensagemEsperada);
    }

}
