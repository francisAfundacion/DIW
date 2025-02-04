/// <reference types="cypress" />

describe('routes_wildcard', () => {
  
  it('issue8 - random page shows not found with correct header', () => {
      cy.visit("http://localhost:3000/asdf" + Math.random().toString().slice(2, 8))
      
      cy.get('div[data-cy=pageBody]')
      .find('h2[data-cy=pageHeader]')
      .should('have.text', 'No encontrado');
  })
  
  it('issue8 - random page shows not found with correct text', () => {
    cy.visit("http://localhost:3000/asdf" + Math.random().toString().slice(2, 8))
    
    cy.get('div[data-cy=pageBody]')
    .find('p[data-cy=pageText]')
    .should('have.text', 'Disculpa, pero la página que buscas no está o se la han llevado');
  })

  
  it('issue8 - random page shows not found with correct link', () => {
    cy.visit("http://localhost:3000/asdf" + Math.random().toString().slice(2, 8))
    
    cy.get('div[data-cy=pageBody]')
    .find('a')
    .should('have.attr', 'href', '/')
    .should('have.text', 'Inicio');
  })
})
