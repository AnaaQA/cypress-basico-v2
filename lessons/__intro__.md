# Instalando Cypress

```markdown
O que você vai aprender

- Como instalar Cypress usando `npm`
- Como instalar Cypress fazendo download a partir do repositório
- Como versionar e rodar Cypress usando `package.json`
```

## Requisitos de sistema

### Sistema Operacional

Cypress é uma aplicação desktop instalada no seu computador.
A aplicação desktop suporta os seguintes sistemas operacionais:

- macOS 10.9 e superior (somente 64-bit)
- Linux Ubuntu 12.04 e superior, Fedora 21 e Debian 8 (somente 64-bit)
- Windows 7 e superior

### Node.js

Se você está utilizando `npm` para instalar o Cypress, nós suportamos:

- **Node.js** 12 ou 14 e superior

### Linux

Se você estiver usando Linux, você precisará das dependências necessárias
instaladas no seu sistema.

Nós também temos uma versão oficial [cypress/base](https://hub.docker.com/r/cypress/base/) em container docker com todas
as dependências necessárias instaladas.

#### Ubuntu/Debian

```bash
apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
```

#### CentOS

```bash
yum install -y xorg-x11-server-Xvfb gtk2-devel gtk3-devel libnotify-devel GConf2 nss libXScrnSaver alsa-lib
```

#### Docker 

Imagens do Docker com todas as dependências necessárias instaladas estão disponíveis em [cypress/base](https://github.com/cypress-io/cypress-docker-images)

Se você estiver executando seus projetos em *containers*, você vai querer Cypress no *container* com o processo Node.js.

```yaml
    ui:
        image: cypress/base:latest
        # se tiver como alvo uma versão node específica, use e.g.
        # image: cypress/base:14
```

`cypress/base` é um substituto para imagens [base do docker para node](https://hub.docker.com/_/node/).

## Instalando

### `npm install`

Instale o Cypress usando `npm`:

```shell
cd /caminho/do/projeto
```

```shell
npm install cypress --save-dev
```

Isto vai instalar o Cypress localmente como uma dependência de desenvolvimento em seu projeto.

> Certifique-se que você já rodou `npm init`, ou tenha o diretório
`node_modules`, ou o arquivo `package.json` no diretório raiz do seu projeto
para garantir que o cypress seja instalado no diretório correto.

[Vídeo de exemplo.](https://docs.cypress.io/img/snippets/installing-cli.mp4)

> Note que o pacote npm do cypress é um _wrapper_ que envolve o binário
do Cypress. A versão do pacote npm determina qual versão do binário
será baixado. A partir da versão 3.0, o binário é baixado como um diretório
de cache global para ser utilizado entre os projetos.

> Boa prática

[//]: <> (TODO - Adicionar link integração contínua)

> A abordagem recomendada é de instalar o Cypress usando o `npm`, pois: 
    - O Cypress é versionado como qualquer outra dependência.
    - Isto simplifica rodar o Cypress na [Integração Contínua](https://docs.cypress.io/guides/guides/continuous-integration.html).

### `yarn add`

Instalando o cypress usando o `yarn`:

```bash
cd /caminho/do/projeto
yarn add cypress --dev
```

## Download direto do repositório

Se você não estiver utilizando Node ou npm no seu projeto, ou você quer tentar
usar o Cypress rapidamente, você sempre poderá realizar o [download do Cypress
diretamente de nossa CDN](https://download.cypress.io/desktop). 

> A gravação de execuções para o Dashboard não é possível através do 
download direto. Este download tem somente a intenção de ser uma forma simples
de experimentar com o Cypress. Para gravar os testes no Dashboard, 
você precisará instalar o Cypress como uma depedência npm.

O download direto sempre trará a última versão disponível. 
Sua plataforma será identificada automaticamente.

Você pode descompactar manualmente e clicar duas vezes. O Cypress será 
executado sem precisar instalar nenhuma dependência.

[Vídeo de exemplo.](https://docs.cypress.io/img/snippets/installing-global.mp4)

<strong class="alert-header">Download direto para versões antigas</strong>

É possível baixar uma versão antiga do nosso CDN adicionando o sufixo ao URL com a versão desejada (ex.
[https://download.cypress.io/desktop/6.8.0](https://download.cypress.io/desktop/6.8.0)).

## Integração contínua

[//]: <> (TODO - Adicionar link integração contínua e imagem docker)

Por favor leia nossa documentação sobre 
[Integração Contínua](https://docs.cypress.io/guides/guides/continuous-integration.html) para ajudar na instalação do
Cypress na CI (Integração Contínua). Quando estiver rodando linux você precisará instalar algumas
[dependências de sistema](https://docs.cypress.io/guides/guides/continuous-integration.html#Dependencies)
ou você pode usar a nossa [imagem docker](https://docs.cypress.io/examples/examples/docker.html)
que possui tudo que você precisa.

## Abrindo o Cypress

Se você usou `npm` para instalação, o Cypress foi instalado
no diretório `./node_modules`, com seus binários executáveis accessíveis
em `./node_modules/.bin`.

Agora você pode abrir o Cypress do seu projeto principal de uma
das seguintes formas:

A forma longa com o caminho completo

```bash
./node_modules/.bin/cypress open
```

Ou com o atalho usando `npm bin`

```bash
$(npm bin)/cypress open
```

Ou usando o `npx`

Obs.: o [npx](https://www.npmjs.com/package/npx) é incluido no npm > v5.2,
ou pode ser instalado separadamente.

```bash
npx cypress open
```

Após um momento, o Cypress Test Runner será aberto.

## Trocando navegadores

O Cypress Test Runner tenta encontrar todos os navegadores compatíveis na
máquina do usuário. O campo de seleção suspenso para selecionar um navegador
diferente pode ser encontrado no topo lateral direito do Test Runner.

![cypress test runner ui](https://docs.cypress.io/img/guides/browser-list-dropdown.80de3be3.png)

[//]: <> (TODO - Adicionar link abrindo navegadores)

Leia [Abrindo navegadores](https://docs.cypress.io/guides/guides/launching-browsers.html) para mais informações
sobre como o Cypress controla um navegador real durante os testes
de ponta-a-ponta.

> Suporte entre navegadores

[//]: <> (TODO - Adicionar link entre navegadores)

> O Cypress atualmente suporta o Firefox e navegadores da família Chrome
(incluindo Edge e Electron). Para executar testes de maneira otimizada
nesses navegadores na integração contínua, confira as estratégias
demonstradas no [guia de teste entre navegadores](https://docs.cypress.io/guides/guides/cross-browser-testing.html).

## Adicionando scripts npm

Embora não haja nada de errado em escrever o caminho completo para o
executável do Cypress a cada momento, é muito mais fácil e claro adicionar
os comandos do Cypress ao campo de scripts em seu arquivo `package.json`.

```json
{
  "scripts": {
    "cypress:open": "cypress open"
  }
}
```

Agora você pode chamar o comando a partir da raiz do projeto, dessa forma:

```bash
npm run cypress:open
```

… e o Cypress irá abrir direto para você. 

## Ferramentas CLI (_Command Line Interface_)

Instalando Cypress pela `npm` você também pode acessar vários comandos CLI.

A partir da versão 0.20.0, o Cypress também é um `node_module` totalmente
preparado que você pode exigir em seus scripts do Node. 

[//]: <> (TODO - Adicionar link CLI)

Você pode [ler mais sobre CLI aqui.](https://docs.cypress.io/guides/guides/command-line.html)

## Avançado

## Variáveis de ambiente

[//]: <> (TODO - Adicionar links na tabela abaixo)

| Nome                            |                           Descrição                           |
|---------------------------------|:-------------------------------------------------------------:|
| `CYPRESS_INSTALL_BINARY`        |     [Destino do binário Cypress baixado e instalado](#cy)     |
| `CYPRESS_DOWNLOAD_MIRROR`       | [Baixa o binário Cypress através de um servidor espelho](#cy) |
| `CYPRESS_CACHE_FOLDER`          |     [Altera o caminho do cache binário do Cypress](#cy)      |
| `CYPRESS_RUN_BINARY`            |   [Caminho do binário do Cypress em tempo de execução](#cy)   |
| ~~CYPRESS_SKIP_BINARY_INSTALL~~ |                use `CYPRESS_INSTALL_BINARY=0`                 |
| ~~CYPRESS_BINARY_VERSION~~      |                 use `CYPRESS_INSTALL_BINARY`                  |

## Instalar binário

Usando a variável de ambiente `CYPRESS_INSTALL_BINARY`, você pode controlar
como o Cypress é instalado. Para sobrescrever o que foi instalado,
você seta `CYPRESS_INSTALL_BINARY` junto com o comando `npm install`.

Isso é útil se você deseja:

- Instalar uma versão diferente do pacote npm padrão.

```bash
CYPRESS_INSTALL_BINARY=2.0.1 npm install cypress@2.0.3
```

Especificar uma URL externa (para contornar um firewall corporativo).

```bash
CYPRESS_INSTALL_BINARY=https://company.domain.com/cypress.zip npm install cypress
```

Especificar um arquivo para instalar localmente ao invés de usar pela internet.

```bash
CYPRESS_INSTALL_BINARY=/local/path/to/cypress.zip npm install cypress
```

Em todos os casos, o fato do binário ter sido instalado a partir de um local
personalizado não é salvo no arquivo `package.json`. Cada instalação repetida
precisa usar a mesma variável de ambiente para instalar o mesmo binário.

## Pulando a instalação

Você também pode forçar o Cypress a pular a instalação da aplicação binária
definindo `CYPRESS_INSTALL_BINARY = 0`. Isso pode ser útil se você quiser
evitar que o Cypress baixe o binário do Cypress no momento da instalação
do `npm install`.

```bash
CYPRESS_INSTALL_BINARY=0 npm install
```

Agora o Cypress irá pular as etapas de instalação já que o módulo `npm`
está instalado.

## Cache binário

A partir da versão 3.0, o Cypress baixa o seu binário correspondente para
o cache do sistema global, para que o binário possa ser compartilhado
entre projetos. Por padrão, as pastas de cache globais são:

- MacOS: ~/Library/Caches/Cypress
- Linux: ~/.cache/Cypress
- Windows: /AppData/Local/Cypress/Cache

Para sobrescrever a pasta de cache padrão, defina a variável
de ambiente `CYPRESS_CACHE_FOLDER`.

```bash
CYPRESS_CACHE_FOLDER=~/Desktop/cypress_cache npm install

CYPRESS_CACHE_FOLDER=~/Desktop/cypress_cache npm run test
```

Cypress substituirá automaticamente o `~` pelo diretório inicial do usuário.
Portanto, você pode passar `CYPRESS_CACHE_FOLDER` como uma string de arquivos
de configuração CI, por exemplo:

```yml
environment:
  CYPRESS_CACHE_FOLDER: '~/.cache/Cypress'
```

[//]: <> (TODO - Adicionar links na integração contínua - caching)

Veja mais a seção
[Integração Contínua - Caching](https://docs.cypress.io/guides/guides/continuous-integration.html#Caching) na documentação.

> `CYPRESS_CACHE_FOLDER` precisará existir toda vez que o Cypress for aberto.
Para garantir isso, considere exportar essa variável de ambiente.
Por exemplo, em um `.bash_profile` (MacOS, Linux),
ou usando `RegEdit` (Windows).

## Rodar binário

Setando a variável de ambiente `CYPRESS_RUN_BINARY` sobrescreverá onde o módulo
npm procura pelo binário do Cypress.

`CYPRESS_RUN_BINARY` deve ser um caminho para o executável binário
já descompactado. Os comandos Cypress abertos, executados e verificados
iniciarão o binário fornecido.

### Mac

```bash
CYPRESS_RUN_BINARY=~/Downloads/Cypress.app/Contents/MacOS/Cypress cypress run
```

### Linux

```bash
CYPRESS_RUN_BINARY=~/Downloads/Cypress/Cypress cypress run
```

### Windows

```bash
CYPRESS_RUN_BINARY=~/Downloads/Cypress/Cypress.exe cypress run
```
    
> Recomendamos não exportar a variável de ambiente `CYPRESS_RUN_BINARY`,
uma vez que afetará todos os módulos Cypress instalados em seu
sistema de arquivos.

## Baixar URLs

Se você deseja baixar uma versão específica do Cypress para uma determinada
plataforma (Sistema Operacional), pode obtê-la em nosso CDN.

O URL do servidor de download é `https://download.cypress.io`.

Atualmente, temos os seguintes downloads disponíveis:

- Windows 64-bit (?platform=win32&arch=x64)
- Windows 32-bit (?platform=win32&arch=ia32, available since Cypress 3.3.0)
- Linux 64-bit (?platform=linux)
- macOS 64-bit (?platform=darwin)

Aqui estão os URLs de download disponíveis:

Veja <https://download.cypress.io/desktop.json> para todas plataformas disponíveis.

| Método |                 URL                 |                                   Descrição                                   |
|--------|:-----------------------------------:|:-----------------------------------------------------------------------------:|
| GET    |              /desktop               | Baixe o Cypress na versão mais recente (plataforma detectada automaticamente) |
| GET    |            /desktop.json            |        Retorna JSON contendo os destinos CDN mais recentes disponíveis        |
| GET    |     /desktop?platform=p&arch=a      |       Baixe o Cypress para uma plataforma e / ou arquitetura específica       |
| GET    |          /desktop/:version          |                  Baixa o Cypress com uma versão especificada                  |
| GET    | /desktop/:version?platform=p&arch=a | Baixa o Cypress com uma versão e plataforma e/ou arquitetura especificadas  |

Exemplo de download do Cypress 3.0.0 para Windows de 64-bits:

```markdown
https://download.cypress.io/desktop/3.0.0?platform=win32&arch=x64
```

## Espelhamento

Se você escolher espelhar todo o site de download do Cypress, pode especificar
`CYPRESS_DOWNLOAD_MIRROR` para definir a URL do servidor de download a partir
de <https://download.cypress.io> para seu próprio espelhamento.

Por exemplo:

```bash
CYPRESS_DOWNLOAD_MIRROR="https://www.example.com" cypress install
```

O Cypress tentará fazer o download de um binário com este formato:
<https://www.example.com/desktop/:version?platform=p>

## Optar por não enviar dados de exceção para Cypress

Quando uma exceção é lançada em relação ao Cypress, enviamos os dados da
exceção para <https://api.cypress.io>. Só usamos essas informações
para ajudar a desenvolver um produto melhor.

Se você quiser cancelar o envio de quaisquer dados de exceção para o Cypress,
você pode fazer isso definindo `CYPRESS_CRASH_REPORTS = 0` em suas variáveis
de ambiente do sistema.

## Desativar no Linux ou macOS

Para cancelar o envio de dados de exceção no Linux ou macOS, execute o
seguinte comando em um terminal antes de instalar o Cypress:

```bash
export CYPRESS_CRASH_REPORTS=0
```

Para tornar essas mudanças permanentes, você pode adicionar este comando ao
`~/.profile (~/.zsh_profile, ~/.bash_profile, etc.)` do seu shell para
executá-los em cada login.

## Desativar no Windows

Para cancelar o envio de dados de exceção no Windows, execute o seguinte
comando no prompt de comando antes de instalar o Cypress:

```bash
set CYPRESS_CRASH_REPORTS=0
```

Para realizar a mesma coisa no Powershell:

```bash
$env:CYPRESS_CRASH_REPORTS = "0"
```

Para salvar a variável `CYPRESS_CRASH_REPORTS` para uso em todos os
novos shells, use` setx`:

```bash
setx CYPRESS_CRASH_REPORTS 0
```

## Instalar versão pré-lançamento

Se você deseja instalar uma versão de pré-lançamento do Test Runner para testar
uma funcionalidade que ainda não foi lançada, veja como:

1. Abra a lista de commits para desenvolver no repo Cypress:  
<https://github.com/cypress-io/cypress/commits/develop>

2. Encontre o commit o qual você gostaria de instalar a versão de pré-lançamento.  
Clique no ícone de comentário (destacado em vermelho abaixo):

    ![comment link](https://docs.cypress.io/img/guides/install/develop-commit-comment-link.656c55d7.png)

3. Você deve ver vários comentários do usuário cypress-bot com instruções para instalar  
os pré-lançamentos do Cypress. Escolha aquele que corresponde ao seu sistema operacional e  
arquitetura de CPU, e siga as instruções para instalar o pré-lançamento.

Notas sobre pré-lançamentos:

- Os pré-lançamentos do Cypress só estão disponíveis por cerca de um mês após
serem construídos. Não confie que estes estejam disponíveis há mais de um mês.

- Se você já tem um pré-lançamento ou lançamento oficial instalado para uma
versão específica do Cypress, pode ser necessário rodar `cypress cache clear`
antes que o Cypress instale um pré-lançamento. Isso também se aplica à
instalação de um lançamento oficial sobre um pré-lançamento - se você tiver
um pré-lançamento do Cypress vX.Y.Z instalado, o lançamento oficial do
Cypress vX.Y.Z não será instalado até você limpar o cache do Cypress. 

[Voltar para o topo](#instalando-cypress)


# Testes automatizados com Cypress - Básico

👋 Seja bem-vindo(a)!

É muito bom tê-lo(a) aqui. Tenho certeza que você vai adorar este curso. ❤️

## O que você vai aprender

Durante o curso de testes automatizados com Cypress (básico), você vai aprender:

- Como configurar um projeto Cypress do zero
- Como visitar páginas locais e remotas
- Como lidar com os elementos mais comuns encontrados em aplicações web
- Como testar _upload_ de arquivos
- Como realizar as mais diversas verificações de resultados esperados
- Como criar comandos customizados
- Como lidar com links que abrem em outra aba do navegador
- Como rodar testes simulando as dimensões de um dispositivo móvel
- Como resolver os mesmos problemas de diferentes formas, conhecendo a [API do Cypress](https://docs.cypress.io/api/table-of-contents)
- Como executar os testes em um _pipeline_ de integração contínua sempre que mudanças ocorrerem no código da aplicação (ou dos testes)
- Como criar uma documentação mínima para seu projeto de testes automatizados

## Vamos começar?

Vá para a seção [estrutura do curso](./_course-structure_.md).

___

# Perguntas gerais

- O Cypress é gratuito e de código aberto?
- Quais sistemas operacionais o Cypress possui suporte?
- Vocês oferecem suporte a aplicativos mobile nativos?
- Como o Cypress é diferente da ferramenta de teste 'X'?

## O Cypress é gratuito e de código aberto?

O [Test Runner](https://docs.cypress.io/guides/core-concepts/test-runner "Test Runner") é gratuito para download e de código aberto (licença MIT). Seu uso é gratuito. Nosso serviço de [Dashboard](https://docs.cypress.io/guides/dashboard/introduction "Dashboard") é uma aplicação web que oferece diferentes planos de cobrança (incluindo um plano gratuito) para quando você deseja registrar suas execuções de teste no CI.

Por favor, consulte nossa [página de preços](https://www.cypress.io/pricing "página de preços") para mais detalhes.

## Quais sistemas operacionais o Cypress possui suporte?

Você pode[ instalar o Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress " instalar o Cypress") no Mac, Linux e Windows. Para obter informações adicionais, consulte nossos [requisitos de sistema](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements "requisitos de sistema").

## Vocês oferecem suporte a aplicativos mobile nativos?

O Cypress nunca poderá ser executado em um aplicativo mobile nativo, mas podemos testar algumas funcionalidades de navegadores da web mobile e testar aplicativos mobile que são desenvolvidos em um navegador, como com a estrutura [Ionic](https://ionicframework.com/ "Ionic") ou [React Expo](https://glebbahmutov.com/blog/testing-react-native-app-using-cypress/ "React Expo").

Atualmente você pode controlar o tamanho da janela de visualização (viewport) com o comando cy.viewport() para testar a aparência responsiva em um site ou aplicativo da web. Você também pode imitar certos comportamentos, como deslizar usando [comandos personalizados](https://docs.cypress.io/api/cypress-api/custom-commands "comandos personalizados").

Você pode ler sobre o [teste de aplicativos móveis com Ionic e Cypress](https://www.cypress.io/blog/2020/07/08/end-to-end-testing-mobile-apps-with-ionic-and-cypress/ "teste de aplicativos móveis com Ionic e Cypress") e ver como gerenciamos o teste de diferentes visualizações responsivas em uma [aplicação](https://github.com/cypress-io/cypress-realworld-app "aplicação").

## Como o Cypress é diferente da ferramenta de teste 'X'?

O Cypress Test Runner é um aplicativo / estrutura / serviço híbrido, tudo em um. Leva um pouco de outras ferramentas de teste, junta tudo e melhora. Como por exemplo:



### Mocha

Mocha é uma estrutura de teste para JavaScript (link aqui  Mocha). O [Mocha](http://mochajs.org/ "Mocha") fornece os métodos `it`, `describe`, `beforeEach`. O Cypress não é diferente do Mocha, ele realmente usa o Mocha por baixo dos panos. Todos os seus testes serão escritos em cima da interface `bdd` do Mocha.

### Karma

[Karma](http://karma-runner.github.io/ "Karma") é um executor de teste de unidade para JavaScript, funciona com [Jasmine](https://jasmine.github.io/ "Jasmine"), [Mocha](http://mochajs.org/ "Mocha") ou qualquer outra estrutura de teste de JavaScript.

Karma também observa seus arquivos JavaScript, recarrega automaticamente quando eles são alterados e também é sinaliza sobre a falha / aprovação de seus testes. Ele é executado a partir da linha de comando.

O Cypress essencialmente substitui o Karma porque já faz tudo isso e muito mais.

### Capybara

A ferramenta específica do Ruby que permite escrever testes de integração para sua aplicação web é o [Capybara](http://teamcapybara.github.io/capybara/ "Capybara"). No mundo Rails, esta é a ferramenta ideal para testar seu aplicativo. Ele usa o [Sauce Labs](https://saucelabs.com/ "Sauce Labs") (ou outro driver headless) para interagir com os navegadores. Sua API consiste em comandos que consultam os elementos DOM, executam ações do usuário, navegam, etc.

O Cypress essencialmente substitui a Capybara porque faz todas essas coisas e muito mais. A diferença é que em vez de testar seu aplicativo em um console sem interface gráfica do usuário, você verá seu aplicativo o tempo todo. Você nunca teria que fazer uma captura de tela para depurar porque todos os comandos fornecem instantaneamente o estado de sua aplicação enquanto são executados. Se qualquer comando falhar, você terá um erro legível explicando por que ele falhou. Não há "adivinhações" durante o debugging.

Frequentemente, o Capybara começa a não funcionar tão bem em aplicativos JavaScript complexos. Além disso, tentar aplicar TDD em sua aplicação é difícil. Você precisa escrever primeiro o código do aplicativo (e normalmente, atualizar manualmente o navegador após as alterações) até que ele funcione. A partir daí você escreve testes, mas perde todo o valor do TDD.


### Protractor

O uso do [Protractor](http://www.protractortest.org/ "Protractor") fornece uma ótima interface baseada em Promises no Selenium, o que torna menos complicado lidar com código assíncrono. O Protractor vem com todos os recursos do Capybara e, essencialmente, sofre dos mesmos problemas.

O Cypress substitui o Protractor porque faz todas essas coisas e muito mais. Uma diferença importante é que o Cypress permite que você escreva seus testes de unidade e testes de integração na mesma ferramenta, em vez de dividir este trabalho entre Karma e Protractor.

Além disso, o Protractor está muito focado no AngularJS, enquanto o Cypress foi projetado para funcionar com qualquer estrutura JavaScript. Protractor, por ser baseado em Selenium, ainda é muito lento e é proibitivo ao tentar aplicar TDD em seu aplicativo. O Cypress, por outro lado, é executado na velocidade que seu navegador e aplicativo são capazes de executar e renderizar; não há excessos adicionais.
