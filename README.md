## Pasos para crear proyecto WebdriverIO
1. `mkdir starter-wdio`
2. `cd starter-wdio`
3. `npm init`
    - package name: starter-wdio
    - description: UI Test automation framework based on WebdrierIO
    - keywords: wdio cucumber gherkin typescript
4. `npm init wdio`

    - Where is your automation backend located?: On my local machine
    - Which framework do you want to use?: cucumber
    - Do you want to use a compiler?: TypeScript
    - Where are your feature files located?: (./features/**/*.feature)
    - Where are your step definitions located? (./features/step-definitions/steps.ts)
    - Do you want WebdriverIO to autogenerate some test files?: Y
    - Do you want to use page objects?: Y
    - Where are your page objects located?: (./features/pageobjects/**/*.ts)
    - Which reporter do you want to use: spec, junit, allure
    - Do you want to add a service to your test setup?: chromedriver


## Cheatsheet
Dentro de nuestro archivo `wdio.conf.ts`:
- **specs**: le decimos dónde está la ruta de nuestros _feature_ files
- **maxInstances**: cuántas pruebas en paralelo queremos correr
- **capabilities**: cuál es el nombre del browser, cuál es la plataforma, si es windows. Las características del browser, si es mobile, versión de android, la ruta de la APK, el __activity__, el __package__.
- **logLevel**: niveles de log.
- **baseUrl**: URL desde dónde ejecutamos las pruebas
- **waitforTimeout**: tiempo que el `await` va a esperar por un elemento.
- **connectionRetryCount**: cuántas veces va a reintentar (cuando hay problemas de conexión).
- **services**: los drivers que vamos a usar
- **reporters**: 
- **cucumberOpts**: se puede definir los steps definitions que pueden buscar a diferentes archivos

## Configurando hooks
Vamos a configurar el **afterStep** para que saque capturas al final de la ejecución para que luego de cada paso, tome una captura de pantalla. Solo tenemos que descomentar la acción y agregar lo siguiente:
```
afterStep: async function () {
    await browser.takeScreenshot();
}
```
## Utilitarios
### Rimraf
Para eliminar carpetas que no necesitamos en el proyecto. Ejecutamos por la consola:
```
npm i rimraf
```
En el archivo `package.json` agregamos en `"scripts"`:
```
"clean": "rimraf .tsbuild && rimraf allure-results && rimraf junit-results"
```

### Allure Report
#### Precondiciones
1. Instalar [allure-commandline](https://www.npmjs.com/package/allure-commandline).
2. Instalar Java 8 o superiores.

#### Agregando scripts
- Para leer los reportes que se generan con allure, agregamos en `"scripts"`:
```
"clean-report": "allure generate --clean ./allure-results"
```

- Para abrir los reportes en allure, agregamos en `"scripts"`:
```
"open-report": "allure open"
```

## Creando features
Para agilizar el trabajo, se recomienda modificar el nombre de la feature en el **spec** en **configs**. Podemos usar **Tidy Gherkin** para crear las steps defitions a partir de los steps en nuestra feature. Instalamos la extensión y accedemos desde `chrome//apps`.

1. Crear `feature` en nuestro directorio de features.
2. Ejecutar las pruebas para identificar los __steps__ fallidos.
3. Crear un archivo `*.steps.ts` con la siguiente definición de los pasos:
```javascript
import {Given, Then} from '@cucumber/cucumber'
// ...
```
4. Abrimos **Tidy Gherkin** y pegamos nuestros steps de `*.feature`.
5. Ejecutamos la extensión y lo pegamos en nuestro `*steps.ts`.
