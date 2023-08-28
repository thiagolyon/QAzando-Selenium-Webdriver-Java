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
    private String URL = "https://automationpratice.com.br/register";

    public void acessarCadastro() {
        getDriver(System.getProperty("browser")).get(URL);
    }

    public void preencherNome() {
        getDriver().findElement(preencher_nome).sendKeys("Thiago Lyon");
    }

    public void preencherEmail() {
        getDriver().findElement(preencher_email).sendKeys(Utils.gerarEmailAleatorio());
    }

    public void preencherSenha() {
        String senha = Utils.minhaSenha();
        getDriver().findElement(preencher_senha).sendKeys(Utils.minhaSenha());
        System.out.println(senha);
    }

    public void clicarBtnCadastar() {
        getDriver().findElement(By.id("btnRegister")).click();
    }

    public void mensagemConfirmacao() {
        WebElement mensagemElement = getDriver().findElement(By.id("swal2-title"));
        String mensagemText = mensagemElement.getText();
        String mensagemEsperada = "Cadastro realizado!";
        Assert.assertEquals("Mensagem de confirmação não corresponde ao esperado", mensagemText, mensagemEsperada);
    }

}
