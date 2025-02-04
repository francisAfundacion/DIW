describe('questions_list', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/api/v1/dashboards/1', { fixture: 'dashboard1.json' })
    cy.intercept('GET', '**/api/v1/dashboards/3', { fixture: 'dashboard3.json' })
  })

  it('issue22 - dashboard 1 page has correct data after load', () => {
    cy.visit('http://localhost:3000/dashboards/1')
    cy.wait(1000)

    cy.get('div[data-cy=issue22body]')
    .find('h1[data-cy=issue22title]')
    .should('have.text', 'Mundo JavaScript')
    cy.get('div[data-cy=issue22body]')
    .find('p[data-cy=issue22description]')
    .should('have.text', '¿Cómo se formatea una fecha? ¿Qué es eso de la sintaxis async-await? ¿Esto es compatible con versiones anteriores? El hueco para amantes de JavaScript y personas con dudas sobre programación en este mundo')
    cy.get('div[data-cy=issue22body]')
    .find('div[data-cy=questionsList]')
    .find('div')
    .should('have.length', 0)
  })

  it('issue22 - dashboard 3 page has correct data after load', () => {
    cy.visit('http://localhost:3000/dashboards/3')
    cy.wait(1000)

    cy.get('div[data-cy=issue22body]')
    .find('h1[data-cy=issue22title]')
    .should('have.text', 'APIs REST')
    cy.get('div[data-cy=issue22body]')
    .find('p[data-cy=issue22description]')
    .should('have.text', 'El desarrollo y consumo de APIs REST ocupa gran parte de nuestro horizonte. ¿Es correcto usar GET en este tipo de petición? ¿Cómo se pueden mandar varios parámetros en la query?')
    cy.get('div[data-cy=issue22body]')
    .find('div[data-cy=questionsList]')
    .find('div')
    .should('have.length', 1)
  })

  it('issue22 - dashboard 3 page has correct data after load', () => {
    cy.visit('http://localhost:3000/dashboards/3')
    cy.wait(1000)

    cy.get('div[data-cy=issue22body]')
    .find('h1[data-cy=issue22title]')
    .should('have.text', 'APIs REST')
    cy.get('div[data-cy=issue22body]')
    .find('p[data-cy=issue22description]')
    .should('have.text', 'El desarrollo y consumo de APIs REST ocupa gran parte de nuestro horizonte. ¿Es correcto usar GET en este tipo de petición? ¿Cómo se pueden mandar varios parámetros en la query?')
    cy.get('div[data-cy=issue22body]')
    .find('div[data-cy=questionsList]')
    .find('div')
    .should('have.length', 1)
  })

  it('issue22 - dashboard 3 page has correct QUESTION title after load', () => {
    cy.visit('http://localhost:3000/dashboards/3')
    cy.wait(1000)

    cy.get('div[data-cy=issue22body]')
    .find('div[data-cy=questionsList]')
    .find('div')
    .first()
    .find('h3')
    .should('have.text', '¿Qué protocolo usan las peticiones hacia un API REST?')
  })

  it('issue22 - dashboard 3 page has correct QUESTION description after load', () => {
    cy.visit('http://localhost:3000/dashboards/3')
    cy.wait(1000)

    cy.get('div[data-cy=issue22body]')
    .find('div[data-cy=questionsList]')
    .find('div')
    .first()
    .find('p')
    .should('have.text', 'Entiendo que las peticiones que se mandan desde JavaScript u otro sitio a una API REST se envían y se responden. Tengo entendido que esto sucede mediante el protocolo HTTP... ¿Eso es correcto? ¿El protocolo HTTP no es el que se usa en los navegadores para obtener las páginas web?')
  })

  it('issue22 - dashboard 3 page has correct QUESTION CSS after load', () => {
    cy.visit('http://localhost:3000/dashboards/3')
    cy.wait(1000)

    cy.get('div[data-cy=issue22body]')
    .find('div[data-cy=questionsList]')
    .find('div')
    .first()
    .should('have.css', 'margin', '13px')
    .should('have.css', 'padding', '5px')
    .should('have.css', 'background-color', 'rgb(240, 240, 240)')
    .should('have.css', 'text-align', 'center')
    .should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px 0px')
  })

  it('issue22 - dashboard 3 page has correct QUESTION correctly navigates when clicked', () => {
    cy.visit('http://localhost:3000/dashboards/3')
    cy.wait(1000)

    cy.get('div[data-cy=issue22body]')
    .find('div[data-cy=questionsList]')
    .find('div')
    .first()
    .click()

    cy.url()
    .should('be.equal', 'http://localhost:3000/dashboards/3/questions/11')  })
})

