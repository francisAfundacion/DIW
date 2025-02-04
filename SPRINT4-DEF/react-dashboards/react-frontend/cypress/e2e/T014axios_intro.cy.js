function approximatelyEquals(a, b) {
  // 1 second margin for the retrieval of timestamp according to the
  // test vs. what the page loads. I've found this to be enough
  return (a == b) || (a == b+1) || (a == b-1)
}

describe('axios_intro', () => {

  beforeEach(() => {
    // This is not specific to the test, but Main.js will be
    // requesting this after a certain task, so it might break
    // the test if we don't mock it
    cy.intercept('GET', '**/api/v1/dashboards', { fixture: 'dashboardsList.json' })
    
    cy.visit('http://localhost:3000/simpleExamples')
  })

  it('issue14 - examples page div has correct header', () => {
    cy.get('div[data-cy=issue14div]')
    .find('h1')
    .should('have.text', 'Ejercicio 14')
  })

  it('issue14 - examples page timestamp checker has correct paragraph', () => {
    cy.get('div[data-cy=issue14div]')
    .find('div[data-cy=timestampChecker]')
    .find('p[data-cy=title]')
    .should('have.text', 'A continuación se muestra el timestamp según Akamai:')
  })

  it('issue14 - examples page timestamp checker has correct timestamp', () => {
    cy.request('http://time.akamai.com').then(response => {
      cy.wait(2000)
      cy.get('div[data-cy=issue14div]')
      .find('div[data-cy=timestampChecker]')
      .find('p[data-cy=timestamp]')
      .first()
      .then(($p) => {
        expect(approximatelyEquals(parseInt($p.text()), parseInt(response.body)))
      })
    })
  })
})
