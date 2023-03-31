
### WebdriverIO-v8 boilerplate code with Cucumber BDD

This repository contains a collection of sample webdriverIO-v8 (Selenium - Node.js/JavaScript) projects and libraries that demonstrate how to use the tool and develop automation script using the CucumberJS BDD framework. It uses the `chromedriver` NPM package that wraps the ChromeDriver for you. This service does not require a Selenium server, but uses ChromeDriver to communicate with the browser directly.

### Installation

This project is tested on **Node v18.0.0** and above.  While earlier versions of node may be compatible, but they have not been verified.

npm i

### Run Tests

Option 1: Local Environment `npm run test-local`.

Option 2: You can also run on `SauceLabs` or  `BrowserStack` or `LambdaTest` using `npm run test-sauce` or `npm run test-browserstack` or `npm run test-browserstack` or `npm run test-lambdatest`.

Option 3: Mobile Device. To execute tests on mobile device use : `npm run test-mobile`.

💡 Before running mobile tests, perform the requisite Appium setup. For hassle free `one click Appium setup on OSX` refer [appium-setup-made-easy-OSX](https://github.com/amiya-pattnaik/appium-setup-made-easy-OSX) or refer [Appium Docs](http://appium.io/getting-started.html?lang=en)


### Logs  

Complete set of execution `logs` will be generated during the run time and can be found in the parent folder location /logs.

### Reporters

WebdriverIO uses several different types of test reporters to communicate pass/failure.  

##### Allure

The Allure Reporter creates [Allure](https://docs.qameta.io/allure/) test reports which is an HTML generated website with all necessary information to debug your test results and take a look on error screenshots. Add allure to the reporters array in config file and define the output directory of the allure reports.  Please note, this has been added in wdio.shared.config.

To generate and view an Allure report inside your corp network or locally, run `npm run allure-report`. The Allure report is hosted on a `web server` and can be accessed through http://YourMachineIP:5050/ and also generated locally which can be found at `./allure-report/index.html`. A typical Allure report will look like this.
![ScreenShot](https://github.com/amiya-pattnaik/snapshots/blob/master/allure-report.png)


##### Dot

To use the dot reporter just add 'dot' to the reporters array in the config file. The dot reporter prints for each test spec a dot. If colors are enabled on your machine you will see three different colors for dots. Yellow dots mean that at least one browser has executed that spec. A green dot means all browser passed that spec and a red to means that at least one browser failed that spec. All config files have this turned on by default.


### Contribution

Create a fork of the project into your own repository. Make all your necessary changes and create a pull request with a description on what was added or removed and details explaining the changes in lines of code. If approved, project owners will merge it.

### History

Industry is moving towards Node.js / JavaScript, Angularjs, Full-Stack world. WebdriverIO, a JavaScript binding wrapper for Selenium Webdriver, was originated by Camilo Tapia's initial Selenium project called WebdriverJS, which was the first Webdriver project on NPM. In 2014, the project was renamed WebdriverIO later on. This repository is a pre-configured version of webdriverIO meant to jump-start the process of writing new test automation or adding test automation to existing node.js applications.


### Licensing

MIT
