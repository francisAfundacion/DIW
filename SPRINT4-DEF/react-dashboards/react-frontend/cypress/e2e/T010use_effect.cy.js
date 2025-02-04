/// <reference types="cypress" />

describe('use_effect', () => {

  beforeEach(() => {
    // This is not specific to the test, but Main.js will be
    // requesting this after a certain task, so it might break
    // the test if we don't mock it
    cy.intercept('GET', '**/api/v1/dashboards', { fixture: 'dashboardsList.json' })
  })

  it('issue10 main page has correct title', () => {
    cy.visit("http://localhost:3000/")

    cy.title()
    .should('be.equals', 'Página 1');
  })
});
