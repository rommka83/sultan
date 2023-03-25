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

const catalogProductsStore = createSlice({
  name: 'catalogProducts',
  initialState,
  reducers: {
    localStorageAdded(state, obj: PayloadAction<IProduct>) {
      state.products = [...state.products, obj.payload];
      localStorage.setItem('catalogProduct', JSON.stringify(state.products));
    },
    sort(state, obj: PayloadAction<IProduct[]>) {
      state.products = obj.payload;
    },
  },
});

export const { localStorageAdded, sort } = catalogProductsStore.actions;
export default catalogProductsStore;
