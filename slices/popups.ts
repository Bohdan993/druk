import { AppState } from './../store/index';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { Popups } from "../types/popups";

type PopupPayload = {
    key: keyof Popups;
    state: boolean
}

const initialState: Popups = {
    showTestimonialsPopup:false,
    showTestimonialsThanksPopup: false,
    showOrderWithFilePopup: false,
    showOrderWithoutFilePopup: false,
    showOrderThanksPopup: false,
    showFailPopup: false,
    showBurgerTabletPopup: false,
    showBurgerMobilePopup: false,
    showOrderWithFilePopupResponsive: false,
    showOrderWithoutFilePopupResponsive: false
};

export const slice = createSlice({
  name: 'popups',
  initialState,
  reducers: {
    setShowPopup(
      state: Popups,
      action: PayloadAction<PopupPayload>
    ): Popups {
        return {
            ...initialState,
            [action.payload.key]: action.payload.state
        }
    },
    setPopusClose(
    ): Popups {
        return initialState;
    }
  }
});

export const { reducer } = slice;
export const { 
    setShowPopup,
    setPopusClose
} = slice.actions;
export const selectPopupsState = (state: AppState) => state.popups;
