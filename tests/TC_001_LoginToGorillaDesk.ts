// login.test.ts
import { test } from '@playwright/test';
import LoginPageActions from '../pages/LoginPage/LoginPageActions'; // Adjust path as needed

test('Login with valid credentials', async ({ page }) => {
  const loginActions = new LoginPageActions(new LoginPageElements(), page); // Create elements and page instance
  await loginActions.login('auto_des_5306_annualtest_a_700@yopmail.com', 'Aa12345');
  // Assert on successful login or redirect to a different page
});
