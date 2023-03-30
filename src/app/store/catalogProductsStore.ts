import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from 'app/types/product';
import DB from '../DB/DB.json';

type catalogProductsState = {
  products: IProduct[];
};

const oldData = localStorage.getItem('catalogProduct');

const initialState: catalogProductsState = {
  products: !oldData ? DB : JSON.parse(oldData),
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
    reset(state) {
      state.products = initialState.products;
    },

    sort(state, obj: PayloadAction<IProduct[]>) {
      state.products = obj.payload;
    },
    filter(state, obj: PayloadAction<string>) {
      state.products = initialState.products;
      state.products = state.products.filter((el) => {
        return el.typeOfCare.indexOf(obj.payload.toLowerCase()) > -1;
      });
    },
  },
});

export const { localStorageAdded, sort, filter, reset } =
  catalogProductsStore.actions;
export default catalogProductsStore;
