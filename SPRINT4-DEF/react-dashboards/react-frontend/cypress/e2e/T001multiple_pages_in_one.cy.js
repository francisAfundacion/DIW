/// <reference types="cypress" />

describe('multiple_pages_in_one', () => {

    beforeEach(() => {
        // This is not specific to the test, but Main.js will be
        // requesting this after a certain task, so it might break
        // the test if we don't mock it
        cy.intercept('GET', '**/api/v1/dashboards', { fixture: 'dashboardsList.json' })
    })

    it('issue1 - main page content is correct', () => {
        cy.visit("http://localhost:3000")
        
        cy.get('h2[data-cy=pageHeader]')
        .should('have.text', 'Principal');
    })

    it('issue1 - about page content is correct', () => {
        cy.visit("http://localhost:3000/about")
        
        cy.get('h2[data-cy=pageHeader]')
        .should('have.text', 'Acerca de');
    })
})
