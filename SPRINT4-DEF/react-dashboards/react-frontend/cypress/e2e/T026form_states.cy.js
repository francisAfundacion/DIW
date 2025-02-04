/// <reference types="cypress" />

describe('form_states', () => {


  it('issue26 - dashboard 3 page form typing works OK', () => {
    cy.intercept('GET', '**/api/v1/dashboards/3', { fixture: 'dashboard3.json' })
    cy.visit('http://localhost:3000/dashboards/3')

    cy.get('div[data-cy=formContainer]')
    .find('form[data-cy=newQuestionForm]')
    .find('input[data-cy=newQuestionTitle]')
    .type('Hola amigo')

    cy.get('div[data-cy=formContainer]')
    .find('form[data-cy=newQuestionForm]')
    .find('input[data-cy=newQuestionDescription]')
    .type('Adiós amigo')

    cy.get('div[data-cy=formContainer]')
    .find('form[data-cy=newQuestionForm]')
    .find('input[data-cy=newQuestionTitle]')
    .should('have.value', 'Hola amigo')

    cy.get('div[data-cy=formContainer]')
    .find('form[data-cy=newQuestionForm]')
    .find('input[data-cy=newQuestionDescription]')
    .should('have.value', 'Adiós amigo')
  })
})


