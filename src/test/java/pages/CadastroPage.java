package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import runner.RunCucumberTest;
import support.Utils;

public class CadastroPage extends RunCucumberTest {

    private By preencher_email = (By.id("email"));
    private By preencher_nome = (By.id("user"));
    private By preencher_senha = (By.id("password"));

    public void acessarCadastro() {
        getDriver().get("https://automationpratice.com.br/register");
        Utils.waitElement(preencher_email, 10);
    }

    public void preencherNome() {
        getDriver().findElement(preencher_nome).sendKeys("Thiago Lyon");
        Utils.waitElement(preencher_nome, 10);
    }

    public void preencherEmail() {
        getDriver().findElement(preencher_email).sendKeys(Utils.gerarEmailAleatorio());
        Utils.waitElement(preencher_email, 10);
    }

    public void preencherSenha() {
        getDriver().findElement(preencher_senha).sendKeys("Teste102030");
        Utils.waitElement(preencher_senha, 10);
    }

    public void clicarBtnCadastar() {
        getDriver().findElement(By.id("btnRegister")).click();
    }

    public void mensagemConfirmacao() {
        Utils.waitElement(By.id("swal2-title"), 10);
        WebElement mensagemElement = getDriver().findElement(By.id("swal2-title"));
        String mensagemText = mensagemElement.getText();
        String mensagemEsperada = "Cadastro realizado!";
        Assert.assertEquals("Mensagem de confirmação não corresponde ao esperado", mensagemText, mensagemEsperada);
    }

}
