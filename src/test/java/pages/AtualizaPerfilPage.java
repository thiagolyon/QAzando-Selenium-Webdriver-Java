package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import support.Utils;

public class AtualizaPerfilPage extends Utils {

    WebDriver driver;

    private By validar_pagina_inicial = (By.cssSelector("a.active"));
    private By preencher_nome = (By.id("f_name"));
    private By preencher_sobrenome = (By.cssSelector("input.form-control[placeholder='Dhoe'][required]"));
    private By preencher_email = (By.id("email_address"));
    private By preencher_senha_atual = (By.id("current_password"));
    private By preencher_nova_senha = (By.id("new_password"));
    private By preencher_senha_novamente = (By.id("re_password"));

    public AtualizaPerfilPage(WebDriver driver) {
        this.driver = driver;
    }

    public void confirmarPaginaPainel() {
        waitElement(By.cssSelector("a.active"), 10);
        WebElement mensagemElement = driver.findElement(validar_pagina_inicial);
        String mensagemText = mensagemElement.getText();
        String mensagemEsperada = "DASHBOARD";
        Assert.assertEquals("Mensagem de confirmação não corresponde ao esperado", mensagemText, mensagemEsperada);
        driver.findElement(By.cssSelector("button.swal2-confirm.swal2-styled")).click();
    }

    public void acessarAccountDetails() {
        waitElement(By.cssSelector("a[href^='/my-account/customer-account-details']"),10);
        driver.findElement(By.cssSelector("a[href^='/my-account/customer-account-details']")).click();
    }

    public void accessarUpdateAccount() {
        waitElement(By.cssSelector("a.theme-btn-one.bg-black.btn_sm[href='/account-edit']"), 10);
        driver.findElement(By.cssSelector("a.theme-btn-one.bg-black.btn_sm[href='/account-edit']")).click();
    }

    public void preencherNome(String name) {
        waitElement(By.id("f_name"),10);
        driver.findElement(preencher_nome).sendKeys(name);
    }

    public void preencherSobrenome() {
        driver.findElement(preencher_sobrenome).sendKeys("Nascimento");
    }

    public void preencherEmail() {
        driver.findElement(preencher_email).sendKeys(gerarEmailAleatorio());
    }

    public void preencherSenhaAtual() {
        driver.findElement(preencher_senha_atual).sendKeys("lyon!23");
    }

    public void preencherNovaSenha() {
        driver.findElement(preencher_nova_senha).sendKeys("LyonTE#89");
    }

    public void preencherSenhaNovamente() {
        driver.findElement(preencher_senha_novamente).sendKeys("LyonTe#89");
    }

    public void clicarBtnUpadateInformation() {
        waitElement(By.xpath("//form[@id='account_info_form']//button[@type='submit']"),10);
        driver.findElement(By.xpath("//form[@id='account_info_form']//button[@type='submit']")).click();
    }

    public void validarTelaProfile() {
        waitElement(By.xpath("//div[@class='profile_right']/h4"), 10);
        WebElement mensagemElement = driver.findElement(By.xpath("//div[@class='profile_right']/h4"));
        String mensagemText = mensagemElement.getText();
        String mensagemEsperada = "Fashion Store";
        Assert.assertEquals("Mensagem de confirmação não corresponde ao esperado", mensagemText, mensagemEsperada);
    }
}
