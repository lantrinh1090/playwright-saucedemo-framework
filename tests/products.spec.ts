import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { Products } from '../pages/Products';
import user from '../TestData/Logindata.json';

test.describe('Product', () => {

  test.beforeEach(async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.open();

    await loginPage.login(
      user.standardUser.username,
      user.standardUser.password
    );

  }); // <-- đóng beforeEach ở đây

  test('Verify product page display', async ({ page }) => {

    await expect(page).toHaveURL(/inventory.html/);

    await expect(
      page.locator('.title')
    ).toHaveText('Products');

  });

  test('Add product to cart', async ({ page }) => {

    const productPage = new Products(page);
    await productPage.addBackpackToCart();
    await expect(
      page.locator('.shopping_cart_badge')
    ).toHaveText('1');

  });

  test('Open cart after add product', async ({ page }) => {

    const productPage = new Products(page);
    await productPage.addBackpackToCart();
    await productPage.openCart();
    await expect(page).toHaveURL(/cart.html/);

  });

  test('Remove product from cart', async ({ page }) => {
      const productPage = new Products(page);
     await productPage.addBackpackToCart();
 //     await productPage.openCart();
      await productPage.RemoveCart();

    await expect(
      page.locator('.shopping_cart_badge')
    ).toHaveCount(0);

  });

});