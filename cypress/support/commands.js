/// Comando configurado para o teste no arquivo 2CAC-TAT.spec.js

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() { 

    cy.get('#firstName').type('Ana')
    cy.get('#lastName').type('Filho')
    cy.get('#email').type('teste@teste.com')
    cy.get('#phone').type('1169696969')
    cy.get('#open-text-area').type('Se possível gostaria de conversar mais sobre a vaga, aguardo seu contato')
    cy.contains('button', 'Enviar').click()

    cy.get('.success').should('be.visible')
})

