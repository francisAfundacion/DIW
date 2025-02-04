describe('dashboards_list', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/api/v1/dashboards', { fixture: 'dashboardsList.json' })
    cy.visit('http://localhost:3000/')
  })

  it('issue20 - clicking works OK in element 1', () => {
    cy.wait(1000);
    cy.get('div[data-cy=dashboardsList]')
    .find('div')
    .first()
    .click()

    cy.url()
    .should('be.equal', 'http://localhost:3000/dashboards/1')
  })
  
  it('issue20 - clicking works OK in element 2', () => {
    cy.wait(1000);
    cy.get('div[data-cy=dashboardsList]')
    .find('div')
    .eq(1)
    .click()

    cy.url()
    .should('be.equal', 'http://localhost:3000/dashboards/2')
  })

  it('issue20 - clicking works OK in last element with unpredictable id', () => {
    cy.wait(1000);
    cy.get('div[data-cy=dashboardsList]')
    .find('div')
    .last()
    .click()

    cy.url()
    .should('be.equal', 'http://localhost:3000/dashboards/10')
  })
})
