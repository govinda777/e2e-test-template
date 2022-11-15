/// <reference types="Cypress" />

import BasePage from "./basePage";

const url = Cypress.config("baseUrl");
const profiles = require('../../fixtures/profiles.json');

export class LoginPage extends BasePage {

  userNameInput = '[name="username"]';
  passwordInput = '[name="password"]';
  enterButton = '[type="submit"]';

  open() {
    cy.visit(url);
  }

  doLogin(profile) {


    const loginData = profiles[profile];

    this.fillInput(this.userNameInput, loginData.userName);
    this.fillInput(this.passwordInput, loginData.password);
    this.click(this.enterButton);

  }

  
}
