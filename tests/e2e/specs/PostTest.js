describe('Post Test Feature', () => {
    it('Logged user can access to page post and view the post list', () => {
        cy.visit('/posts')
        cy.url().should('eq', 'http://localhost:8081/posts')
        cy.contains('h1', 'Post List')
        cy.contains('td','Vel animi totam sint ab.')
    })
    it('Logged user can access to detail post view', () => {
        cy.visit('/posts')
        cy.contains('Show').first().click()
        cy.url().should('eq', 'http://localhost:8081/posts/1')
        cy.contains('td', 'Molestiae reiciendis impedit quis at atque voluptatem enim possimus.')
    })
    it('Logged user can go back from detail post view', () => {
        cy.visit('/posts/1')
        cy.contains('Volver Atras').click()
        cy.url().should('eq', 'http://localhost:8081/posts')
    })
})