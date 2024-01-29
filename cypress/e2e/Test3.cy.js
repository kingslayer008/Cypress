describe('My Second test suite', () => {
  it('My First test Case', () => {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    // Check boxes
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    cy.get("input[type='checkbox']").check(['option2', 'option3'])

    //Static dropdowns

    cy.get('select').select('option2').should('have.value', 'option2')

    //Dynamic dropdowns

    cy.get('#autocomplete').type('Ind')
    cy.get('.ui-menu-item div').each(($el,index, $list) => {

      if($el.text() === 'India'){
        $el.click()
      }
    })

    cy.get('#autocomplete').should('have.value', 'India')

    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')

    //radio buttons

    cy.get('[value="radio2"]').check().should('be.checked')

  })
})