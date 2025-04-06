/** @format */

import { AppState } from "./../store/index";
import { FileDimensions } from "./../types/calculator-table";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface CalculatorTableState {
  priceTable: FileDimensions | null;
}

const initialState: CalculatorTableState = {
  priceTable: null,
};

export const slice = createSlice({
  name: "calculatorTable",
  initialState,
  reducers: {
    getPriceTable(
      state: CalculatorTableState,
      action: PayloadAction<FileDimensions>
    ): void {
      state.priceTable = action.payload;
    },
  },
});

export const { reducer } = slice;
export const selectCalculatorTableState = (state: AppState) =>
  state.calculatorTable.priceTable;
