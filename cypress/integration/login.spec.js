describe('My First Test', () => {
    it('Visit the login page', () => {
      cy.visit('http://localhost:8080/connexion')

      cy.get('.loginForm-Element').first().click().type('renaud@gmail.com')
      cy.get('.loginForm-Element').first().next().click().type('renaud')
      cy.get('button.login-form-button').click()
    })
  })