// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add(
    'getListDate',
    {
      prevSubject: true,
    },
    (subject) => {
      const arrList = [];
      cy.wrap(subject).each($el => {
        cy.wrap($el)
          .invoke('text').then((text) => {
            var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
            var st = (text.substring(text.length - 10, text.length))
            var dt = new Date(st.replace(pattern,'$3-$2-$1'));
            arrList.push(dt);
        });
     
      });
      return cy.wrap(arrList);
    }
  );