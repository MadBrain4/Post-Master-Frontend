describe('Login Test Feature', () => {
    it('user can not access to protected routed if not logged in', () => {
        cy.visit('/dashboard')
        cy.url().should('eq', 'http://localhost:8081/login')
    })

    it('user with wrong credentials can not access', () => {
        cy.visit('/login')
        cy.get('#email').type('Josevld412@gmail.com')
        cy.get('#password').type('12345678')
        cy.get('#submit').click()
        cy.contains('li','Email or password is incorrect')
        cy.visit('/dashboard')
        cy.url().should('eq', 'http://localhost:8081/login')
    })

    it('user with correct credentials can access', () => {
        cy.visit('/login')
        cy.get('#email').type('melyssa16@example.org')
        cy.get('#password').type('password')
        cy.get('#submit').click()
        cy.url().should('eq', 'http://localhost:8081/dashboard')
    })
})