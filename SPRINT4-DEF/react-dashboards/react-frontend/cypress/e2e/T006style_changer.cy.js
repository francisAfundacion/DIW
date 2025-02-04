/// <reference types="cypress" />

describe('style_changer', () => {

  beforeEach(() => {
    // This is not specific to the test, but Main.js will be
    // requesting this after a certain task, so it might break
    // the test if we don't mock it
    cy.intercept('GET', '**/api/v1/dashboards', { fixture: 'dashboardsList.json' })
    
    cy.visit('http://localhost:3000/simpleExamples')
  })

  it('issue6 div exists and h1 is appropriate', () => {
      cy.get('div[data-cy=issue6div]')
      .find('h1')
      .should('have.text', 'Ejercicio 6');
  })
  
  it('issue6 div contains a p with valid text', () => {
      cy.get('div[data-cy=issue6div]')
      .find('p[data-cy=issue6text]')
      .should('have.text', 'Los peces son parte del reino animal');
  })

  it('issue6 div contains a button with valid text', () => {
    cy.get('div[data-cy=issue6div]')
    .find('button[data-cy=issue6button]')
    .should('have.text', 'Cambiar estilo');
  })

  it('issue6 div button changes font weight appropriately 1 time', () => {
    cy.get('div[data-cy=issue6div]')
    .find('p[data-cy=issue6text]')
    .first()
    .then(($p) => {
      const oldFontWeight = $p.css('font-weight');

      cy.get('div[data-cy=issue6div]')
      .find('button[data-cy=issue6button]')
      .click();
      
      cy.get('p[data-cy=issue6text]').first().should('have.not.css', 'font-weight', oldFontWeight);
    })
  })

  
  it('issue6 div button changes font weight appropriately 2 times', () => {
    cy.get('div[data-cy=issue6div]')
    .find('p[data-cy=issue6text]')
    .first()
    .then(($p) => {
      const oldFontWeight = $p.css('font-weight');

      cy.get('div[data-cy=issue6div]')
      .find('button[data-cy=issue6button]')
      .click();
      
      cy.get('p[data-cy=issue6text]').first().should('have.not.css', 'font-weight', oldFontWeight);
    })

    cy.get('div[data-cy=issue6div]')
    .find('p[data-cy=issue6text]')
    .first()
    .then(($p) => {
      const oldFontWeight = $p.css('font-weight');

      cy.get('div[data-cy=issue6div]')
      .find('button[data-cy=issue6button]')
      .click();
      
      cy.get('p[data-cy=issue6text]').first().should('have.not.css', 'font-weight', oldFontWeight);
    })
  })

  
  it('issue6 div button changes font weight appropriately 3 times', () => {
    cy.get('div[data-cy=issue6div]')
    .find('p[data-cy=issue6text]')
    .first()
    .then(($p) => {
      const oldFontWeight = $p.css('font-weight');

      cy.get('div[data-cy=issue6div]')
      .find('button[data-cy=issue6button]')
      .click();
      
      cy.get('p[data-cy=issue6text]').first().should('have.not.css', 'font-weight', oldFontWeight);
    })

    cy.get('div[data-cy=issue6div]')
    .find('p[data-cy=issue6text]')
    .first()
    .then(($p) => {
      const oldFontWeight = $p.css('font-weight');

      cy.get('div[data-cy=issue6div]')
      .find('button[data-cy=issue6button]')
      .click();
      
      cy.get('p[data-cy=issue6text]').first().should('have.not.css', 'font-weight', oldFontWeight);
    })

    cy.get('div[data-cy=issue6div]')
    .find('p[data-cy=issue6text]')
    .first()
    .then(($p) => {
      const oldFontWeight = $p.css('font-weight');

      cy.get('div[data-cy=issue6div]')
      .find('button[data-cy=issue6button]')
      .click();
      
      cy.get('p[data-cy=issue6text]').first().should('have.not.css', 'font-weight', oldFontWeight);
    })
  })
})


