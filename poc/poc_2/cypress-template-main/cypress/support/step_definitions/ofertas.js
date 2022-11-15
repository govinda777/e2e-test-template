/* global Given, Then, When, And */

const { HomePage } = require("../pageobjects/homePage");
const { LoginPage } = require("../pageobjects/loginPage");
const { OfertasPage } = require("../pageobjects/ofertasPage");

const loginPage = new LoginPage();
const homePage = new HomePage();
const ofertasPage = new OfertasPage();

Given("acesso o portal poc_2", ()=> {
  loginPage.open();
});

Given("logo com perfil {string}", (profile) => {
  loginPage.doLogin(profile);
});

Given("acesso a funcionalidade {string}", (funcionalidade) => {
  homePage.acessaFuncionalide(funcionalidade);
});

Given("clico em {string}", (texto) => {
  texto.split(';').forEach(item => {
    ofertasPage.clicByText(item.trim());
  });
  
});

Given("preencho o campo {string} com {string}", (campo, valor) => {
  ofertasPage.preencheCampo(campo, valor);
});

Given("seleciono a carteira {string}", (carteira) => {
  ofertasPage.selecionaCarteira(carteira);
});

Then("a mensagem {string} deve ser mostrada", (mensagem) => {
  ofertasPage.contemTexto(mensagem);
});

