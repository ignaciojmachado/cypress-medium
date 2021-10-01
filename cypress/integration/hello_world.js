/// <reference types="cypress" />

describe('Test suite', () => {
  beforeEach(() => {
    cy.visit('https://docs.cypress.io/faq/questions/using-cypress-faq');
  })
  it('Test scenario', () => {
    cy.get("article li a[href='#How-do-I-get-an-element-s-text-contents']").click();
    cy.url().should('eq', 'https://docs.cypress.io/faq/questions/using-cypress-faq#How-do-I-get-an-element-s-text-contents');
  })
})
