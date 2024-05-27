// CalendarPageElements.ts
import { expect, type Locator, type Page } from '@playwright/test';


export default class CalendarPageElements {
    readonly page: Page;
    readonly calendarTitle: Locator;
    // ... other elements on the login page

    constructor(page: Page) {
        this.calendarTitle = page.locator('p.nav__label.is-nav-items:text("Calendar")')// Targets span with class "txt-incorrect"
        // ... locators for other elements
    };
}

