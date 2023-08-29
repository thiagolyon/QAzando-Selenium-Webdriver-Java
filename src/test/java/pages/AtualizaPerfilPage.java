package pages;

import org.openqa.selenium.By;
import runner.RunCucumberTest;
import support.Utils;

import static support.Commands.*;

public class AtualizaPerfilPage extends RunCucumberTest {

    private By validar_pagina_inicial = (By.cssSelector("a.active"));
    private By preencher_nome = (By.id("f_name"));
    private By preencher_sobrenome = (By.cssSelector("input.form-control[placeholder='Dhoe'][required]"));
    private By preencher_email = (By.id("email_address"));
    private By preencher_senha_atual = (By.id("current_password"));
    private By preencher_nova_senha = (By.id("new_password"));
    private By preencher_senha_novamente = (By.id("re_password"));
    private By botao_confirmar = (By.cssSelector("a.active"));
    private By botao_account_details = (By.cssSelector("a[href^='/my-account/customer-account-details']"));
    private By botao_update_account = (By.cssSelector("a.theme-btn-one.bg-black.btn_sm[href='/account-edit']"));
    private By botao_update_information = (By.xpath("//form[@id='account_info_form']//button[@type='submit']"));
    private String URL = "https://automationpratice.com.br/my-account/customer-account-details";

    public void confirmarPaginaPainel() {
        getDriver(System.getProperty("browser")).get(URL);
        checkMessage(validar_pagina_inicial, "ACCOUNT DETAILS");
        clickElement(botao_confirmar);
    }

    public void acessarAccountDetails() {
        clickElement(botao_account_details);
    }

    public void accessarUpdateAccount() {
        clickElement(botao_update_account);
    }

    public void preencherNome(String name) {
        fillField(preencher_nome, name);
    }

    public void preencherSobrenome() {
        fillField(preencher_sobrenome, "Nascimento");
    }

    public void preencherEmail() {
        fillField(preencher_email, Utils.gerarEmailAleatorio());
    }

    public void preencherSenhaAtual() {
        fillField(preencher_senha_atual, "lyon!23");
    }

    public void preencherNovaSenha() {
        fillField(preencher_nova_senha, "LyonTE#89");
    }

    public void preencherSenhaNovamente() {
        fillField(preencher_senha_novamente, "LyonTe#89");
    }

    public void clicarBtnUpadateInformation() throws InterruptedException {
        Utils.scrollAteOFinalDaPagina();
        clickElement(botao_update_information);
    }

    public void validarTelaProfile() {
        checkMessage(By.xpath("//div[@class='profile_right']/h4"), "Fashion Store");
    }
}
