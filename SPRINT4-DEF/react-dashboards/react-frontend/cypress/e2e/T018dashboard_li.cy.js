describe('dashboards_li', () => {

  beforeEach(() => {
    cy.intercept('GET', '**/api/v1/dashboards', { fixture: 'dashboardsList.json' })
    cy.visit('http://localhost:3000/simpleExamples')
  })

  it('issue18 - examples page div has correct header', () => {
    cy.get('div[data-cy=issue18div]')
    .find('h1')
    .should('have.text', 'Ejercicio 18')
  })

  it('issue18 - examples page has correct initial message', () => {
    cy.get('div[data-cy=issue18div]')
    .find('p')
    .first()
    .should('have.text', 'Aquí se muestra un DashboardListItem de ejemplo')
  })

  it('issue18 - examples page dashboardlistitem has correct title, description and css', () => {
    cy.get('div[data-cy=issue18div]')
    .find('div')
    .first()
    .find('h3')
    .should('have.text', 'Title')
    
    cy.get('div[data-cy=issue18div]')
    .find('div')
    .first()
    .find('p')
    .should('have.text', 'Contenido mock');

    cy.get('div[data-cy=issue18div]')
    .find('div')
    .first()
    .should('have.css', 'margin', '21px')
    .should('have.css', 'padding', '5px')
    .should('have.css', 'background-color', 'rgb(233, 240, 240)')
    .should('have.css', 'text-align', 'center')
    .should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px 0px')
  })
})
