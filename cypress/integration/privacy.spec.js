///Abrindo a página de política de privacidade 
///_.times() serve para você executar uma função de callback um certo número de vezes, onde o número de vezes é o primeiro argumento, e a função de callback é o segundo.


Cypress._.times(3, function(){
it('Testa a página da política de privacidade de forma independente', function() {
  cy.visit('./src/privacy.html')

  cy.contains('Talking About Testing').should('be.visible')
})
})