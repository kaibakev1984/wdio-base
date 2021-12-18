## Pasos para crear proyecto WebdriverIO
1. `mkdir starter-wdio`
2. `cd starter-wdio`
3. `npm init`
    a. package name: starter-wdio
    b. description: UI Test automation framework based on WebdrierIO
    c. keywords: wdio cucumber gherkin typescript
4. `npm init wdio` .
    a. Where is your automation backend located?: On my local machine
    b. Which framework do you want to use?: cucumber
    c. Do you want to use a compiler?: TypeScript
    d. Where are your feature files located?: (./features/**/*.feature)
    e. Where are your step definitions located? (./features/step-definitions/steps.ts)
    f. Do you want WebdriverIO to autogenerate some test files?: Y
    g. Do you want to use page objects?: Y
    h. Where are your page objects located?: (./features/pageobjects/**/*.ts)
    i. Which reporter do you want to use: spec, junit, allure
    j. Do you want to add a service to your test setup?: chromedriver

