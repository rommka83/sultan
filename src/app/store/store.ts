import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import catalogProductsStore from './catalogProductsStore';

export const store = configureStore({
  reducer: {
    productsCatalog: catalogProductsStore.reducer,
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
