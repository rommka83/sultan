import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from 'app/types/product';
import axios from 'axios';

import { productsDB } from '../DB';

type catalogProductsState = {
  products: IProduct[];
  pending: boolean;
  error: boolean;
};

let catalogProduct: IProduct[];
const oldData = localStorage.getItem('catalogProduct');
oldData !== null
  ? (catalogProduct = JSON.parse(oldData))
  : (catalogProduct = []);

const initialState: catalogProductsState = {
  products: catalogProduct.length === 0 ? productsDB : catalogProduct,
  pending: false,
  error: false,
};

const catalogProductsStore = createSlice({
  name: 'catalogProducts',
  initialState,
  reducers: {
    localStorageAdded(state, obj: PayloadAction<IProduct>) {
      state.products = [...state.products, obj.payload];
      localStorage.setItem('catalogProduct', JSON.stringify(state.products));

      console.log(state.products);
    },
  },
});

export const { localStorageAdded } = catalogProductsStore.actions;
export default catalogProductsStore;
// export { catalogProductsStore.reducer };
