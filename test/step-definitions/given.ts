import { Given, When, Then } from '@wdio/cucumber-framework';
import DashboardPage from '../pageobjects/dashboard.page.ts';


const pages = {

    dashboard: DashboardPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});
