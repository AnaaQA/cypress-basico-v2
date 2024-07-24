///Comandos customizados no arquivo Commands.js
///Comandos cy.clock() e cy.tick() 
describe('Central de Atendimento ao Cliente TAT', function() {
    const THEREE_SECONDS_IN_MS = 3000
    this.beforeEach(function(){
        cy.visit('./src/index.html')
    })
    it('Verifica o título da aplicação', function() {
        cy.title('be.equal','Central de Atendimento ao Cliente TAT')
    })
    it('19.Comandos cy.clock() e cy.tick() Envia o formuário com sucesso usando um comando customizado', function() {
        cy.clock ()

        cy.fillMandatoryFieldsAndSubmit()
        cy.get('.success').should('be.visible')

        cy.tick(THEREE_SECONDS_IN_MS)
        cy.get('.success').should('not.be.visible')
      })


})