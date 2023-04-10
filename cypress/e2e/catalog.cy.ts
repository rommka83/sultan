import { cy, it } from 'local-cypress';

describe('страница каталога', () => {
  it('проверка наличия основных элементов', () => {
    cy.visit('http://localhost:3000/sultan/catalog');
    cy.get('header').should('be.visible');
    cy.get('footer').should('be.visible');
    cy.get('aside').should('be.visible');
    cy.get('main').should('be.visible');
  });

  it('проверка увеличения количества товаров в корзине при клике на кнопку "В корзину"', () => {
    cy.visit('http://localhost:3000/sultan/catalog');
    cy.contains('В КОРЗИНУ').click();
    cy.get('div[data-testid="basket-counter"]').should('have.text', '1');
    cy.contains('В КОРЗИНУ').click();
    cy.get('div[data-testid="basket-counter"]').should('have.text', '2');
  });
});
