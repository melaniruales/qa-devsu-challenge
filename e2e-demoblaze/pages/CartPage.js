const { expect } = require('@playwright/test');

class CartPage {

    constructor(page) {
        this.page = page;
    }

    async openCart() {

        await this.page.getByRole('link', {
            name: 'Cart',
            exact: true
        }).click();

        await expect(this.page.locator('#tbodyid')).toBeVisible();

    }

    async validateProducts(product1, product2) {

        await expect(this.page.getByRole('cell', {
            name: product1,
            exact: true
        })).toBeVisible();

        await expect(this.page.getByRole('cell', {
            name: product2,
            exact: true
        })).toBeVisible();

    }

    async clickPlaceOrder() {

        await this.page.getByRole('button', {
            name: 'Place Order'
        }).click();

    }

}

module.exports = CartPage;