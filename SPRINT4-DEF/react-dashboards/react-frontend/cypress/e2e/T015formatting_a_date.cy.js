function approximatelyEqualsMod60(a, b) {
  // 1 second margin for the retrieval of timestamp according to the
  // test vs. what the page loads. I've found this to be enough
  return (a == b) || (a == ((b+1)%60)) || (a == ((b-1)%60))
}

describe('formatting_a_date', () => {

  beforeEach(() => {
    // This is not specific to the test, but Main.js will be
    // requesting this after a certain task, so it might break
    // the test if we don't mock it
    cy.intercept('GET', '**/api/v1/dashboards', { fixture: 'dashboardsList.json' })
    
    cy.visit('http://localhost:3000/simpleExamples')
  })

  it('issue15 - examples page div has correct header', () => {
    cy.get('div[data-cy=issue15div]')
    .find('h1')
    .should('have.text', 'Ejercicio 15')
  })
  
  it('issue15 - examples page timestamp checker has correct paragraph', () => {
    cy.get('div[data-cy=issue15div]')
    .find('div[data-cy=timestampChecker]')
    .find('p[data-cy=title]')
    .should('have.text', 'A continuación se muestra el timestamp según Akamai:')
  })

  it('issue15 - examples page timestamp checker has correctly formatted date', () => {
    cy.request('http://time.akamai.com').then(response => {
      cy.wait(2000)
      cy.get('div[data-cy=issue15div]')
      .find('div[data-cy=timestampChecker]')
      .find('p[data-cy=timestamp]')
      .first()
      .then(($p) => {
        const akamaiDate = new Date(parseInt(response.body) * 1000).toLocaleString().split(',')[0]
        const userDate = $p.text().split(',')[0]
        expect(akamaiDate === userDate)
      })
    })
  })

  it('issue15 - examples page timestamp checker has correctly formatted time', () => {
    cy.request('http://time.akamai.com').then(response => {
      cy.wait(2000)
      cy.get('div[data-cy=issue15div]')
      .find('div[data-cy=timestampChecker]')
      .find('p[data-cy=timestamp]')
      .first()
      .then(($p) => {
        const akamaiTimeArray = new Date(parseInt(response.body) * 1000).toLocaleString().split(',')[1].split(':')
        const userTimeArray = $p.text().split(',')[1].split(':')
        // Compare hour, minute and second with margin to fail by one (1), due to asynchronous retrieval
        expect(approximatelyEqualsMod60(akamaiTimeArray[0], userTimeArray[0]))
        expect(approximatelyEqualsMod60(akamaiTimeArray[1], userTimeArray[1]))
        expect(approximatelyEqualsMod60(akamaiTimeArray[2], userTimeArray[2]))
      })
    })
  })
})
