import { townsApi } from '@/api/towns-api';
import { slice } from '../slices/towns';
import { AppThunk } from '../store';

export const getTowns = (): AppThunk => async (dispatch): Promise<void> => {
    const response = await townsApi.getTowns();
    dispatch(slice.actions.getTowns(response));
};