/// <reference types="cypress" />

describe('use_effect_when_takes_place', () => {

  beforeEach(() => {
    // This is not specific to the test, but Main.js will be
    // requesting this after a certain task, so it might break
    // the test if we don't mock it
    cy.intercept('GET', '**/api/v1/dashboards', { fixture: 'dashboardsList.json' })
    
    cy.visit('http://localhost:3000/simpleExamples')
  })
  
  it('issue12 examples page has correct initial title', () => {
    cy.title()
    .should('be.equals', 'Estado: 0');
  })

})

