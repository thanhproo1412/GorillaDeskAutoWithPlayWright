// LoginPageElements.ts
import { expect, type Locator, type Page } from '@playwright/test';


export default class LoginPageElements {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly submitButton: Locator;
    readonly errorMessage: Locator;
    // ... other elements on the login page

    constructor(page: Page) {
        this.usernameInput = page.locator("input[data-label-field='username']");
        this.passwordInput = page.locator('input[data-label-field="password"]');
        this.submitButton = page.locator('div.gd-btn-getstarted >> text=Log in'); // Double arrows for containing text
        this.errorMessage = page.locator('span.txt-incorrect')// Targets span with class "txt-incorrect"
        // ... locators for other elements
    };
}

