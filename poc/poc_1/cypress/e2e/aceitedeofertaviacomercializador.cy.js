<<<<<<< HEAD
describe('Consumo de uma oferta  via Comercializador', () => {
=======
describe('Consumo  de   uma oferta via Comercializador', () => {
>>>>>>> 8eb75bce539c74948555f43c6d05531d74406b55
    it('passes', () => {

        cy.visit('https://www.homolog.backoffice.poc.tech/')
        cy.get('div[class*="sc-AxhCb"]').should('be.visible').should('have.text', 'poc')
        cy.get('input[name="username"]').type('jean.minzon+jmcom1@brainweb.com.br')
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Comercial@124')
        cy.get('#orders-tab-0 > .MuiTab-wrapper').click()
        cy.get('.MuiTableRow-hover > :nth-child(1) > div > .MuiButtonBase-root > .MuiButton-label > .MuiSvgIcon-root').click()
        cy.get('div > .MuiListItem-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path').click()
        cy.get('.MuiButton-label').click()
        cy.get('.sc-fzqBkg > .MuiButtonBase-root > .MuiButton-label').click()
    })})
