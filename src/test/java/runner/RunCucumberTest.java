package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"json:target/reports/json/cucumberReport.json", "html:target/reports/html"},
        features = "src/test/resources/features",
        tags = {"@login-duplo"},
        glue = {"steps"}
)
public class RunCucumberTest extends RunBase {

    @AfterClass
    public static void stop() {
        driver.quit();
    }
}
