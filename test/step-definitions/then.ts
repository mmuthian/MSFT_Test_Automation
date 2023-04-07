import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, assert} from "chai";
import dashboardPage from '../pageobjects/element.page.js';
import path from 'path';
import moment from 'moment';

const pages = {
    dashboard: dashboardPage
}


Then(/^the (\w+) dropdown value should be (\d+)$/, async (id: string, option: string) => {
    const dropdown = await $(`select#${id}`);
    const selectedOption = await dropdown.getValue();
    await browser.pause(2000); // pause for 2 seconds
    expect(parseInt(selectedOption)).to.equal(parseInt(option));
});

Then(/^I should see an element containing the text (\d+)$/, async (text: string) => {
    const element = await $('//div[contains(text(),\'' + text + '\')]');
    await element.waitForDisplayed();
    const elementText = await element.getText();
    await browser.pause(2000);
    assert.strictEqual(elementText.includes(text), true);
  });

  Then(/^the checkbox with id "([^"]*)" should be (checked|unchecked)$/, async (id: string, shouldBeChecked: 'checked' | 'unchecked') => {
    const checkbox = await $(`#${id}`);
    const isChecked = await checkbox.isSelected();
    if (shouldBeChecked === 'checked') {
      expect(isChecked).to.be.true;
      await browser.pause(2000);
    } else {
      expect(isChecked).to.be.false;
      await browser.pause(2000);
    }
  });

  Then(/^I should see an element containing the text "([^"]*)"$/, async (text: string) => {
    const element = await $('//th[contains(text(),\'' + text + '\')]');
    await element.waitForDisplayed();
    const elementText = await element.getText();
    await browser.pause(2000);
    assert.strictEqual(elementText.includes(text), true);
    await takeScreenshot('Element with Text: ' + text);
  });

  async function takeScreenshot(message) {
    const timestamp = moment().format('YYYYMMDD-HHmmss.SSS');
    fs.ensureDirSync('reports/html-reports/screenshots/');
    const filepath = path.join('reports/html-reports/screenshots/', timestamp + '.png');
    this.browser.saveScreenshot(filepath);
    this.logMessage(message) ;
    process.emit('test:screenshot', filepath);
    return this;
}


  
  Then(/^I should see an URL containing the text "([^"]*)"$/, async (text: string) => {
    const elementUrl = await browser.getUrl();
    await browser.pause(2000);
    assert.strictEqual(elementUrl.includes(text), true);
  });


  