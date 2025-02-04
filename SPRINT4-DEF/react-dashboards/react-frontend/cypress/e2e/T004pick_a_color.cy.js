/// <reference types="cypress" />

describe('pick_a_color', () => {

  beforeEach(() => {
    // This is not specific to the test, but Main.js will be
    // requesting this after a certain task, so it might break
    // the test if we don't mock it
    cy.intercept('GET', '**/api/v1/dashboards', { fixture: 'dashboardsList.json' })
    
    cy.visit('http://localhost:3000/simpleExamples')
  })

  it('issue4 div exists and h1 is appropriate', () => {
      cy.get('div[data-cy=issue4div]')
      .find('h1')
      .should('have.text', 'Ejercicio 4');
  })
  
  it('issue4 div contains a div with valid width', () => {
      cy.get('div[data-cy=issue4div]')
      .find('div[data-cy=issue4color]')
      .should('have.css', 'width', '171px');
  })

  it('issue4 div contains a div with valid height', () => {
    cy.get('div[data-cy=issue4div]')
    .find('div[data-cy=issue4color]')
    .should('have.css', 'height', '126px');
  })

  it('issue4 div contains valid first button', () => {
    cy.get('div[data-cy=issue4div]')
    .find('button[data-cy=firstButton]')
    .should('have.text', 'Primer color');
  })

  it('issue4 div firstButton changes div color appropriately', () => {
    cy.get('div[data-cy=issue4div]')
    .find('button[data-cy=firstButton]')
    .click();

    cy.get('div[data-cy=issue4div]')
    .find('div[data-cy=issue4color]')
    .should('have.css', 'background-color', 'rgb(181, 0, 0)');
  })

  it('issue4 div contains valid second button', () => {
    cy.get('div[data-cy=issue4div]')
    .find('button[data-cy=secondButton]')
    .should('have.text', 'Segundo color');
  })

  it('issue4 div secondButton changes div color appropriately', () => {
    cy.get('div[data-cy=issue4div]')
    .find('button[data-cy=secondButton]')
    .click();

    cy.get('div[data-cy=issue4div]')
    .find('div[data-cy=issue4color]')
    .should('have.css', 'background-color', 'rgb(0, 168, 0)');
  })

  it('issue4 div contains valid third button', () => {
    cy.get('div[data-cy=issue4div]')
    .find('button[data-cy=thirdButton]')
    .should('have.text', 'Tercer color');
  })

  it('issue4 div thirdButton changes div color appropriately', () => {
    cy.get('div[data-cy=issue4div]')
    .find('button[data-cy=thirdButton]')
    .click();

    cy.get('div[data-cy=issue4div]')
    .find('div[data-cy=issue4color]')
    .should('have.css', 'background-color', 'rgb(0, 0, 151)');
  })
})
