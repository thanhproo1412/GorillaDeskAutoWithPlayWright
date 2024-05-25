// TC_001_LoginToGorillaDesk.ts
import { test } from '@playwright/test';
import LoginPageActions from '../pages/LoginPage/LoginPageActions';
import userData from '../testData/LoginData.json';



test('TC_001_LoginToGorillaDesk', async ({ page }) => {
  const loginPageActions = new LoginPageActions(page);

  // Navigate to the login page
  await page.goto('https://r2.gdesk.io/auth/login');

  // Call the login function with username and password
  await loginPageActions.login(userData.username, userData.password);

});
