import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from 'app/types/product';
import DB from '../DB/DB.json';

export interface IManufacturer {
  manufacturer: string;
  count: number;
  checked: boolean;
}

const oldData = localStorage.getItem('catalogProduct');
const products = !oldData ? DB : JSON.parse(oldData);

const createdManufacturerList = function (arr: IProduct[]) {
  let _arr = [];
  let groupByUseCase: { [index: string]: number } = {};
  products.forEach((item: IProduct) => {
    if (!groupByUseCase.hasOwnProperty(`${item.manufacturer}`)) {
      groupByUseCase[item.manufacturer] = 0;
    }
    groupByUseCase[item.manufacturer]++;
  });

  for (let key in groupByUseCase) {
    let obj: IManufacturer = {
      manufacturer: key,
      count: groupByUseCase[key],
      checked: false,
    };
    _arr.push(obj);
  }
  return _arr;
};

const initialState = {
  manufacturers: createdManufacturerList(products),
};

const manufacturerStore = createSlice({
  name: 'manufacturer',
  initialState,
  reducers: {
    checked(state, obj: PayloadAction<IManufacturer>) {
      state.manufacturers = state.manufacturers.map((el: IManufacturer) => {
        return el.manufacturer === obj.payload.manufacturer
          ? { ...el, checked: !el.checked }
          : el;
      });
    },
    checkboxReset(state) {
      state.manufacturers = initialState.manufacturers;
    },
  },
});

export const { checked, checkboxReset } = manufacturerStore.actions;
export default manufacturerStore;
