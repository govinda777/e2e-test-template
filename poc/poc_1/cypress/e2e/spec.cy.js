describe('Teste livre', () => {
    it('passes', () => {
      cy.visit('https://www.homolog.backoffice.poc.tech/')
      cy.get('div[class*="sc-AxhCb"]').should('be.visible').should('have.text', 'poc')
      cy.get('input[name="username"]').type('paolo@poc.tech')
      cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Paolo@1122')
      cy.get('#demo-simple-select').click()
      cy.get('[data-value="BACKOFFICE"]').click()
      cy.get('.MuiButton-label').click()
      cy.get('.sc-AxhUy')
      


    })})