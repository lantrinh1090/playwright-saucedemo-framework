import {Page} from '@playwright/test'
export class carts{
constructor(private page: Page){}
continueshoppingbtn='#continue-shopping';
checkoutbtn='#checkout';
 removeCart='#remove-sauce-labs-backpack';
async continueshopping()
{
    await this.page.click(this.continueshoppingbtn);

}
async checkout()
{
     await this.page.click(this.checkoutbtn);

}
async remove()
{
    await this.page.click(this.removeCart);

}

}