/// <reference types="cypress" />
describe('Test E2E login sucess', () => {

  it('Login Sucess', () => {
    cy.login()
    cy.request('/')
        .should(function (response) {
           console.log(response)
            const { status, statusText, body} = response
            
            expect(status).to.equal(200)
            expect(statusText).to.equal('OK')
       })
     
       cy.get('.container').should('be.visible')
    

  })
})