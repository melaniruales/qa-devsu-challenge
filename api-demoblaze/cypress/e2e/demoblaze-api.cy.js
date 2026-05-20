describe('Demoblaze API Testing', () => {

    const username = `melani_${Date.now()}`
    const password = 'Test1234'

    it('Signup - create new user', () => {

        cy.request({
            method: 'POST',
            url: 'https://api.demoblaze.com/signup',
            body: {
                username: username,
                password: password
            },
            failOnStatusCode: false
        }).then((response) => {

            cy.log(JSON.stringify(response.body))

            expect(response.status).to.eq(200)
        })
    })

    it('Signup - existing user', () => {

        cy.request({
            method: 'POST',
            url: 'https://api.demoblaze.com/signup',
            body: {
                username: username,
                password: password
            },
            failOnStatusCode: false
        })

        cy.request({
            method: 'POST',
            url: 'https://api.demoblaze.com/signup',
            body: {
                username: username,
                password: password
            },
            failOnStatusCode: false
        }).then((response) => {

            cy.log(JSON.stringify(response.body))

            expect(response.body.errorMessage)
                .to.contain('This user already exist')
        })
    })

    it('Login - correct credentials', () => {

        cy.request({
            method: 'POST',
            url: 'https://api.demoblaze.com/login',
            body: {
                username: username,
                password: password
            },
            failOnStatusCode: false
        }).then((response) => {

            cy.log(JSON.stringify(response.body))

            expect(response.status).to.eq(200)
        })
    })

    it('Login - incorrect credentials', () => {

        cy.request({
            method: 'POST',
            url: 'https://api.demoblaze.com/login',
            body: {
                username: username,
                password: 'wrongpassword'
            },
            failOnStatusCode: false
        }).then((response) => {

            cy.log(JSON.stringify(response.body))

            expect(response.body.errorMessage)
                .to.contain('Wrong password')
        })
    })

})