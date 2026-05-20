const { test } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const ProductPage = require('../pages/ProductPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');

const checkoutData = require('../test-data/checkoutData.json');

test('Complete purchase flow in Demoblaze', async ({ page }) => {

    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await homePage.openWebsite();

    await homePage.selectProduct('Samsung galaxy s6');
    await productPage.addProductToCart();

    await productPage.goHome();

    await homePage.selectProduct('Nokia lumia 1520');
    await productPage.addProductToCart();

    await cartPage.openCart();

    await cartPage.validateProducts(
        'Samsung galaxy s6',
        'Nokia lumia 1520'
    );

    await cartPage.clickPlaceOrder();

    await checkoutPage.completePurchase(checkoutData);

    await checkoutPage.confirmPurchase();

    await checkoutPage.validateConfirmation();

    await page.screenshot({
        path: 'screenshots/final-purchase.png',
        fullPage: true
    });

});