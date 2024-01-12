# Realizar uma compra no site Amazon

O arquivo ``casoTeste.doc`` tem os casos de testes para um fluxo de compras

___

Para executar os testes automatizados, é necessario ter instalado e configurado o Cypress.
- https://www.cypress.io/
___

Via interface do cypreess, só rodar o ``npx cypress open`` e irá abrir uma página e após escolher a opção ``E2E Testing``, terá acesso ao ``comprarProduto.cy.js``   prontos para ser executado

Em modo headlesse, só rodar o comando ``npx cypress run --spec ".\cypress\e2e\compraProduto.cy.js" --reporter mochawesome``

___ 

Configurar o ``env`` dentro de ``cypress.config.js``
