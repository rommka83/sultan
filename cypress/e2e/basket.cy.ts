import { cy, it } from 'local-cypress';

describe('страница корзины', () => {
  it('клик по кнопке "Оформить заказ"', () => {
    cy.visit('http://localhost:3000/sultan/basket');
    cy.contains('Оформить заказ').click();
    cy.contains('Спасибо за заказ!').should('be.visible');
  });
});
