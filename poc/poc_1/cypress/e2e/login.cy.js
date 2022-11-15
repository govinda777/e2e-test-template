const allUsers = require('../fixtures/login.json')

describe('Test case - Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  expect(allUsers, 'list of users').to.be.an('array')

  allUsers.forEach((user) => {
    context(`Login - ${user.testTitle}`, () => { 
      it(`Validate data login ${user.login}`, () => {
        cy.wrap(user).should('have.property', 'testTitle', user.testTitle)
        cy.wrap(user).should('have.property', 'login', user.login)
        cy.wrap(user).should('have.property', 'pass', user.pass)
        cy.wrap(user).should('have.property', 'success', user.success)
        
      })

      it(`${user.testTitle}`, () => {

        //arrange

        //act
        cy.get('input[name="username"]').type(user.login)
        cy.get('input[type="password"]').type(user.pass)
        cy.get('button').click()

        //assert
        if(user.success) {
          cy.url().should('include', '/ordersfixations')
        }

        if(!user.success) {
          cy.get('.MuiFormHelperText-root').should('be.visible').should('have.text', 'Usuário/senha inválido')
        }
        
      })
    })
  })

  


  

})