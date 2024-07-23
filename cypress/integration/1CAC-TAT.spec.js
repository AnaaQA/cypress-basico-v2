/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    this.beforeEach(function(){
        cy.visit('./src/index.html')
    })
    it('Verifica o título da aplicação', function() {
        cy.title('be.equal','Central de Atendimento ao Cliente TAT')
    })

    it('1.Preencher os campos obrigatorios e enviar o formulário', function() {
        const longText ='Olá recrutador, tudo bem com você, espero que sim,Me chamo Ana, sou bacharel em Redes de computadores, atuo com teste e meios de pagamento a 12 anos, relatando e evidenciando a visão do usuário final.'
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
    })

    it('2.Exibe mensagem de ***ERRO*** ao submeter o formulário com um email com formatação inválida', function() {
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
        ///cy.get('.ERROR').should('be.visible') ***Cypress deve usar exatamente o mesmo seletor. Se você usar .ERROR e esse seletor não existir
    })

    it('3.Campo telefone continua vazio quando preenchido com valor *** NÃO -NÚMERIO*** ', function() {
        cy.get('#phone')
        .type('ANA MARIA')
        /// .should('have.value', '')  *** Asserção no Cypress que verifica se o elemento selecionado tem um valor vazio.
        .should('have.value', '')

    })

    it('4. Exibe mensagem de ***ERRO*** quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
        cy.get('#firstName').type('Ana')
        cy.get('#lastName').type('Filho')
        cy.get('#email').type('teste@teste.com')
        cy.get('#phone-checkbox').click() 
        ///Se o formulário que você está testando exige que certas opções sejam selecionadas para permitir o envio, marcar o checkbox é essencial. Por exemplo, se o checkbox de telefone precisa ser marcado para concordar com os termos de contato via telefone, o teste precisa clicar no checkbox para validar o comportamento do formulário.
        cy.get('#open-text-area').type('Teste')
        cy.contains('button','Enviar').click()
        cy.get('.error').should('be.visible')
      
      })

    it('5. Preenche e ***LIMPAR*** os campos nome, sobrenome, email e telefone', function() {
        cy.get('#firstName')
        .type('Ana')
        .should('have.value', 'Ana')
        .clear()
        .should('have.value', '')
        ///Verificação de Campos de Formulário: Garantir que um campo de formulário tenha sido preenchido corretamente.
        ///Validação de Pré-Preenchimento: Verificar se um campo que deve ser pré-preenchido tem o valor correto.
        ///Confirmação de Ações do Usuário: Garantir que um valor digitado por um usuário foi registrado corretamente

          
        cy.get('#email')
        .type('teste@teste.com')
        .should('have.value', 'teste@teste.com')
        .clear()
        .should('have.value', '') 
          
        cy.get('#phone') 
        .type('123456789')
        .should('have.value', '123456789')
        .clear()
        .should('have.value', '') 
      
        cy.get('#phone')
        .type('12345678911')  
        .clear()
        .should('have.value', '') 
      
        cy.get('#open-text-area')
        .type('teste')  
        .clear()
        .should('have.value', '')   
      })

    it('6. Exibe mensagem de ***ERROR*** ao submeter o formulário sem preencher os campos obrigatórios', function() {
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
  })

  it('8.1. Selecionar um produto (YouTube) por seu texto', function() {
    cy.get('#product').select('YouTube')
    .should('have.value', 'youtube')
  })
  
  it('8.2. Selecionar um produto (Mentoria) por seu valor', function() {
    cy.get('#product')
    .select('mentoria')
    .should('have.value', 'mentoria')
  })
  
  it('8.3. Selecionar um produto (Blog) por seu índice', function() {
    cy.get('#product')
    .select(1) 
    .should('have.value', 'blog')
  })
  
  it('9.1. ***MARCAR*** o tipo de atendimento', function() {
    cy.get('input[type="radio"]')
    .should('have.length',3)
    .each(function($radio){
      cy.wrap($radio).check()
      cy.wrap($radio).should('be.checked')
    })
  })

  it('10. Marcar ambos checkboxes, depois desmarcar o útimo checkbox', function() {
    cy.get('input[type="checkbox"]')
    .check()
    .should('be.checked')
    .last()
    .uncheck() 
    .should('not.be.checked')
  })

  it('11. Exibe mensagem de ***ERRO*** quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
    cy.get('#firstName').type('Ana')
    cy.get('#lastName').type('Filho')
    cy.get('#email').type('teste@teste.com')
    cy.get('#phone-checkbox').check() 
    cy.get('#open-text-area').type('Teste')
    cy.contains('button','Enviar').click()
    cy.get('.error').should('be.visible')
  })

  it('12. Selecionar um arquivo da pasta ***FIXTURES***', function() {
    cy.get('input[type="file"]')
    .should('not.have.value')
    .selectFile('./cypress/fixtures/example.json')
    .should(function($input){
      expect($input[0].files[0].name).to.equal('example.json')
    })
  })
  
  it('13. Selecionar um arquivo simulando ***DRAG-AND-DROP***', function() {
    cy.get('input[type="file"]')
    .should('not.have.value')
    .selectFile('./cypress/fixtures/example.json',{action: 'drag-drop'})
    .should(function($input){
      expect($input[0].files[0].name).to.equal('example.json')
    })
  })

  it('14. Selecionar um arquivo utilizando uma ***FIXTURES*** para a qual foi dada um alias ', function() {
    cy.fixture('example.json').as('sampleFile')
    cy.get('input[type="file"]')
      .selectFile('@sampleFile')
      .should(function($input){
        expect($input[0].files[0].name).to.equal('example.json')
      })
  })
  
  it('15. Verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function() {
    cy.get('#privacy a').click()
    ///NESSA VERSÃO CYPRESS NÃO CONSEGUE EXECUTAR TESTES NA NOVA ABA ABERTA QUANDO CLICAMOS EM POLITICA DE PROVACIDADE
  })

  it('15.1. Verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function() {
    cy.get('#privacy a').should('have.attr', 'target', '_blank')
  })
  
  it('16. Acessa a página da política de privacidade removendo o target e então clicando no link', function() {
    cy.get('#privacy a')
      .invoke('removeAttr', 'target')
      ///REMOVENDO A ***removeAttr', 'target*** CONSEGUIMOS ABRIR A PAGINA DE POLITICA DE PRIVACIDADE NA MESMA ABA QUE OS TESTE SÃO EXECUTADOS CONSEGUINDO FAZER NOVAS VALIDAÇÕES 
      .click()
      
    cy.contains('Talking About Testing').should('be.visible')  
  })
  


})
