describe('Route test unsigned', () => {
  it('Visits the initial project page', () => {
    cy.visit('http://localhost:4200');

    // Replace 'your-button-selector' with the appropriate selector for the button you want to click
    cy.get('#2').click();

    // Replace '/expected-route' with the route you expect to navigate to after clicking the button
    cy.url().should('include', '/explore');
  })
})

describe('Sign in test fixed', () => {
  it('Visits the initial project page', () => {
    cy.visit('http://localhost:4200');

    const email = 'rm@danskscanning.dk'
    const password = 'DreamTeam999!'
    // Replace 'your-button-selector' with the appropriate selector for the button you want to click
    cy.get('#emailInput').type(email);
    cy.get('#passwordInput').type(password);
    cy.get('#signInBtn').click();

    // Replace '/expected-route' with the route you expect to navigate to after clicking the button
    cy.contains('ZBkDvc5z4nfU2K5rzSOKjgm5i8T2').should('be.visible')
  })
})
