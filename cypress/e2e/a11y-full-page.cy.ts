describe('A11Y Full Page', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/');
    cy.injectAxe();
    cy.checkA11y();
  });
});
