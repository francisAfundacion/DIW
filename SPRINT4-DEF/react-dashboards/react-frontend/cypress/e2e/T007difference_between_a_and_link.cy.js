/// <reference types="cypress" />

describe('difference_between_a_and_link', () => {

  beforeEach(() => {
    // This is not specific to the test, but Main.js will be
    // requesting this after a certain task, so it might break
    // the test if we don't mock it
    cy.intercept('GET', '**/api/v1/dashboards', { fixture: 'dashboardsList.json' })
  })

  it('issue7 - main page content has footer with section 1 links and header', () => {
      cy.visit("http://localhost:3000")
      
      cy.get('footer')
      .find('div.footer-section')
      .first()
      .find('ul')
      .find('li')
      .should('have.length', 2);

      cy.get('footer')
      .find('div.footer-section')
      .first()
      .find('ul')
      .find('li')
      .first()
      .find('a')
      .should('have.text', 'Acerca de')
      .should('have.attr', 'href', '/about');

      cy.get('footer')
      .find('div.footer-section')
      .first()
      .find('ul')
      .find('li')
      .last()
      .find('a')
      .should('have.text', 'Ejemplos')
      .should('have.attr', 'href', '/simpleExamples');

      cy.get('footer')
      .find('div.footer-section')
      .first()
      .find('h3')
      .should('have.text', 'Enlaces Link');
  })

  it('issue7 - main page content has footer with section 1 links and header', () => {
    cy.visit("http://localhost:3000")
    
    cy.get('footer')
    .find('div.footer-section')
    .last()
    .find('ul')
    .find('li')
    .should('have.length', 2);

    cy.get('footer')
    .find('div.footer-section')
    .last()
    .find('ul')
    .find('li')
    .first()
    .find('a')
    .should('have.text', 'Acerca de')
    .should('have.attr', 'href', '/about');

    cy.get('footer')
    .find('div.footer-section')
    .last()
    .find('ul')
    .find('li')
    .last()
    .find('a')
    .should('have.text', 'Ejemplos')
    .should('have.attr', 'href', '/simpleExamples');

    cy.get('footer')
    .find('div.footer-section')
    .last()
    .find('h3')
    .should('have.text', 'Enlaces a href');
  })

  it('issue7 - main page footer has correct css', () => {
    cy.visit("http://localhost:3000")
  
    cy.get('footer')
    .should('have.css', 'padding', '21px')
   .should('have.css', 'background-color', 'rgb(210, 210, 210)')
    .should('have.css', 'color', 'rgb(90, 90, 233)')
   .should('have.css', 'overflow', 'auto');
  })

  it('issue7 - main page footer sections have correct css', () => {
    cy.visit("http://localhost:3000")
  
    cy.get('footer')
    .find('div.footer-section')
    .should('have.css', 'padding-left', '50px')
    .should('have.css', 'float', 'left');
  })

  it('issue7 - about page has correct return link', () => {
    cy.visit("http://localhost:3000/about")
  
    cy.get('h4[data-cy=issue7link]')
    .find('a')
    .should('have.text', 'Volver a principal')
    .should('have.attr', 'href', '/');
  })

  it('issue7 - examples page has correct return link', () => {
    cy.visit("http://localhost:3000/simpleExamples")
  
    cy.get('h4[data-cy=issue6link]')
    .find('a')
    .should('have.text', 'Volver a principal')
    .should('have.attr', 'href', '/');
  })
})
