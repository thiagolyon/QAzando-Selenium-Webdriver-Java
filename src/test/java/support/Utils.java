package support;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import runner.RunCucumberTest;
import java.security.SecureRandom;
import java.util.Random;

public class Utils extends RunCucumberTest {

    public static String gerarEmailAleatorio() {

        // Gere dois números aleatórios entre 0 e 99
        Random random = new Random();
        int randomNumber1 = random.nextInt(100);
        int randomNumber2 = random.nextInt(100);

        // Crie o email com os componentes desejados
        String email = "lyon" + String.format("%02d", randomNumber1) + String.format("%02d", randomNumber2) + "@teste.com";

        return email;
    }

    private static String gerarLetrasMinusculasAleatorias(int comprimento) {
        SecureRandom random = new SecureRandom();
        StringBuilder letras = new StringBuilder();
        for (int i = 0; i < comprimento; i++) {
            letras.append((char) (random.nextInt(26) + 'a'));
        }
        return letras.toString();
    }

    private static void embaralharArray(char[] array) {
        SecureRandom random = new SecureRandom();
        for (int i = array.length - 1; i > 0; i--) {
            int indice = random.nextInt(i + 1);
            char temp = array[indice];
            array[indice] = array[i];
            array[i] = temp;
        }
    }

    public static String minhaSenha() {
        SecureRandom random = new SecureRandom();

        // Gerar uma letra maiúscula aleatória
        String letraMaiuscula = String.valueOf((char) (random.nextInt(26) + 'A'));

        // Gerar cinco letras minúsculas aleatórias
        String letrasMinusculas = gerarLetrasMinusculasAleatorias(5);

        // Gerar dois dígitos numéricos aleatórios
        String numeros = String.valueOf(random.nextInt(10)) + random.nextInt(10);

        // Combinar os componentes para formar a senha
        String senha = letraMaiuscula + letrasMinusculas + numeros;
        char[] arraySenha = senha.toCharArray();
        embaralharArray(arraySenha);

        return new String(arraySenha);
    }

    public static void scrollToElement(WebDriver driver, WebElement element) {
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", element);
    }

    public static void scrollAteOFinalDaPagina() throws InterruptedException {
        JavascriptExecutor jse = (JavascriptExecutor) getDriver();
        jse.executeScript("window.scrollTo(0, 10000)");
        Thread.sleep(1000);
    }

    public static void sleep(int milliseconds) {
        try {
            Thread.sleep(milliseconds);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}