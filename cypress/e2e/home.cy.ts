import { cy, it } from 'local-cypress';

describe('проверка домашней страницы', () => {
  it('проверка наличия основных элементов', () => {
    cy.visit('http://localhost:3000/sultan');
    cy.get('header').should('be.visible');
    cy.get('footer').should('be.visible');
  });

  it('проверка перехода в каталог по клику на кнопку "Каталог"', () => {
    cy.visit('http://localhost:3000/sultan');
    cy.contains('Каталог').click();
    cy.url().should('include', '/catalog');
    cy.visit('http://localhost:3000/sultan');
  });

  it('проверка перехода в корзину по клику на кнопку "Корзина"', () => {
    cy.visit('http://localhost:3000/sultan');
    cy.get('a[data-testid="link-bascket-page"]').click();
    cy.url().should('include', '/basket');
    cy.visit('http://localhost:3000/sultan');
  });
});
