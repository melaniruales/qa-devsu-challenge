class ProductPage {

    constructor(page) {
        this.page = page;
    }

    async addProductToCart() {

        const dialogPromise = this.page.waitForEvent('dialog');

        await this.page.getByRole('link', {
            name: 'Add to cart',
            exact: true
        }).click();

        const dialog = await dialogPromise;
        await dialog.accept();

    }

    async goHome() {

        await this.page.getByRole('link', {
            name: 'PRODUCT STORE'
        }).click();

    }

}

module.exports = ProductPage;