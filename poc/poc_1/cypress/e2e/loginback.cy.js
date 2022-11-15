describe('empty spec', () => {
  it('passes', () => { 
    cy.request('POST','https://homolog.api.poc.tech/api/v1/identity-providers/COOPERATIVE/authentications/', 
    {username: 'jean.minzon+jmcom1@brainweb.com.br', password: 'Comercial@123'}
    
    ).then((response) => {
      return new Promise(resolve => {        
       //  expect(response).property('access_token').to.equal(200)
          expect(response.body).property('access_token').to.not.be.oneOf([null, ""])
          const respBody = response.body;
            resolve(respBody)
      })
  })})
})