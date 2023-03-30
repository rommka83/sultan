import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ITypeOfCare {
  activ: boolean;
  text: string;
}

const typesOfCare = [
  { activ: false, text: 'Уход за телом' },
  { activ: false, text: 'Уход за руками' },
  { activ: false, text: 'Уход за ногами' },
  { activ: false, text: 'Уход за лицом' },
  { activ: false, text: 'Уход за волосами' },
  { activ: false, text: 'Средства для загара' },
  { activ: false, text: 'Средства для бритья' },
  { activ: false, text: 'Подарочные наборы' },
  { activ: false, text: 'Гигиеническая продукция' },
  { activ: false, text: 'Гигиена полости рта' },
  { activ: false, text: 'Бумажная продукция' },
];

const initialState = {
  typesOfCare: typesOfCare,
};

const typesOfCareSlice = createSlice({
  name: 'typesOfCareSlice',
  initialState,
  reducers: {
    typesOfCareReset(state) {
      state.typesOfCare = initialState.typesOfCare;
    },
    enterType(state, obj: PayloadAction<ITypeOfCare[]>) {
      state.typesOfCare = obj.payload;
    },
  },
});

export const { typesOfCareReset, enterType } = typesOfCareSlice.actions;
export default typesOfCareSlice;
