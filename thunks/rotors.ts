import { rotorsApi } from './../api/rotors-api';
import { slice } from '../slices/rotors';
import { AppThunk } from '../store';

export const getRotors = (): AppThunk => async (dispatch): Promise<void> => {
    const response = await rotorsApi.getRotors()
    dispatch(slice.actions.getRotors(response));
};