describe('the_answers_list_empty_list', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/api/v1/dashboards/3/questions/1', { fixture: 'question1.json' })
    cy.intercept('GET', '**/api/v1/dashboards/3/questions/2', { fixture: 'question2.json' })
  })

  it('issue24 - question 1 page has correct EMPTY p NO ANSWERS text', () => {
    cy.visit('http://localhost:3000/dashboards/3/questions/1')
    cy.wait(1000)

    cy.get('p[data-cy=noAnswers]')
    .should('have.text', '');
  })

  it('issue24 - question 2 page has correct p NO ANSWERS text', () => {
    cy.visit('http://localhost:3000/dashboards/3/questions/2')
    cy.wait(1000)

    cy.get('p[data-cy=noAnswers]')
    .should('have.text', '¡Vaya! No hay respuestas');
  })
})

