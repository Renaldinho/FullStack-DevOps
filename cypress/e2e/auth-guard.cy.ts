describe('Routing Guard Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('should redirect to login page when not authenticated', () => {
    const protectedRoute = 'home';

    cy.visit(`/${protectedRoute}`);

    cy.url().should('include', '/sign-in');
  });
});
