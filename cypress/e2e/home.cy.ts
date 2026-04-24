describe('Home - lista de usuários', () => {
  it('exibe a lista de users usando intercept', () => {

    cy.intercept('GET', 'http://localhost:8099/users', { fixture: 'users.json' }).as('getUsers')

    cy.visit('/')

    cy.wait('@getUsers')

    cy.contains('Users: alice').should('exist');
    cy.contains('Tasks: alice@example.com').should('exist');
    cy.contains('Points: 42').should('exist');

    cy.contains('Users: bob').should('exist');
    cy.contains('Tasks: bob@example.com').should('exist');
    cy.contains('Points: 10').should('exist');
  });
});
