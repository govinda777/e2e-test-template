# e2e-test-template
Projeto de template para testes e2e utilizando, BDD e Cypress.

## Objetivo 

Template de projeto de testes utilizando o FW Cypress (https://www.cypress.io/)
onde mostre as boas práticas de desenvolvimento de testes e organização de casos de testes.

## CI / CD 

Esse projeto promove todo um estudo de boas práticas para a implementação de um Fluxo continuo de Deploys.

## Não é mágica , São os Testes Automatizados

A unica maneira de entregarmos rápido é termos a capacidade de validalos rápido.

Para isso que a Govinda Systems investe e implementa a cultuta de testes em 100% de seus projetos.

Validando rápido nossas falhas é que ganhamos eficiencia na entrega de valor aos nossos clientes.

## Sobre nos 

: )

## História :

Eu como investido da Govinda Systems
Quero uma forma agil de validar possiveis falhas no meu produto
Essa forma de validar 

Tem que : 

> Validar a minha aplicação em diferentes ambientes.
> Mostrar um template de processo de release 

* gestão de branch
* gestão de releases
* rastreabilidade de features
* gestão de entregas
* workflow de aprovações
* PR ou MR

## [_] - Critérios de aceite:

* [_] - Documentação

   > [_] - Como instalar
   > [_] - Como configurar o ambiente
   > [_] - Como executar

* Exemplos: 

Veja a pasta :

[_] - /poc

* [_] - Caso de test mostrando as funcionalidades básicas do Cypress.

        > [_] - Como manipular e acessar uma caixa de texto.
        > [_] - Como disparar eventos de usuário, como click.
        > [_] - Como manipular uma pop-up.
        > [_] - Como reapoveitar código.
        > [_] - Como o código está organizado

* [_] -Exemplo de código de como implementar um teste de login

Ex:

def "Find all farms status Não Vinculadas given have suggestion, not  have farm"() {
    given: "I not have farm."

    jdbcTemplate.update("DELETE FROM farm")

    and: "I have suggestion"
    def farmSuggesId = farmSuggestionService.create(buildCreateFarmSuggestionRequest())

    and: "farm status is NAO_VINCULADA"
    selecionar.botãologin()
    
    when: "I find farm."
    def result = farmSuggestionService.find(request)

    then: "The farm status is NAO_VINCULADA."
    !ObjectUtils.isEmpty(result.getFindFarmResponseList())
    result.getFindFarmResponseList()[0].getFarmSuggestionStatus() == FarmSuggestionStatus.NAO_VINCULADA
}


Esse template é a comunidade Open Source.

Mas se quiser me pagar um café ?

<BUY_ME_A_COFE>

Repositório: https://github.com/govinda777/e2e-test-template.git

...
