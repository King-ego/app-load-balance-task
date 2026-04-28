describe('Acesso à área member com mock de sessão', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/auth/me', {
      statusCode: 200,
      body: {
        id: '1',
        username: 'mock-member',
        email: 'member@email.com',
        role: 'MEMBER',
        companyId: '1',
        points: 100
      }
    }).as('me')

    cy.intercept('POST', '**/auth/login', {
      statusCode: 200,
      body: {
        user: {
          id: '1',
          username: 'mock-member',
          email: 'member@email.com',
          role: 'MEMBER',
          companyId: '1',
          points: 100
        }
      }
    }).as('login')
  })

  it('deve acessar /member com role mockado', () => {
    cy.visit('/member')
    cy.wait('@me')
    cy.url().should('include', '/member')
  })
})
