describe('dashboards_list', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/api/v1/dashboards', { fixture: 'dashboardsList.json' })
    cy.visit('http://localhost:3000/')
  })

  it('issue19 - main page correctly loads 5 dashboards', () => {
    cy.wait(1000);
    cy.get('div[data-cy=dashboardsList]')
    .find('div')
    .should('have.length', 5);
  })

  it('issue19 - main page 1st dashboard has correct title, description and CSS', () => {
    cy.wait(1000);
    cy.get('div[data-cy=dashboardsList]')
    .find('div')
    .first()
    .find('h3')
    .should('have.text', 'Mundo JavaScript')
    
    cy.get('div[data-cy=dashboardsList]')
    .find('div')
    .first()
    .find('p')
    .should('have.text', '¿Cómo se formatea una fecha? ¿Qué es eso de la sintaxis async-await? ¿Esto es compatible con versiones anteriores? El hueco para amantes de JavaScript y personas con dudas sobre programación en este mundo');

    cy.get('div[data-cy=dashboardsList]')
    .find('div')
    .first()
    .should('have.css', 'margin', '21px')
    .should('have.css', 'padding', '5px')
    .should('have.css', 'background-color', 'rgb(233, 240, 240)')
    .should('have.css', 'text-align', 'center')
    .should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px 0px')
  })

  it('issue19 - main page 2nd dashboard has correct title, description and CSS', () => {
    cy.wait(1000);
    cy.get('div[data-cy=dashboardsList]')
    .find('div')
    .eq(1)
    .find('h3')
    .should('have.text', 'React')
    
    cy.get('div[data-cy=dashboardsList]')
    .find('div')
    .eq(1)
    .find('p')
    .should('have.text', 'Para preguntar sobre cuestiones de React y su uso');

    cy.get('div[data-cy=dashboardsList]')
    .find('div')
    .eq(1)
    .should('have.css', 'margin', '21px')
    .should('have.css', 'padding', '5px')
    .should('have.css', 'background-color', 'rgb(233, 240, 240)')
    .should('have.css', 'text-align', 'center')
    .should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px 0px')
  })

  it('issue19 - main page 3rd dashboard has correct title, description and CSS', () => {
    cy.wait(1000);
    cy.get('div[data-cy=dashboardsList]')
    .find('div')
    .eq(2)
    .find('h3')
    .should('have.text', 'APIs REST')
    
    cy.get('div[data-cy=dashboardsList]')
    .find('div')
    .eq(2)
    .find('p')
    .should('have.text', 'El desarrollo y consumo de APIs REST ocupa gran parte de nuestro horizonte. ¿Es correcto usar GET en este tipo de petición? ¿Cómo se pueden mandar varios parámetros en la query?');

    cy.get('div[data-cy=dashboardsList]')
    .find('div')
    .eq(2)
    .should('have.css', 'margin', '21px')
    .should('have.css', 'padding', '5px')
    .should('have.css', 'background-color', 'rgb(233, 240, 240)')
    .should('have.css', 'text-align', 'center')
    .should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px 0px')
  })

  it('issue19 - main page 4th dashboard has correct title, description and CSS', () => {
    cy.wait(1000);
    cy.get('div[data-cy=dashboardsList]')
    .find('div')
    .eq(3)
    .find('h3')
    .should('have.text', 'Diseño web: CSS')
    
    cy.get('div[data-cy=dashboardsList]')
    .find('div')
    .eq(3)
    .find('p')
    .should('have.text', '¿Cómo pongo un div a la derecha de otro? ¿Qué atributo CSS necesito para solventar mi problema de diseño? Si algo es bueno, pero no bonito... ¡Entonces no es tan bueno!');

    cy.get('div[data-cy=dashboardsList]')
    .find('div')
    .eq(3)
    .should('have.css', 'margin', '21px')
    .should('have.css', 'padding', '5px')
    .should('have.css', 'background-color', 'rgb(233, 240, 240)')
    .should('have.css', 'text-align', 'center')
    .should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px 0px')
  })

  it('issue19 - main page 5th dashboard has correct title, description and CSS', () => {
    cy.wait(1000);
    cy.get('div[data-cy=dashboardsList]')
    .find('div')
    .last()
    .find('h3')
    .should('have.text', 'Programación web servidor')
    
    cy.get('div[data-cy=dashboardsList]')
    .find('div')
    .last()
    .find('p')
    .should('have.text', 'Para aquellos problemas relacionados con PHP o la programación del entorno servidor');

    cy.get('div[data-cy=dashboardsList]')
    .find('div')
    .last()
    .should('have.css', 'margin', '21px')
    .should('have.css', 'padding', '5px')
    .should('have.css', 'background-color', 'rgb(233, 240, 240)')
    .should('have.css', 'text-align', 'center')
    .should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px 0px')
  })
})
