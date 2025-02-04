describe('form_post_question', () => {

  it('issue25 - dashboard 3 page contains correct form header', () => {
    cy.intercept('GET', '**/api/v1/dashboards/3', { fixture: 'dashboard3.json' })
    cy.visit('http://localhost:3000/dashboards/3')

    cy.get('div[data-cy=formContainer]')
    .find('h4')
    .should('have.length', 1)

    cy.get('div[data-cy=formContainer]')
    .find('h4')
    .should('have.text', '¿No encuentras lo que buscas? Haz una pregunta a la comunidad')
  })

  it('issue25 - dashboard 3 page contains correct form DOM', () => {
    cy.intercept('GET', '**/api/v1/dashboards/3', { fixture: 'dashboard3.json' })
    cy.visit('http://localhost:3000/dashboards/3')

    cy.get('div[data-cy=formContainer]')
    .find('form[data-cy=newQuestionForm]')
    .find('input[data-cy=newQuestionTitle]')
    .should('have.attr', 'placeholder', 'Título de la pregunta')
    .type('Hola')

    cy.get('div[data-cy=formContainer]')
    .find('form[data-cy=newQuestionForm]')
    .find('input[data-cy=newQuestionDescription]')
    .should('have.attr', 'placeholder', 'Texto de la pregunta')
    
    cy.get('div[data-cy=formContainer]')
    .find('form[data-cy=newQuestionForm]')
    .find('button[data-cy=postDataButton]')
    .should('have.text', 'Preguntar')
  })

  it('issue25 - dashboard 3 page contains correct form CSS', () => {
    cy.intercept('GET', '**/api/v1/dashboards/3', { fixture: 'dashboard3.json' })
    cy.visit('http://localhost:3000/dashboards/3')

    cy.get('div[data-cy=formContainer]')
    .should('have.css', 'padding', '13px')
    .should('have.css', 'background-color', 'rgb(185, 200, 200)')
    .should('have.css', 'text-align', 'center')
    .should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px 0px')
  })
})

