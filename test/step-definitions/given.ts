import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.ts';
import DashboardPage from '../pageobjects/dashboard.page.ts';
import SecurePage from '../pageobjects/secure.page.ts';

const pages = {
    login: LoginPage,
    dashboard: DashboardPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});
