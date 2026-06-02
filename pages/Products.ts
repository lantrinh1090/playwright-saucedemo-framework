import {Page} from '@playwright/test';
export class Products {
    constructor(private page:Page){}
  ProductsTitle='.title';
   backpackAddBtn = '#add-to-cart-sauce-labs-backpack';

  shoppingCart = '.shopping_cart_link';
  removeCart='#remove-sauce-labs-backpack';

  async addBackpackToCart() {
    await this.page.click(this.backpackAddBtn);
  }

  async openCart() {
    await this.page.click(this.shoppingCart);
  }
 async RemoveCart() {
    await this.page.click(this.removeCart);
  }
        
    
}