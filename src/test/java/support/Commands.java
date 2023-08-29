package support;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import runner.RunCucumberTest;

public class Commands extends RunCucumberTest {

    public static void waitElement(By element, Integer time) {
        WebDriverWait wait = new WebDriverWait(getDriver(), time);
        wait.until(ExpectedConditions.elementToBeClickable(element));
    }


    public static void clickElement(By element) {
        System.out.println("####################");
        try {
            System.out.println("Vai clicar no elemento: " + element);
            waitElement(element, 5000);
            getDriver().findElement(element).click();
            System.out.println("Clicou no elemento: " + element);
        } catch (Exception error) {
            System.out.println("********** Aconteceu um erro ao tentar clicar no elemento: " + element);
            new Exception(error);
        }
        System.out.println("####################");
    }
}
