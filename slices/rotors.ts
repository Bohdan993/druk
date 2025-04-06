/** @format */

import { AppState } from "./../store/index";
import { Rotor } from "./../types/rotors";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface RotorsState {
  rotors: Rotor[];
  activeRotorsKeys: string[];
  date: string;
}

const initialState: RotorsState = {
  rotors: [],
  activeRotorsKeys: [],
  date: "",
};

export const slice = createSlice({
  name: "rotors",
  initialState,
  reducers: {
    getRotors(state: RotorsState, action: PayloadAction<Rotor[]>): void {
      state.rotors = action.payload;
    },
    updateRotor(state: RotorsState, action: PayloadAction<Rotor>): void {
      const rotor = action.payload;

      state.rotors = state.rotors.map((_rotor) => {
        if (_rotor.id === rotor.id) {
          return rotor;
        }

        return _rotor;
      });
    },
    setActiveRotorsKeys(
      state: RotorsState,
      action: PayloadAction<string[]>
    ): void {
      state.activeRotorsKeys = action.payload;
    },
  },
});

export const { reducer } = slice;
export const { updateRotor, setActiveRotorsKeys } = slice.actions;
export const selectRotorsState = (state: AppState) => state.rotors.rotors;
export const selectActiveRotorsKeysState = (state: AppState) =>
  state.rotors.activeRotorsKeys;
