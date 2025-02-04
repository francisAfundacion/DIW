/// <reference types="cypress" />

describe('color_looper', () => {

  beforeEach(() => {
    // This is not specific to the test, but Main.js will be
    // requesting this after a certain task, so it might break
    // the test if we don't mock it
    cy.intercept('GET', '**/api/v1/dashboards', { fixture: 'dashboardsList.json' })
    
    cy.visit('http://localhost:3000/simpleExamples')
  })

  it('issue5 div exists and h1 is appropriate', () => {
      cy.get('div[data-cy=issue5div]')
      .find('h1')
      .should('have.text', 'Ejercicio 5');
  })
  
  it('issue5 div contains a p with valid text', () => {
      cy.get('div[data-cy=issue5div]')
      .find('p[data-cy=issue5text]')
      .should('have.text', 'Ordenación por selección');
  })

  it('issue5 div contains a button with valid text', () => {
    cy.get('div[data-cy=issue5div]')
    .find('button[data-cy=issue5button]')
    .should('have.text', 'Otro color');
  })

  it('issue5 div button changes p color appropriately 1 time', () => {
    cy.get('div[data-cy=issue5div]')
    .find('button[data-cy=issue5button]')
    .click();

    cy.get('div[data-cy=issue5div]')
    .find('p[data-cy=issue5text]')
    .should('have.css', 'color', 'rgb(0, 168, 0)');
  })

  it('issue5 div button changes p color appropriately 2 times', () => {
    cy.get('div[data-cy=issue5div]')
    .find('button[data-cy=issue5button]')
    .click().click();

    cy.get('div[data-cy=issue5div]')
    .find('p[data-cy=issue5text]')
    .should('have.css', 'color', 'rgb(0, 0, 151)');
  })

  it('issue5 div button changes p color appropriately 3 times', () => {
    cy.get('div[data-cy=issue5div]')
    .find('button[data-cy=issue5button]')
    .click().click().click();

    cy.get('div[data-cy=issue5div]')
    .find('p[data-cy=issue5text]')
    .should('have.css', 'color', 'rgb(255, 255, 185)');
  })

  it('issue5 div button changes p color appropriately 4 times', () => {
    cy.get('div[data-cy=issue5div]')
    .find('button[data-cy=issue5button]')
    .click().click().click().click();

    cy.get('div[data-cy=issue5div]')
    .find('p[data-cy=issue5text]')
    .should('have.css', 'color', 'rgb(181, 0, 0)');
  })

  it('issue5 div button changes p color appropriately 5 times', () => {
    cy.get('div[data-cy=issue5div]')
    .find('button[data-cy=issue5button]')
    .click().click().click().click().click();

    cy.get('div[data-cy=issue5div]')
    .find('p[data-cy=issue5text]')
    .should('have.css', 'color', 'rgb(0, 168, 0)');
  })

  it('issue5 div button changes p color appropriately 10 times', () => {
    cy.get('div[data-cy=issue5div]')
    .find('button[data-cy=issue5button]')
    .click().click().click().click().click().click().click().click().click().click();

    cy.get('div[data-cy=issue5div]')
    .find('p[data-cy=issue5text]')
    .should('have.css', 'color', 'rgb(0, 0, 151)');
  })
})

