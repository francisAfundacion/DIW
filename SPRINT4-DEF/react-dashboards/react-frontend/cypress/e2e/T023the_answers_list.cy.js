describe('the_answers_list', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/api/v1/dashboards/3/questions/1', { fixture: 'question1.json' })
    cy.intercept('GET', '**/api/v1/dashboards/3/questions/2', { fixture: 'question2.json' })
  })

  it('issue23 - question 1 page has correct data after load', () => {
    cy.visit('http://localhost:3000/dashboards/3/questions/1')
    cy.wait(1000)

    cy.get('div[data-cy=issue23body]')
    .find('h1[data-cy=issue23title]')
    .should('have.text', '¿Qué protocolo usan las peticiones hacia un API REST?')
    cy.get('div[data-cy=issue23body]')
    .find('p[data-cy=issue23description]')
    .should('have.text', 'Entiendo que las peticiones que se mandan desde JavaScript u otro sitio a una API REST se envían y se responden. Tengo entendido que esto sucede mediante el protocolo HTTP... ¿Eso es correcto? ¿El protocolo HTTP no es el que se usa en los navegadores para obtener las páginas web?')
    cy.get('div[data-cy=issue23body]')
    .find('div[data-cy=answersList]')
    .find('div')
    .should('have.length', 2)
  })

  it('issue23 - question 2 page has correct data after load', () => {
    cy.visit('http://localhost:3000/dashboards/3/questions/2')
    cy.wait(1000)

    cy.get('div[data-cy=issue23body]')
    .find('h1[data-cy=issue23title]')
    .should('have.text', '¿Cómo cocino una tortilla con un API REST?')
    cy.get('div[data-cy=issue23body]')
    .find('p[data-cy=issue23description]')
    .should('have.text', 'Si los APIs REST son tan buenos e importantes y se puede hacer de todo con ellos... ¿Cómo puedo cocinar una tortilla usando un API REST en vez de una sartén?')
    cy.get('div[data-cy=issue23body]')
    .find('div[data-cy=answersList]')
    .find('div')
    .should('have.length', 0)
  })

  it('issue23 - question 1 page has correct answer 1 after load', () => {
    cy.visit('http://localhost:3000/dashboards/3/questions/1')
    cy.wait(1000)

    cy.get('div[data-cy=issue23body]')
    .find('div[data-cy=answersList]')
    .find('div')
    .first()
    .find('p')
    .should('have.text', 'Sí, es HTTP. Es el mismo protocolo gracias al cual el navegador baja la página de Wikipedia, por ejemplo. Las peticiones también son GET, POST, PUT, DELETE, básicamente. La diferencia es que en el cuerpo de las peticiones/respuestas suele ir en JSON en vez de HTML.')
  })

  it('issue23 - question 1 page has correct answer 2 after load', () => {
    cy.visit('http://localhost:3000/dashboards/3/questions/1')
    cy.wait(1000)

    cy.get('div[data-cy=issue23body]')
    .find('div[data-cy=answersList]')
    .find('div')
    .eq(1)
    .find('p')
    .should('have.text', 'Correcto. Es como si el protocolo HTTP fuera la red de carreteras. Por ahí circulan muchas peticiones y respuestas. Pues imagínate que las peticiones que van a servidores web son camiones pesados, que llevan un documento HTML, mientras que una petición a un API REST es más como una furgo de DHL que va a toda pastilla para entregarte justo lo que necesitas ;)')
  })

  it('issue23 - question 1 page has correct answers DIV css', () => {
    cy.visit('http://localhost:3000/dashboards/3/questions/1')
    cy.wait(1000)

    cy.get('div[data-cy=issue23body]')
    .find('div[data-cy=answersList]')
    .find('div')
    .first()
    .should('have.css', 'margin', '29px')
    .should('have.css', 'padding', '12px')
    .should('have.css', 'background-color', 'rgb(237, 200, 200)')
    .should('have.css', 'text-align', 'center')
    .should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px 0px')

    cy.get('div[data-cy=issue23body]')
    .find('div[data-cy=answersList]')
    .find('div')
    .eq(1)
    .should('have.css', 'margin', '29px')
    .should('have.css', 'padding', '12px')
    .should('have.css', 'background-color', 'rgb(237, 200, 200)')
    .should('have.css', 'text-align', 'center')
    .should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px 0px')
  })
})

