/// <reference types="cypress" />

describe('router_path_params', () => {
  
  it('issue9 - invoices page works OK with random number (2,5)', () => {
    const randomNumber = Math.random().toString().slice(2, 5);
      cy.visit("http://localhost:3000/invoices/" + randomNumber)
      
      cy.get('div[data-cy=issue9body]')
      .find('h4[data-cy=invoiceNumberHeader]')
      .should('have.text', 'Factura Nº' + randomNumber);
  })
  
  it('issue9 - invoices page works OK with random number (2,6)', () => {
    const randomNumber = Math.random().toString().slice(2, 6);
      cy.visit("http://localhost:3000/invoices/" + randomNumber)
      
      cy.get('div[data-cy=issue9body]')
      .find('h4[data-cy=invoiceNumberHeader]')
      .should('have.text', 'Factura Nº' + randomNumber);
  })
})
