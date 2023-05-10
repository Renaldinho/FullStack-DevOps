describe('Route test unsigned', () => {
  it('Routing guard works', () => {
    cy.visit('http://localhost:4200');

    //
    cy.get('#2').click();

    cy.url().should('include', '/explore');
  })
})

describe('Sign in test wrong credentials', () => {
  it('Opens home page and tries to use wrong user credentials to log-in', () => {
    cy.visit('http://localhost:4200');

    const email = 'randomUnusedEmail@gmail.com'
    const password = 'someRandomPasswprd'

    cy.get('#emailInput').type(email);
    cy.get('#passwordInput').type(password);
    cy.get('#signInBtn').click();

    cy.get('simple-notification').contains('Error')
  })
})

describe('Sign in test fixed', () => {
  it('Visits the initial project page', () => {
    cy.visit('http://localhost:4200');

    const email = 'AdminUser@gmail.com'
    const password = 'AdminPassword'

    cy.get('#emailInput').type(email);
    cy.get('#passwordInput').type(password);
    cy.get('#signInBtn').click();


    cy.url().should('include', '/home');
  })
})
