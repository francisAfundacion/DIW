/// <reference types="cypress" />

describe('three_is_more_than_one', () => {

    beforeEach(() => {
        // This is not specific to the test, but Main.js will be
        // requesting this after a certain task, so it might break
        // the test if we don't mock it
        cy.intercept('GET', '**/api/v1/dashboards', { fixture: 'dashboardsList.json' })
        
        cy.visit('http://localhost:3000/simpleExamples')
    })
  
    it('issue2 div exists', () => {
        cy.get('div');
    })
    
    it('issue2 - examples page contains appropriate header', () => {
        cy.get('div')
        .find('h2[data-cy=pageHeader]')
        .should('have.text', 'Otros ejemplos');
    })
})
