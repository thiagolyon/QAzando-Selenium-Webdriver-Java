package steps;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pages.AtualizaPerfilPage;
import runner.RunCucumberTest;


public class AtualizaPerfilSteps extends RunCucumberTest {

    AtualizaPerfilPage atualizaPerfilPage = new AtualizaPerfilPage();

    @Dado("^que estou na pagina do painel$")
    public void que_estou_na_pagina_do_painel() {
        atualizaPerfilPage.confirmarPaginaPainel();
    }

    @Quando("^acesso o menu ACCOUNT DETAILS$")
    public void acesso_o_menu_ACCOUNT_DETAILS() {
        atualizaPerfilPage.acessarAccountDetails();
    }

    @Quando("^acesso o menu UPDATE ACCOUNT$")
    public void acesso_o_menu_UPDATE_ACCOUNT() {
        atualizaPerfilPage.accessarUpdateAccount();
    }

    @Quando("^preencho os dados corretamente$")
    public void preencho_os_dados_corretamente() {
        atualizaPerfilPage.preencherNome("Thiago Lyon");
        atualizaPerfilPage.preencherSobrenome();
        atualizaPerfilPage.preencherEmail();
        atualizaPerfilPage.preencherSenhaAtual();
        atualizaPerfilPage.preencherNovaSenha();
        atualizaPerfilPage.preencherSenhaNovamente();
    }

    @Quando("^clico no botão UPDATE INFORMATION$")
    public void clico_no_botão_UPDATE_INFORMATION() throws InterruptedException {
        atualizaPerfilPage.clicarBtnUpadateInformation();
    }

    @Entao("^a aplicacao deve ser redirecionada para a tela PROFILE$")
    public void a_aplicacao_deve_ser_redirecionada_para_a_tela_PROFILE() {
        atualizaPerfilPage.validarTelaProfile();
    }
}
