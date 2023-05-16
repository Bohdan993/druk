import { AnyAction, combineReducers, Reducer } from '@reduxjs/toolkit';
import { reducer as calculatorTableReducer } from '../slices/calculator-table'
import { reducer as rotorsReducer } from '../slices/rotors'
// import { reducer as contactReducer } from '../slices/contact'
// import { reducer as appReducer } from '../slices/app'
import type { AppState } from './index'
import { HYDRATE } from "next-redux-wrapper";

const combinedReducer = combineReducers({
  calculatorTable: calculatorTableReducer,
  rotors: rotorsReducer,
//   contact: contactReducer,
//   app: appReducer,
});

export const rootReducer: Reducer = (state:  AppState, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};
