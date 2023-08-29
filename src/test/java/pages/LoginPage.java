package pages;

import org.openqa.selenium.By;
import runner.RunCucumberTest;

import static support.Commands.*;

public class LoginPage extends RunCucumberTest {

    private By preencher_email = (By.id("user"));
    private By preencher_senha = (By.id("password"));
    private By botao_login = (By.id("btnLogin"));
    private String URL = "https://automationpratice.com.br/login";

    public void acessarLogin() {
        getDriver(System.getProperty("browser")).get(URL);
        checkMessage(By.id("btnLogin"), "LOGIN");
    }

    public void preencherEmail(String email) {
        fillField(preencher_email, email);
    }

    public void preencherSenha(String senha) {
        fillField(preencher_senha, senha);
    }

    public void clicarBtnLogin() {
        clickElement(botao_login);
    }

    public void confirmarAcesso() {
        checkMessage(By.id("swal2-title"), "Login realizado");
    }

    public void mensagemErro(String message) {
        checkMessage(By.className("invalid_input"), message);
    }
}
