import { test, expect } from '@playwright/test';
import {carts} from '../pages/cart';
import {LoginPage } from '../pages/LoginPage';
import user from '../TestData/Logindata.json';
import {Products } from '../pages/Products';

test.describe ('cart',()=>{
 test.beforeEach(async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.open();

    await loginPage.login(
      user.standardUser.username,
      user.standardUser.password
    );

  }); 

  test ('verify cart display',async({page})=>{
    const product= new Products(page);
    await product.openCart();
    await expect(page).toHaveURL(/cart.html/);
    await expect(page.locator('.title')).toHaveText('Your Cart');
  });

test ('continueshoping', async({page})=>{
    const cart= new carts(page);
    const product= new Products(page);
    await product.openCart();
    await cart.continueshopping();
    await expect(page).toHaveURL(/inventory.html/); 
});

test ('checkout', async({page})=>{
    const cart= new carts(page);
    const product= new Products(page);
    await product.openCart();
    await cart.checkout();
    await expect(page.locator('.title')).toHaveText('Checkout: Your Information');
});


});
