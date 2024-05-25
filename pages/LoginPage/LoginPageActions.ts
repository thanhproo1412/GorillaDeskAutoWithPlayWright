// LoginPageActions.ts
import { Page, Locator } from '@playwright/test';
import LoginPageElements from './LoginPageElements'; // Import the elements


export default class LoginPageActions {
    private readonly elements: LoginPageElements;
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        this.elements = new LoginPageElements(page);
    }

    async login(username: string, password: string): Promise<void> {
        await this.elements.usernameInput.fill(username);
        await this.elements.passwordInput.fill(password);
        await this.elements.submitButton.click();
        await this.page.waitForNavigation({ waitUntil: "load" })
    }


    // ... other action methods using the injected elements and page
}

