import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.ts';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashboardPage extends Page {
    /**
     * define selectors using getter methods
     */
     public async getElementByID(id: string): Promise<WebdriverIO.Element> {
        return $(`${id}`);
      }

      public async getElementsByID(option: string, id: string): Promise<WebdriverIO.Element> {
        return $(`select#${id} option[value="${option}"]`);
      }

    public get btnSubmit () {
        return $('button[type="submit"]');
    }
    
    public open () {
        return super.open();
    }
}
export default new DashboardPage();
