import { Basket } from './Basket';
import { render, screen } from '@testing-library/react';
import * as reduxHooks from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

jest.mock('react-redux');
let basket = jest.spyOn(reduxHooks, 'useSelector');

describe('Поведение корзины', () => {
  test('В корзине нет товаров', () => {
    basket.mockReturnValue({
      generalPrice: 0,
      generalCount: 0,
      productsInBasket: [],
    });

    const view = render(
      <MemoryRouter>
        <Basket />
      </MemoryRouter>
    );

    const count = screen.getByTestId('basket-counter');
    const price = screen.getByTestId('basket-price');

    expect(count.textContent).toBe('0');
    expect(price.textContent).toBe('0 ₸');
    expect(view).toMatchSnapshot(`В корзине нет товаров`);
  });
  test('В корзине один товар на сумму 100', () => {
    basket.mockReturnValue({
      generalPrice: 100,
      generalCount: 1,
      productsInBasket: [],
    });

    const view = render(
      <MemoryRouter>
        <Basket />
      </MemoryRouter>
    );

    const count = screen.getByTestId('basket-counter');
    const price = screen.getByTestId('basket-price');

    expect(count.textContent).toBe('1');
    expect(price.textContent).toBe('100 ₸');
    expect(view).toMatchSnapshot(`В корзине один товар на сумму 100`);
  });
});
