describe('post_a_question', () => {

  it('issue27 - dashboard 3 page contains correct form header', () => {
    cy.intercept('GET', '**/api/v1/dashboards/3', { fixture: 'dashboard3.json' })
    cy.visit('http://localhost:3000/dashboards/3')

    cy.get('div[data-cy=formContainer]')
    .find('h4')
    .should('have.length', 1)

    cy.get('div[data-cy=formContainer]')
    .find('h4')
    .should('have.text', '¿No encuentras lo que buscas? Haz una pregunta a la comunidad')
  })

  it('issue27 - dashboard 3 page contains correct form DOM', () => {
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

  it('issue27 - dashboard 3 page contains correct form CSS', () => {
    cy.intercept('GET', '**/api/v1/dashboards/3', { fixture: 'dashboard3.json' })
    cy.visit('http://localhost:3000/dashboards/3')

    cy.get('div[data-cy=formContainer]')
    .should('have.css', 'padding', '13px')
    .should('have.css', 'background-color', 'rgb(185, 200, 200)')
    .should('have.css', 'text-align', 'center')
    .should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px 0px')
  })

  it('issue27 - dashboard 3 page form typing works OK', () => {
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

  it('issue27 - dashboard 3 page correctly sends POST data (test1)', () => {
    cy.intercept('GET', '**/api/v1/dashboards/3', { fixture: 'dashboard3.json' })
    cy.visit('http://localhost:3000/dashboards/3')

    cy.intercept('POST', '**/api/v1/dashboards/3/questions', (req) => {
      const { body } = req
      if (
        body.hasOwnProperty("title") &&
        body.title === "Hola" &&
        body.hasOwnProperty("description") &&
        body.description === "Adiós"
      ) {
        req.alias = "correctPost"
      }
      // Don't modify the real backend
      // https://docs.cypress.io/api/commands/intercept#Controlling-the-response
      req.reply({statusCode: 201, fixture: 'created.json'})
    })

    cy.get('div[data-cy=formContainer]')
    .find('form[data-cy=newQuestionForm]')
    .find('input[data-cy=newQuestionTitle]')
    .type('Hola')

    cy.get('div[data-cy=formContainer]')
    .find('form[data-cy=newQuestionForm]')
    .find('input[data-cy=newQuestionDescription]')
    .type('Adiós')

    cy.get('div[data-cy=formContainer]')
    .find('form[data-cy=newQuestionForm]')
    .find('button[data-cy=postDataButton]')
    .click()

    cy.wait('@correctPost')
  })

  it('issue27 - dashboard 3 page correctly sends POST data (test2)', () => {
    cy.intercept('GET', '**/api/v1/dashboards/3', { fixture: 'dashboard3.json' })
    cy.visit('http://localhost:3000/dashboards/3')

    cy.intercept('POST', '**/api/v1/dashboards/3/questions', (req) => {
      const { body } = req
      if (
        body.hasOwnProperty("title") &&
        body.title === "Hola 2" &&
        body.hasOwnProperty("description") &&
        body.description === "Adiós 2"
      ) {
        req.alias = "correctPost"
      }
      // Don't modify the real backend
      // https://docs.cypress.io/api/commands/intercept#Controlling-the-response
      req.reply({statusCode: 201, fixture: 'created.json'})
    })

    cy.get('div[data-cy=formContainer]')
    .find('form[data-cy=newQuestionForm]')
    .find('input[data-cy=newQuestionTitle]')
    .type('Hola 2')

    cy.get('div[data-cy=formContainer]')
    .find('form[data-cy=newQuestionForm]')
    .find('input[data-cy=newQuestionDescription]')
    .type('Adiós 2')

    cy.get('div[data-cy=formContainer]')
    .find('form[data-cy=newQuestionForm]')
    .find('button[data-cy=postDataButton]')
    .click()

    cy.wait('@correctPost')
  })
})

