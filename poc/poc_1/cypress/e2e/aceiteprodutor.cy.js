describe('Consumir uma oferta via produtor', () => {
    it('passes', () => {
      cy.visit('https://www.homolog.backoffice.poc.tech/')
      cy.get('div[class*="sc-AxhCb"]').should('be.visible').should('have.text', 'poc')
      cy.get('input[name="username"]').type('613.810.200-20')
      cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('poc1234')
      cy.get('#demo-simple-select').click()
      cy.get('[data-value="PRODUCER"]').click()
      cy.get('.MuiButton-label').click()
      cy.get('.sc-AxhUy')
      cy.get('#orders-tab-0 > .MuiTab-wrapper').click()
      cy.get('div > :nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click()
      cy.get('.MuiButton-label').click()
      cy.get('.sc-fzqBkg > .MuiButtonBase-root > .MuiButton-label').click()
      
    })})