# Documentação do projeto

Um bom projeto de testes automatizados deve possuir um mínimo de documentação, para que quem está chegando, possa contribuir.

## Controle o "relógio" 🕐 do navegador com os comandos `cy.clock()` e `cy.tick()`

Com a funcinalidade [`cy.clock()`](https://on.cypress.io/clock), você pode "congelar" 🧊 o relógio do navegador.

## cy._.times

_.times() serve para você executar uma função de callback um certo número de vezes, onde o número de vezes é o primeiro argumento, e a função de callback é o segundo.

## Invoque atributos e métodos de elementos com o comando .invoke()

Vimos o invoke na aula Lidando com links que abrem em outra aba, para remover o atributo target de um elemento, evitando que quando clicado, a página não abra em outra aba.

Além disso, no conteúdo Como “simular” um CTRL+V com Cypress, demonstrei o uso do .invoke('val'), para definir o valor de um campo de texto, para quando precisamos digitar um texto longo e não queremos perder tempo.

Dois últimos usos do .invoke() que eu quero que você conheça são:

.invoke('show')
.invoke('hide')
Com o comando .invoke('show'), você pode forçar a exibição de um elemento HTML que esteja escondido, com um estilo display: none;, por exemplo.

E com o comando .invoke('hide'), você pode esconder um elemento que está sendo exibido.

## cy.request()

Um dos maiores "poderes" 🦸🏽‍♂️ do Cypress é a possibilidade de executar comandos à nível de rede.

Um destes comandos é o cy.request().

Com o comando cy.request(), você pode executar requisições HTTP à nível de rede, ganhando tempo no setup dos testes e focando no que interessa quando se trata de testar as coisas pela interface gráfica de usuário.

Se você quiser, você pode até mesmo usar o comando cy.request() para testar APIs REST.


Aqui vai uma lista da documentação:

- Uma breve descrição do que trata o projeto
- Pré-requisitos (tais como Node.js, npm, git, etc.)
- Passos para instalação das dependências
- Passos para rodar os testes
- Informação que for pertinente

# O que eu aprendi nesse curso!

Como configurar um projeto Cypress do zero ✔️

Como visitar páginas locais e remotas ✔️

Como lidar com elementos mais comuns encontrados em aplicações web✔️

Como testar upload de arquivos ✔️

Como realizar as mais diversas verificações de resultados esperados ✔️

Como criar comandos customizados ✔️

Como lidar com links que abrem em outra aba do navegador ✔️

Como rodar testes simulando as dimensões de um dispositivo móvel ✔️

Como resolver os mesmos problemas de diferentes formas, conhecendo a API do Cypress ✔️

Como executar os testes em um pipeline de integração contínua sempre que mudanças ocorrerem no código da aplicação (ou dos testes) ✔️

Como criar uma documentação para seu projeto de testes automatizados ✔️