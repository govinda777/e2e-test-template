/// <reference types="Cypress" />

class BasePage {
    
    fillInput(element, content) {
        cy.get(element).type(content);
    }

    click(element) {
        cy.get(element).click({force: true});
    }

    clicByText(texto) {
        cy.contains(texto).click();
    }

    contemTexto(texto) {
        cy.contains(texto);
    }
  
}

export default BasePage;
