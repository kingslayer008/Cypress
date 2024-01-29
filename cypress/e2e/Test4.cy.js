describe('My Second test suite', () => {
  it('My First test Case', () => {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    cy.get('#alertbtn').click()
    cy.get('[value="Confirm"]').click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })

    cy.on('window:confirm', (str) => {
      expect(str).to.equal('Hello , Are you sure want to confirm?')
    })

  })
})