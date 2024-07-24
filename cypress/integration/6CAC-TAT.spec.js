///Cypress._.times()
///_.times() serve para você executar uma função de callback um certo número de vezes, onde o número de vezes é o primeiro argumento, e a função de callback é o segundo.

Cypress._.times(5, function(){

it('20. _.times() testa uma função de callback um certo número de vezes, onde o número de vezes é o primeiro argumento, e a função de callback é o segundo', function() {
  cy.visit('./src/privacy.html')

  cy.contains('Talking About Testing').should('be.visible')
})
})