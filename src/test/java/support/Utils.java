package support;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import runner.RunCucumberTest;

import java.util.Random;

public class Utils extends RunCucumberTest {

    public void waitElement(By element, int time) {
        WebDriverWait wait = new WebDriverWait(driver, time);
        wait.until(ExpectedConditions.elementToBeClickable(element));
    }

    public String gerarEmailAleatorio() {

        String email_inicio = "qazando_";
        String email_final = "@qazando.com.br";

        Random random = new Random();
        int minimo = 1;
        int maximo = 99999999;
        int resultado = random.nextInt(maximo-minimo) + minimo;

        return email_inicio + resultado + email_final;
    }

    public String meuEmail(){
        String email = "thiago.lyon.passos@gmail.com";

        return email;
    }

    public String minhaSenha() {
        String senha = "Brasil00";

        return senha;
    }
}
