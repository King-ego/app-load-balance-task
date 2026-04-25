describe('Home - lista de usuários', () => {
  it('exibe a lista de users usando intercept', () => {

    cy.intercept('GET', 'http://localhost:8099/users', {
      fixture: 'users.json'
    }).as('getUsers')

    cy.visit('/')

    cy.contains('Users: bob').should('exist')
    cy.contains('Users: alice').should('exist')
  })
})
