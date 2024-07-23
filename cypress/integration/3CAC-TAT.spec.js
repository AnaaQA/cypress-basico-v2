///Abrindo a página de política de privacidade 

it('Testa a página da política de privacidade de forma independente', function() {
  cy.visit('./src/privacy.html')

  cy.contains('Talking About Testing').should('be.visible')
})
