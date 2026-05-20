QA DEVSU CHALLENGE

Author:
Melani Ruales

PROJECT STRUCTURE

1. e2e-demoblaze
Contains Playwright automated E2E tests using Page Object Model architecture.

2. api-demoblaze
Contains Cypress API automated tests.

TECHNOLOGIES USED

- Playwright
- Cypress
- JavaScript
- Node.js
- Git

E2E TEST EXECUTION

cd e2e-demoblaze

Run all tests:
npx playwright test

Run chromium only:
npx playwright test --project=chromium

API TEST EXECUTION

cd api-demoblaze

Run API tests:
npx cypress run --spec "cypress/e2e/demoblaze-api.cy.js"

IMPLEMENTED TESTS

E2E
- Add products to cart
- Validate products in cart
- Complete purchase
- Validate purchase confirmation

API
- Signup new user
- Signup existing user
- Login valid credentials
- Login invalid credentials

GOOD PRACTICES IMPLEMENTED

- Page Object Model
- JSON test data
- Assertions with expect
- Reusable methods
- Separation of responsibilities
- Clean project structure