describe('question_li', () => {

  beforeEach(() => {
    cy.intercept('GET', '**/api/v1/dashboards', { fixture: 'dashboardsList.json' })
    cy.visit('http://localhost:3000/simpleExamples')
  })

  it('issue21 - examples page div has correct header', () => {
    cy.get('div[data-cy=issue21div]')
    .find('h1')
    .should('have.text', 'Ejercicio 21')
  })

  it('issue21 - examples page has correct initial message', () => {
    cy.get('div[data-cy=issue21div]')
    .find('p')
    .first()
    .should('have.text', 'Aquí se muestra un QuestionListItem de ejemplo')
  })

  it('issue21 - examples page questionlistitem has correct title, description and css', () => {
    cy.get('div[data-cy=issue21div]')
    .find('div')
    .first()
    .find('h3')
    .should('have.text', 'Title')
    
    cy.get('div[data-cy=issue21div]')
    .find('div')
    .first()
    .find('p')
    .should('have.text', 'Contenido mock');

    cy.get('div[data-cy=issue21div]')
    .find('div')
    .first()
    .should('have.css', 'margin', '13px')
    .should('have.css', 'padding', '5px')
    .should('have.css', 'background-color', 'rgb(240, 240, 240)')
    .should('have.css', 'text-align', 'center')
    .should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px 0px')
  })
})


