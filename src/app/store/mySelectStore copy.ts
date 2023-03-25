import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  value: 'объём',
};

const mySelectStore = createSlice({
  name: 'mySelect',
  initialState,
  reducers: {
    setMySelectValue(state, obj: PayloadAction<string>) {
      state.value = obj.payload;
    },
  },
});

export const { setMySelectValue } = mySelectStore.actions;
export default mySelectStore;
