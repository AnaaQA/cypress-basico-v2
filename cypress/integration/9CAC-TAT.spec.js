///cy.request()
///cy.request(), você pode executar requisições HTTP à nível de rede, ganhando tempo no setup dos testes e focando no que interessa quando se trata de testar as coisas pela interface gráfica de usuário

describe('Central de Atendimento ao Cliente TAT', function() {
    this.beforeEach(function(){
        cy.visit('./src/index.html')
    })
    it('23.Request, faz uma requisição HTTP', function() {
        cy.request('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
          .should(function(response) {
            const { status, statusText, body } = response
            expect(status).to.equal(200)
            expect(statusText).to.equal('OK')
            expect(body).to.include('CAC TAT')
          })
    })
})   