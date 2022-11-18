/// <reference types="cypress" />
describe('test registrer account', () => {

    beforeEach(() => {
        cy.login()
    })
    it('create account', () => {

        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(1) > a').click()
        cy.get('#nome').type('Test1')
        cy.get('.btn').click()

    })

    it('update account', () => {

        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(2) > a').click()
        cy.get('[href*="/editarConta?"] > .glyphicon').click()
        cy.get('#nome').clear()
        cy.get('#nome').type('Test2')
        cy.get('.btn').click()
    })
    it('Delete account', () => {
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(2) > a').click()
        cy.get('[href*="/removerConta?"] > .glyphicon').click()
        cy.get('.alert').should('be.visible')
    })

})