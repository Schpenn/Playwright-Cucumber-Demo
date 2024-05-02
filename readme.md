# Demo av Playwright med Cucumber

## Instalasjon:
Det forutsettes at man har Node installert allerede

Klon repoet og kjør ``` npm install ``` <br>
For å kjøre testene med Playwright, skriv ``` npx playwright test ``` <br>
For å kjøre testene med Cucumber, skriv ``` npm test ```


## Det beste fra to verdner:
Det beste med Cucumber er at det er lett å forstå for alle, selv om man ikke er god på å lese kode. Med Cucumber skrives tester med vanlig språk med såkalt Gherkin-syntax. Vi kan koble sammen disse vanlige setningene til kode, som så utfører det som beskrives.

Det beste med Playwright er at det enkelt kan brukes for å utføre handlingene i testene. Playwright interagerer med nettlesere og kan utføre handlinger som en bruker, med innebygget venting på at elementer lastes inn.

### Gherkin syntax:
   **Given** I am on the home page<br>
   **When** I click on the button<br>
   **Then** something should happen<br>

![alt text](image-1.png)

