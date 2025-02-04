describe('dashboards_length_in_examples', () => {

  beforeEach(() => {
    cy.intercept('GET', '**/api/v1/dashboards', { fixture: 'dashboardsList.json' })
    cy.visit('http://localhost:3000/simpleExamples')
  })

  it('issue17 - examples page div has correct header', () => {
    cy.get('div[data-cy=issue17div]')
    .find('h1')
    .should('have.text', 'Ejercicio 17')
  })

  it('issue17 - examples page has correct initial message', () => {
    cy.get('div[data-cy=issue17div]')
    .find('p')
    .should('have.text', 'Se han recuperado 0 dashboards')
    
  })

  it('issue17 - examples page has correct message after load', () => {
    cy.get('div[data-cy=issue17div]')
    .find('p')
    .should('have.text', 'Se han recuperado 5 dashboards');
  })
})
