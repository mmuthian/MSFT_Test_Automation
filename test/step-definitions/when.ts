import { Given, When, Then } from '@wdio/cucumber-framework';
import dashboardPage from '../pageobjects/dashboard.page.ts';


const pages = {
    dashboard: dashboardPage
}

// When(/^I login with (\w+) and (.+)$/, async (username, password) => {
//     await LoginPage.login(username, password)
// });

When(/^I click the element with ID (\w+)$/, async (elementId: string) => {
    const element = $(`#${elementId}`);
    await element.click();
});

When(/^I select the (\d+) option from the dropdown with ID (\w+)$/, async (option: string, id: string) => {
    const dropdown = await $(`select#${id}`);
    await dropdown.selectByAttribute('value', option);
});

When(/^I select the checkbox with ID "([^"]*)"$/, async (id: string) => {
    const checkbox = await $(`#${id}`);
    await checkbox.click();
});
