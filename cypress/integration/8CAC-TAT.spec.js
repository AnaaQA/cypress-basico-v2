///Cypress._.repeat
///_.repeat() serve para repetir uma string um certo número de vezes, onde o primeiro argumento é a string a qual deseja-se repetir, e o segundo argumento quantas vezes tal string deve ser repetida

describe('Central de Atendimento ao Cliente TAT', function() {
    this.beforeEach(function(){
        cy.visit('./src/index.html')
    })
it('22.Preencher a area de texto usando invoke', function() {
    const longText = Cypress._.repeat('9876543210',20)
    cy.get('#open-text-area')
    .invoke('val',longText)
    .should('have.value', longText)

})
})