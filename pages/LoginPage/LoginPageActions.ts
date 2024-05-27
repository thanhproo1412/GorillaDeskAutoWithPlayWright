// LoginPageActions.ts
import { Page, expect } from '@playwright/test';
import LoginPageElements from './LoginPageElements'; // Import the elements
import CalendarPageElements from '../CalendarPage/CalendarPageElements'; // Import the elements



export default class LoginPageActions {
    private readonly loginPage: LoginPageElements;
    private readonly calendarPage: CalendarPageElements;
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPageElements(page);
        this.calendarPage = new CalendarPageElements(page);
    }

    async login(username: string, password: string): Promise<void> {
        await this.loginPage.usernameInput.fill(username);
        await this.loginPage.passwordInput.fill(password);
        await this.loginPage.submitButton.click();

        // **Wait for the homepage to load (replace with a more specific selector)**
        await expect(this.calendarPage.calendarTitle).toBeVisible({timeout:5*60*1000}); // Example assertion
        // 2. (Optional) Consider additional strategies for robustness:
        await this.page.waitForLoadState();
        //   page.waitForTimeout(5000)` (timeout for safety)  // Adjust timeout as needed

    }


    // ... other action methods using the injected elements and page
}

