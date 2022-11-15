/// <reference types="Cypress" />

import BasePage from "./basePage";

export class OfertasPage extends BasePage {

  formulario = {
    tipo: {
      tipoElemento: 'combobox',
      seletor: '[id="mui-component-select-type"]'
    },
    produto: {
      tipoElemento: 'combobox',
      seletor: '[id="mui-component-select-product_id"]'
    },
    modalidade: {
      tipoElemento: 'combobox',
      seletor: '[id="mui-component-select-modality_id"]'
    },
    preco: {
      tipoElemento: 'input',
      seletor: '(//input)[4]'
    },
    moeda: {
      tipoElemento: 'combobox',
      seletor: '[id="mui-component-select-currency_id"]'
    },
    medida: {
      tipoElemento: 'combobox',
      seletor: '[id="mui-component-select-unit_of_measurement_id"]'
    },
    volume_minimo: {
      tipoElemento: 'input',
      seletor: '(//input)[7]'
    },
    volume_maximo: {
      tipoElemento: 'input',
      seletor: '(//input)[8]'
    },
    safra: {
      tipoElemento: 'combobox',
      seletor: '[id="mui-component-select-harvest_id"]'
    },
    unidade: {
      tipoElemento: 'combobox',
      seletor: '[id="mui-component-select-delivery_place"]'
    },
    descricao: {
      tipoElemento: 'input',
      seletor: '//textarea[@name="description"]'
    },
    frete: {
      tipoElemento: 'combobox',
      seletor: '[id="mui-component-select-shipping"]'
    }

  }

  comboboxCarteira = '[id="mui-component-select-state"]';

  preencheCampo(campo, valor) {

    const elemento = this.formulario[campo];
    if (elemento.tipoElemento == 'combobox') {
      super.click(elemento.seletor);
      cy.get('li').contains(valor).click();
    }
    if (elemento.tipoElemento == 'input') {
      if (valor == 'textoAleatorio') {
        valor = (Math.random() + 1).toString(28).substring(2);
      }
      else if (valor == 'numeroAletorio') {
        valor = Math.floor(Math.random() * 65536).toString();
      }

      cy.xpath(elemento.seletor).type(valor);

    }
  }

  selecionaCarteira(carteira) {
    super.click(this.comboboxCarteira);
    super.clicByText(carteira);
  }

}
