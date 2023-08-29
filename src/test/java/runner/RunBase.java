package runner;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.util.concurrent.TimeUnit;

public class RunBase {

   static WebDriver driver;

   public static WebDriver getDriver() {
      return driver;
   }

   public static WebDriver getDriver(String browser) {

      if(driver != null) {
         driver.quit();
      }

      switch (browser) {
         case "chrome":
            driver = new ChromeDriver();
            break;
         case "firefox":
            driver = new FirefoxDriver();
            break;
         default:
            throw new IllegalArgumentException("Navegador inválido, tente usar o Chrome ou o Firefox.");
      }

      if(driver != null) {
         driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
      }

      driver.manage().window().maximize();

      return driver;
   }
}
