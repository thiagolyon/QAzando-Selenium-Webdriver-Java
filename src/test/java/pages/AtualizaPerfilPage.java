package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import runner.RunCucumberTest;
import support.Utils;

public class AtualizaPerfilPage extends RunCucumberTest {

    private By validar_pagina_inicial = (By.cssSelector("a.active"));
    private By preencher_nome = (By.id("f_name"));
    private By preencher_sobrenome = (By.cssSelector("input.form-control[placeholder='Dhoe'][required]"));
    private By preencher_email = (By.id("email_address"));
    private By preencher_senha_atual = (By.id("current_password"));
    private By preencher_nova_senha = (By.id("new_password"));
    private By preencher_senha_novamente = (By.id("re_password"));

    public void confirmarPaginaPainel() {

        getDriver().get("https://automationpratice.com.br/my-account/customer-account-details");
        Utils.waitElement(By.cssSelector("a.active"), 10);
        WebElement mensagemElement = getDriver().findElement(validar_pagina_inicial);
        String mensagemText = mensagemElement.getText();
        String mensagemEsperada = "ACCOUNT DETAILS";
        Assert.assertEquals("Mensagem de confirmação não corresponde ao esperado", mensagemText, mensagemEsperada);
        getDriver().findElement(By.cssSelector("a.active")).click();
    }

    public void acessarAccountDetails() {
        Utils.waitElement(By.cssSelector("a[href^='/my-account/customer-account-details']"),10);
        getDriver().findElement(By.cssSelector("a[href^='/my-account/customer-account-details']")).click();
    }

    public void accessarUpdateAccount() {
        Utils.waitElement(By.cssSelector("a.theme-btn-one.bg-black.btn_sm[href='/account-edit']"), 10);
        getDriver().findElement(By.cssSelector("a.theme-btn-one.bg-black.btn_sm[href='/account-edit']")).click();
    }

    public void preencherNome(String name) {
        Utils.waitElement(By.id("f_name"),10);
        getDriver().findElement(preencher_nome).sendKeys(name);
    }

    public void preencherSobrenome() {
        getDriver().findElement(preencher_sobrenome).sendKeys("Nascimento");
    }

    public void preencherEmail() {
        getDriver().findElement(preencher_email).sendKeys(Utils.gerarEmailAleatorio());
    }

    public void preencherSenhaAtual() {
        getDriver().findElement(preencher_senha_atual).sendKeys("lyon!23");
    }

    public void preencherNovaSenha() {
        getDriver().findElement(preencher_nova_senha).sendKeys("LyonTE#89");
    }

    public void preencherSenhaNovamente() {
        getDriver().findElement(preencher_senha_novamente).sendKeys("LyonTe#89");
    }

    public void clicarBtnUpadateInformation() throws InterruptedException {
        Utils.scrollAteOFinalDaPagina();
        Utils.waitElement(By.xpath("//form[@id='account_info_form']//button[@type='submit']"),10);
        getDriver().findElement(By.xpath("//form[@id='account_info_form']//button[@type='submit']")).click();
    }

    public void validarTelaProfile() {
        Utils.waitElement(By.xpath("//div[@class='profile_right']/h4"), 10);
        WebElement mensagemElement = getDriver().findElement(By.xpath("//div[@class='profile_right']/h4"));
        String mensagemText = mensagemElement.getText();
        String mensagemEsperada = "Fashion Store";
        Assert.assertEquals("Mensagem de confirmação não corresponde ao esperado", mensagemText, mensagemEsperada);
    }
}
