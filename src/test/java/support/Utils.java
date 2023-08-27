package support;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import runner.RunCucumberTest;
import java.security.SecureRandom;
import java.util.Random;

public class Utils extends RunCucumberTest {

    public void waitElement(By element, int time) {
        WebDriverWait wait = new WebDriverWait(driver, time);
        wait.until(ExpectedConditions.elementToBeClickable(element));
    }

    public String gerarEmailAleatorio() {

        // Gere dois números aleatórios entre 0 e 99
        Random random = new Random();
        int randomNumber1 = random.nextInt(100);
        int randomNumber2 = random.nextInt(100);

        // Crie o email com os componentes desejados
        String email = "lyon" + String.format("%02d", randomNumber1) + String.format("%02d", randomNumber2) + "@teste.com";

        return email;
    }

    private String gerarLetrasMinusculasAleatorias(int comprimento) {
        SecureRandom random = new SecureRandom();
        StringBuilder letras = new StringBuilder();
        for (int i = 0; i < comprimento; i++) {
            letras.append((char) (random.nextInt(26) + 'a'));
        }
        return letras.toString();
    }

    private void embaralharArray(char[] array) {
        SecureRandom random = new SecureRandom();
        for (int i = array.length - 1; i > 0; i--) {
            int indice = random.nextInt(i + 1);
            char temp = array[indice];
            array[indice] = array[i];
            array[i] = temp;
        }
    }

    public String minhaSenha() {
        SecureRandom random = new SecureRandom();

        // Gerar uma letra maiúscula aleatória
        String letraMaiuscula = String.valueOf((char) (random.nextInt(26) + 'A'));

        // Gerar dois dígitos numéricos aleatórios
        String numeros = String.valueOf(random.nextInt(10)) + random.nextInt(10);

        // Gerar até quatro letras minúsculas aleatórias
        String letrasMinusculas = gerarLetrasMinusculasAleatorias(random.nextInt(5));

        // Combinar os componentes para formar a senha
        String senha = letraMaiuscula + numeros + letrasMinusculas;
        char[] arraySenha = senha.toCharArray();
        embaralharArray(arraySenha);

        return new String(arraySenha);
    }
}