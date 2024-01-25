describe('My Second test suite', () => {
  it('My First test Case', () => {

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    cy.get('.product:visible').should('have.length', 4)
    //parent child chaining
    cy.get('.products').as('productsLocator')
    cy.get('@productsLocator').find('.product').should('have.length', 4)
    cy.get('@productsLocator').find('.product').eq(1).contains('ADD TO CART').click()
    cy.get('@productsLocator').find('.product').each(($el, index, $list)=>{
      const textVeg = $el.find('h4.product-name').text()
      if (textVeg.includes('Cashews')){
        cy.wrap($el).find('button').click()
      }
    })
    cy.get('.brand').should('have.text', 'GREENKART')
    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click()

  })
})