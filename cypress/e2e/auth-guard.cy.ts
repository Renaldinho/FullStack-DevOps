describe('Routing Guard Test', () => {
  beforeEach(() => {
    // Visit your Angular app's base URL, replace 'http://localhost:4200' with your app's URL
    cy.visit('http://localhost:4200');
  });

  it('should redirect to login page when not authenticated', () => {
    // Replace 'protected-route' with the path of the route you want to test
    const protectedRoute = 'home';

    // Try to visit the protected route
    cy.visit(`/${protectedRoute}`);

    // Check if the URL is the login page
    cy.url().should('include', '/sign-in');
  });
});
