import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

const multySelectStore = createSlice({
  name: 'myMultySelect',
  initialState,
  reducers: {
    setMultySelectValue(state, obj: PayloadAction<string>) {
      state.value =
        state.value !== '' ? state.value + ', ' + obj.payload : obj.payload;
    },
    resetMultySelect(state) {
      state.value = '';
    },
  },
});

export const { setMultySelectValue, resetMultySelect } =
  multySelectStore.actions;
export default multySelectStore;
