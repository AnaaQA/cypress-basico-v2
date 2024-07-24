///Desafio encontre o gatinho escondido 

describe('Central de Atendimento ao Cliente TAT', function() {
    this.beforeEach(function(){
        cy.visit('./src/index.html')
    })
    it('24.Encontra o gato escondido', function() {
        cy.get('#cat')
            .invoke('show')
            .should('be.visible')
        cy.get('#title')
        .invoke('text','CAT TAT ANA')
        cy.get('#subtitle')
        .invoke('text','Eu 💛 gatos 😻 e cachorros 🐶!')
          })
    })
