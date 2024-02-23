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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("login", (email, password) => {
    // Your login logic here
    HomePage.loginBtn.should('be.visible', { timeout: 10000 }).click();
    LoginPage.loginWithCredentials(email, password);
    cy.wait(2000);
  });
  
  Cypress.Commands.add("logout", () => {
    // Your logout logic here
    cy.get(AccountPage.accountBtn).trigger('mouseover');
    cy.wait(2000);
    cy.get(AccountPage.accountBtnDropdownMenu.last()).click({ force: true });
    cy.wait(1000);
  });