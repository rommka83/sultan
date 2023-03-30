import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import catalogProductsStore from './catalogProductsStore';
import manufacturerStore from './manufaturers';
import multySelectStore from './multySelectStore';
import mySelectStore from './mySelectStore';
import basketStore from './basketSlice';
import typesOfCareSlice from './typeOfCarSlice';

export const store = configureStore({
  reducer: {
    productsCatalog: catalogProductsStore.reducer,
    multySelectValue: multySelectStore.reducer,
    mySelectValue: mySelectStore.reducer,
    manufacturers: manufacturerStore.reducer,
    basket: basketStore.reducer,
    typesOfCareSlice: typesOfCareSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
