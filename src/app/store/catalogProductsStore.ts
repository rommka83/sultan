import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from 'app/types/product';
import DB from '../DB/DB.json';

type catalogProductsState = {
  products: IProduct[];
  sortString: null | string;
};

const oldData = localStorage.getItem('catalogProduct');

const initialState: catalogProductsState = {
  products: !oldData ? DB : JSON.parse(oldData),
  sortString: null,
};

!oldData && localStorage.setItem('catalogProduct', JSON.stringify(DB));

const catalogProductsStore = createSlice({
  name: 'catalogProducts',
  initialState,
  reducers: {
    localStorageAdded(state, obj: PayloadAction<IProduct>) {
      state.products = [...state.products, obj.payload];
      localStorage.setItem('catalogProduct', JSON.stringify(state.products));
    },
    localStorageRedacted(state, obj: PayloadAction<IProduct[]>) {
      obj.payload.length === 0
        ? (state.products = DB)
        : (state.products = obj.payload);
      localStorage.setItem('catalogProduct', JSON.stringify(state.products));
    },
    reset(state) {
      const oldData = localStorage.getItem('catalogProduct');
      !oldData ? (state.products = DB) : (state.products = JSON.parse(oldData));
      state.sortString = null;
    },
    sort(state, obj: PayloadAction<IProduct[]>) {
      state.products = obj.payload;
    },
    filter(state, obj: PayloadAction<string | null>) {
      if (obj.payload !== null) state.sortString = obj.payload;

      const oldData = localStorage.getItem('catalogProduct');

      if (state.sortString === null) {
        if (oldData) state.products = JSON.parse(oldData);
      } else {
        let b = '';
        if (state.sortString !== null) b = state.sortString;
        if (oldData) {
          state.products = JSON.parse(oldData).filter((el: IProduct) => {
            return el.typeOfCare.indexOf(b.toLowerCase()) > -1;
          });
        } else {
          state.products = DB;
        }
      }
    },
  },
});

export const { localStorageAdded, sort, filter, reset, localStorageRedacted } =
  catalogProductsStore.actions;
export default catalogProductsStore;
