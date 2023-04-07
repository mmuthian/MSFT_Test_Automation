import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashboardPage extends Page {
    /**
     * define selectors using getter methods
     */
//click, Checkbox 
     public async getElementByID(id: string): Promise<WebdriverIO.Element> {
        return $(`${id}`);
      }
//dropdown
      public async getElementsByID(option: string, id: string): Promise<WebdriverIO.Element> {
        return $(`select#${id} option[value="${option}"]`);
      }

     public open () {
        return super.open();
    }
}
export default new DashboardPage();
