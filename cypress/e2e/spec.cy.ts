describe('Shop E2E Scenario', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display items and allow navigation to login', () => {
    cy.contains('Мій Fashion Store').should('be.visible');

    cy.get('app-item-card').should('have.length.greaterThan', 0);

    cy.url().should('include', '/login');

    cy.get('input[name="email"]').type('admin@test.com');
    cy.get('input[name="password"]').type('123');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/items');
  });
});