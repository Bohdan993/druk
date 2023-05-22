import { AppState } from './../store/index';
import { Towns } from './../types/towns';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';


interface TownsState {
    towns: Towns | null,
} 

const initialState: TownsState = {
    towns: null
};

export const slice = createSlice({
  name: 'towns',
  initialState,
  reducers: {
    getTowns(
      state: TownsState,
      action: PayloadAction<Towns>
    ): void {
      state.towns = action.payload;
    }
  }
});

export const { reducer } = slice;
export const selectTownsState = (state: AppState) => state.towns.towns;
