describe('My Second test suite', () => {
  it('My First test Case', () => {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    cy.get('#opentab').invoke('removeAttr', 'target').click()

    cy.origin("https://www.qaclickacademy.com", () => {
      cy.get("#navbarSupportedContent a[href*='about']").click()
      cy.get(".mt-50 h2").should('contain', 'QAClick Academy')
    })



  })

  it('Second Testcase', () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
      const text = $el.text()
      if(text.includes('Python'))
      {
          cy.get("tr td:nth-child(2)").eq(index).next().then((price)=>
          {
            const priceText = price.text()
            expect(priceText).to.equal('25')
          })
      }
    })
  })
})