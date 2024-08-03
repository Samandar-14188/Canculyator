import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface CounterState {
  bill: number ;
  tipPercentage: number | null;
  numPeople: number;
}

const initialState: CounterState = {
  bill: 0,
  tipPercentage: null,
  numPeople: 1,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setBill: (state, action: PayloadAction<number>) => {
      state.bill = action.payload;
    },
    setTipPercentage: (state, action: PayloadAction<number | null>) => {
      state.tipPercentage = action.payload;
    },
    setNumPeople: (state, action: PayloadAction<number>) => {
      state.numPeople = action.payload;
    },
    reset: (state) => {
      state.bill = 0;
      state.tipPercentage = null;
      state.numPeople = 1;
    },
  },
});

export const { setBill, setTipPercentage, setNumPeople, reset } = counterSlice.actions;

export const selectBill = (state: RootState) => state.counter.bill;
export const selectTipPercentage = (state: RootState) => state.counter.tipPercentage;
export const selectNumPeople = (state: RootState) => state.counter.numPeople;

export default counterSlice.reducer;
