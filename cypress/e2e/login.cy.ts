describe('Login Page', () => {
  it('should be insert date in inputs', () => {
    cy.visit('/auth/login')

    cy.get('#email_field').clear().type('john@gmail.com')
    cy.get('#password_field').clear().type('MinhaSenha@123')

    cy.get('#email_field').should('have.value', 'john@gmail.com')
    cy.get('#password_field').should('have.value', 'MinhaSenha@123')

  });
})
