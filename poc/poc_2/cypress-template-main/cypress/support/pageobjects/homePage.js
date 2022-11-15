/// <reference types="Cypress" />

import BasePage from "./basePage";

export class HomePage extends BasePage {

  menuButton = '[aria-label="menu"]';


  acessaFuncionalide(funcionalidade) {

    this.click(this.menuButton);
    cy.contains(funcionalidade).click();

  }

  
}
