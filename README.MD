# Automatizador de Testes com Selenium WebDriver e Java

Este é um projeto de aperfeiçoamento das minhas técnicas como automatizador de testes utilizando Selenium WebDriver em conjunto com a linguagem Java. O foco principal é a automação de testes de um site específico: [https://automationpratice.com.br/](https://automationpratice.com.br/).

## Configuração do Projeto

### Pré-requisitos

Certifique-se de que você possui o seguinte software instalado em seu sistema:

- Java 8
- Maven

### Executando os Testes

Você pode executar os testes do projeto diretamente pelo terminal utilizando os seguintes comandos:

1. Para executar todos os testes:

mvn test -Dtest=**/*RunCucumberTest cluecumber-report:reporting

2. Para executar apenas os testes marcados com a tag @login:

mvn test -Dtest=**/*RunCucumberTest cluecumber-report:reporting -D"cucumber.options=--tags @login"


### Dependências Utilizadas

O projeto utiliza as seguintes dependências:

- **Cucumber JUnit:** Versão 1.2.5
- **Cucumber Java:** Versão 1.2.5
- **Selenium Java:** Versão 3.141.59
- **Cluecumber Report Plugin:** Versão 1.2.0
- **Maven Surefire Plugin:** Versão 3.0.0-M5

### Configuração do Build

O projeto utiliza o Apache Maven como sistema de build. Abaixo estão as principais configurações do arquivo `pom.xml`:

- Compilação Java: Utiliza o Java 8 como versão de compilação.
- Plugin do Cucumber Report: Gera relatórios após os testes de integração.
- Plugin do Surefire: Configuração para ignorar falhas nos testes.

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
 <!-- Detalhes do projeto -->

 <dependencies>
     <!-- Dependências utilizadas no projeto -->
 </dependencies>

 <build>
     <plugins>
         <!-- Plugins de build utilizados -->
     </plugins>
 </build>
 
</project>