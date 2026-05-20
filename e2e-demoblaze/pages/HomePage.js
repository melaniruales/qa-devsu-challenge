class HomePage {

    constructor(page) {
        this.page = page;
    }

    async openWebsite() {
        await this.page.goto('https://www.demoblaze.com/');
    }

    async selectProduct(productName) {
        await this.page.getByRole('link', { name: productName }).click();
    }

}

module.exports = HomePage;