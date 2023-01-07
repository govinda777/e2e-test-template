describe('LOGIN', () => {
  it('passes', () => {
  cy.visit('https://www.homolog.backoffice.poc.tech/')
  cy.get('div[class*="sc-AxhCb"]').should('be.visible').should('have.text', 'poc')
  cy.get('input[name="username"]').type('')
  cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('')
  cy.get('.MuiButton-label').click()
  cy.get('.sc-Axmtr')
  }),
  it('Inserindo credenciais erradas', () => {
  cy.visit('https://www.homolog.backoffice.poc.tech/')
  cy.get('div[class*="sc-AxhCb"]').should('be.visible').should('have.text', 'poc')
  cy.get('input[name="username"]').type('')
  cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Comercial@124')
  cy.get('.MuiButton-label').click()
  cy.get('.MuiFormHelperText-root').should('be.visible').should('have.text', 'Usuário/senha inválido')
  }),
  it('Testando LOGIN com CPF com sucesso', () => {
  cy.visit('https://www.homolog.backoffice.poc.tech/')
  cy.get('div[class*="sc-AxhCb"]').should('be.visible').should('have.text', 'poc')
  cy.get('input[name="username"]').type('08164696013')
  cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('')
  cy.get('.MuiButton-label').click()
  })
})

