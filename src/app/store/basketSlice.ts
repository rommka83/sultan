import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBasket } from 'app/types/basket';

const oldData = localStorage.getItem('basket');

const initialState: { data: IBasket } = {
  data: oldData
    ? JSON.parse(oldData)
    : { generalPrice: 0, generalCount: 0, productsInBasket: [] },
};

const basketStore = createSlice({
  name: 'basketStore',
  initialState,
  reducers: {
    basketAdd(state, obj: PayloadAction<IBasket>) {
      state.data = obj.payload;
      localStorage.setItem('basket', JSON.stringify(obj.payload));
    },
  },
});

export const { basketAdd } = basketStore.actions;
export default basketStore;
