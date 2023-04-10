import { BlockCheckBox } from './BlockCheckBox';
import { render, screen, fireEvent } from '@testing-library/react';
import * as reduxHooks from 'react-redux';
import * as actions from 'app/store/manufaturers';

import { MemoryRouter } from 'react-router-dom';

jest.mock('react-redux');
let mockedProducts = jest.spyOn(reduxHooks, 'useSelector');
let mockedManufacturerDispatch = jest.spyOn(reduxHooks, 'useDispatch');

describe('Проверка блока с чекбоксами', () => {
  test('Проверка что выбраный производитель чекается', () => {
    mockedProducts.mockReturnValue([
      {
        id: 'YF78STa5WyUCZLELJd9Js',
        url: 'https://ir.ozone.ru/s3/multimedia-1/wc1000/6265230073.jpg',
        name: 'Skinaton',
        sizeType: 'объём',
        size: '50',
        barcode: '1234567891011',
        manufacturer: 'Россия',
        brand: 'SKINATON',
        description:
          'Средство от прыщей на лице / лосьон для умывания для проблемной кожи/ очищающее средство для умывания от прыщей и против акне/ чистая кожа лица',
        price: 1500,
        typeOfCare: ['уход за лицом'],
        cosmeticType: true,
      },
    ]);
    const dispatch = jest.fn();
    mockedManufacturerDispatch.mockReturnValue(dispatch);
    const mockedChecked = jest.spyOn(actions, 'checked');

    render(
      <MemoryRouter>
        <BlockCheckBox />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByTestId('inp'));
    expect(mockedManufacturerDispatch).toHaveBeenCalled();
    expect(mockedChecked).toHaveBeenCalled();
  });
});
