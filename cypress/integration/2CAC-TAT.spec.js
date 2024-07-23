///Comandos customizados no arquivo Commands.js

describe('Central de Atendimento ao Cliente TAT', function() {
    this.beforeEach(function(){
        cy.visit('./src/index.html')
    })
    it('Verifica o título da aplicação', function() {
        cy.title('be.equal','Central de Atendimento ao Cliente TAT')
    })
    it('7. Envia o formuário com sucesso usando um comando customizado', function() {
        cy.fillMandatoryFieldsAndSubmit()
        cy.get('.success').should('be.visible')
      })


})