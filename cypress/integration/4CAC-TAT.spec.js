///Comandos cy.clock() e cy.tick() 
describe('Central de Atendimento ao Cliente TAT', function() {
    const THEREE_SECONDS_IN_MS = 3000
    this.beforeEach(function(){
        cy.visit('./src/index.html')
    })
    it('Verifica o título da aplicação', function() {
        cy.title('be.equal','Central de Atendimento ao Cliente TAT')
    })
it('18.Comandos cy.clock() e cy.tick() Preencher os campos obrigatorios e enviar o formulário', function() {
    const longText ='Olá recrutador, tudo bem com você, espero que sim,Me chamo Ana, sou bacharel em Redes de computadores, atuo com teste e meios de pagamento a 12 anos, relatando e evidenciando a visão do usuário final.'
    cy.clock ()

    cy.get('#firstName').type('Ana')
    cy.get('#lastName').type('Filho')
    cy.get('#email').type('teste@teste.com')
    cy.get('#phone').type('1169696969')
    cy.get('#open-text-area').type(longText, {delay:0})
    cy.contains('button','Enviar').click()
    ///Localização pelo Texto: Esta linha localiza um elemento <button> que contém o texto "Enviar".
    ///Flexibilidade: É útil quando você quer encontrar um botão com base no texto visível para o usuário. Isso pode ser útil em casos onde o tipo do botão (submit, button, etc.) não é consistente ou onde o texto é o critério mais importante.
    ///Uso Comum: Usado frequentemente em testes onde a identificação do botão pelo texto é suficiente e desejável.

    cy.get('.success').should('be.visible')
    cy.tick(THEREE_SECONDS_IN_MS)
    cy.get('.success').should('not.be.visible')
})

it('18.1.Comandos cy.clock() e cy.tick() Exibe mensagem de ***ERRO*** ao submeter o formulário com um email com formatação inválida', function() {
    cy.clock ()

    cy.get('#firstName').type('Ana')
    cy.get('#lastName').type('Filho')
    cy.get('#email').type('teste,teste.com')
    cy.get('#phone').type('1169696969')
    cy.get('#open-text-area').type('Atuo com teste mobile a três anos, possuo certificação como QA a um ano, entre outros cursos como banco de dados, conseguindo executar e criar as querys e recentemente iniciei um novo curso como dev front end com JavaScript')
    cy.get('button[type="submit"]').click()
    ///Localização pelo Tipo de Atributo: Esta linha localiza um elemento <button> com o atributo type definido como submit.
    ///Precisão: É mais preciso se você quer garantir que está clicando especificamente no botão de envio do formulário.
    ///Resistência a Mudanças de Texto: O teste não será afetado se o texto do botão mudar, desde que o tipo do botão permaneça como submit.

    cy.get('.error').should('be.visible')
    cy.tick(THEREE_SECONDS_IN_MS)
    ///cy.get('.ERROR').should('be.visible') ***Cypress deve usar exatamente o mesmo seletor. Se você usar .ERROR e esse seletor não existir
})

it('18.2.Comandos cy.clock() e cy.tick() Exibe mensagem de ***ERRO*** quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
    cy.clock ()

    cy.get('#firstName').type('Ana')
    cy.get('#lastName').type('Filho')
    cy.get('#email').type('teste@teste.com')
    cy.get('#phone-checkbox').click() 
    ///Se o formulário que você está testando exige que certas opções sejam selecionadas para permitir o envio, marcar o checkbox é essencial. Por exemplo, se o checkbox de telefone precisa ser marcado para concordar com os termos de contato via telefone, o teste precisa clicar no checkbox para validar o comportamento do formulário.
    cy.get('#open-text-area').type('Teste')
    cy.contains('button','Enviar').click()
    cy.get('.error').should('be.visible')

    cy.tick(THEREE_SECONDS_IN_MS)
    cy.get('.success').should('not.be.visible')
  
  })

  it('18.3.Comandos cy.clock() e cy.tick() Exibe mensagem de ***ERROR*** ao submeter o formulário sem preencher os campos obrigatórios', function() {
    cy.clock ()

    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')

    cy.tick(THEREE_SECONDS_IN_MS)
    cy.get('.success').should('not.be.visible')
})

})