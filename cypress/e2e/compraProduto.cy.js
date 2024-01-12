describe('Realizar uma compra no site Amazon' , () => {

  const username = Cypress.env('USERNAME');
  const password = Cypress.env('PASSWORD');

 it('Comprar produto diretamente', () => {
    //Acessar site
    cy.visit('amazon.com.br');
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    //Pesquisar produto
    cy.get('#twotabsearchtextbox').type('Livro Happy Potter')
    cy.get('#nav-search-submit-button').click()
    cy.contains('Harry Potter e a Câmara Secreta: 2').click()

    //Comprar agora
    cy.get('#buy-now-button').click()

    // login
    cy.get('#ap_email').type(username)
    cy.get('.a-button-inner > #continue').click()
    cy.get('#ap_password').type(password)
    cy.get('#signInSubmit').click()

    cy.get('h1').contains("Finalizar a compra (1 item)")
} )



  it('Adicionar produto - Carrinho', () => {
    //Acessar site
    cy.visit('amazon.com.br');
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    //Pesquisar produto
    cy.get('#twotabsearchtextbox').type('Livro Happy Potter')
    cy.get('#nav-search-submit-button').click()
    cy.contains('Harry Potter e a Câmara Secreta: 2').click()

    //Adicionar produto - Carrinho 
    cy.get('#add-to-cart-button').click()
    cy.get('#sw-atc-details-single-container').contains('Adicionado ao carrinho')

    //Finalizar compra - Carrinho 
    cy.get('#sc-buy-box-ptc-button > .a-button-inner > .a-button-input').click()
    
    //login
    cy.get('#ap_email').type(username)
    cy.get('.a-button-inner > #continue').click()
    cy.get('#ap_password').type(password)
    cy.get('#signInSubmit').click()
    
    cy.get('h1').contains("Finalizar a compra (1 item)")
  })

})