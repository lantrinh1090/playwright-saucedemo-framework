import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import users  from '../TestData/Logindata.json';
test.describe('Login', () => {

  test('Login successfully', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.open();

    await loginPage.login(
      users.standardUser.username,
      users.standardUser.password
    );

    await expect(page).toHaveURL(/inventory.html/);

  });

  test('Login with invalid password', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.open();

    await loginPage.login(
      users.invalidUser.username,
      users.invalidUser.password
    );

    await expect(
      loginPage.errorMessage()
    ).toBeVisible();

  });

  test('Login with locked user', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.open();

    await loginPage.login(
      users.lockedUser.username,
      users.lockedUser.password
    );

    await expect(
      loginPage.errorMessage()
    ).toContainText('locked out');

  });

});