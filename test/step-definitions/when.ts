import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.ts';
import DashboardPage from '../pageobjects/dashboard.page.ts';
import SecurePage from '../pageobjects/secure.page.ts';
//import dashboardPage from '../pageobjects/dashboard.page.ts';

const pages = {
    login: LoginPage,
    dashboard: DashboardPage
}

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

When(/^I click the element with ID (\w+)$/, async (elementId: string) => {
    const element = $(`#${elementId}`);
    await element.click();
  });
  