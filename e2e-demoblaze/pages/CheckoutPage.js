const { expect } = require('@playwright/test');

class CheckoutPage {

    constructor(page) {
        this.page = page;
    }

    async completePurchase(data) {

        await this.page.locator('#name').fill(data.name);
        await this.page.locator('#country').fill(data.country);
        await this.page.locator('#city').fill(data.city);
        await this.page.locator('#card').fill(data.card);
        await this.page.locator('#month').fill(data.month);
        await this.page.locator('#year').fill(data.year);

    }

    async confirmPurchase() {

        await this.page.getByRole('button', {
            name: 'Purchase'
        }).click();

    }

    async validateConfirmation() {

        await expect(this.page.locator('.sweet-alert'))
            .toContainText('Thank you for your purchase!');

    }

}

module.exports = CheckoutPage;