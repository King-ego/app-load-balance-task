/*
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
*/

describe("HomePage", () => {
  it("click and navigate to login page", () => {
    cy.visit("/")

    cy.contains("Login").click()

    cy.url().should("include", "/auth/login")

    cy.get("mat-toolbar").contains("button", "Home").click()
    cy.url().should("include", "/home")
  })

  it("should click pages and navigate to pages page", () => {
    cy.visit("/")

    cy.contains("Criar Conta").click()

    cy.url().should("include", "/auth/register")

    cy.get("mat-toolbar").contains("button", "Home").click()
    cy.url().should("include", "/home")
  })
})
